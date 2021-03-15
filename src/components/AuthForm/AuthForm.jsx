import React, { useEffect, useRef, useState } from "react";
import "./AuthForm.scss";
const AuthForm = ({ isSignup, url = "http://localhost:3000/", setUser }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [loginValue, setLoginValue] = useState("");
  const [loginPlaceHolder, setLoginPlaceHolder] = useState("login");
  const form = useRef(null);
  const reader = new FileReader();
  reader.onload = (e) => {
    setImgUrl(e.target.result);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch(`${url}${isSignup ? "signup" : "signin"}`, { method: "POST", body: data }).then((res) => {
      if (res.status === 403) {
        setLoginValue("");
        setLoginPlaceHolder("this login already taken");
      } else if (res.status === 200) {
        setUser({ login: loginValue });
      }
    });
  };

  return (
    <div className="auth-form-container">
      <form ref={form} onSubmit={submit}>
        <div className="auth-form_input">
          <label htmlFor="login">login</label>
          <input
            name="login"
            type="text"
            required
            placeholder={loginPlaceHolder}
            value={loginValue}
            onChange={(e) => {
              setLoginValue(e.target.value);
            }}
          />
        </div>
        {isSignup && (
          <div className="auth-form_input">
            <label htmlFor="name">name</label>
            <input name="name" type="text" required />
          </div>
        )}
        <div className="auth-form_input">
          <label htmlFor="password">password</label>
          <input type="password" name="password" required />
        </div>
        {isSignup && (
          <div className="auth-form_input input-imgfile">
            {imgUrl && <img src={imgUrl} className="preImg" alt="avatar" />}
            <label htmlFor="avatar">avatar</label>
            <input
              type="file"
              accept="image/*"
              name="avatar"
              onChange={(e) => {
                reader.readAsDataURL(e.target.files[0]);
              }}
            />
          </div>
        )}
        <input type="submit" className="auth-form_submit button" />
      </form>
    </div>
  );
};

export default AuthForm;
