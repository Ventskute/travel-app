import React, { useRef, useState } from "react";

import "./AuthForm.scss";

const AuthForm = ({
  isSignup,
  url = "http://localhost:3000/",
  setUser = (user) => console.log("you should provide setUser"),
}) => {
  const [imgUrl, setImgUrl] = useState(
    "https://www.pinclipart.com/picdir/big/15-154296_gender-neutral-user-account-icon-png-clipart.png"
  );
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
        isSignup
          ? setLoginPlaceHolder("this login already taken")
          : setLoginPlaceHolder("login or password is incorrect");
      } else if (res.status === 200) {
        setUser({ login: loginValue });
      }
    });
  };

  return (
    <div className="auth-form-container">
      <h3>{isSignup ? "Signup" : "Signin"} form</h3>
      <form className="auth-form" ref={form} onSubmit={submit}>
        <div className="auth-form_input">
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
            <input name="name" type="text" required placeholder="name" />
          </div>
        )}
        <div className="auth-form_input">
          <input type="password" name="password" required placeholder="password" />
        </div>
        {isSignup && (
          <div className="auth-form_input input-imgFile">
            <label className="add-avatar-btn">
              <img src={imgUrl} className="preImg" alt="avatar" />
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={(e) => {
                  reader.readAsDataURL(e.target.files[0]);
                }}
              />
              add avatar
            </label>
          </div>
        )}
        <input type="submit" className="auth-form_submit button" value="submit" />
      </form>
    </div>
  );
};

export default AuthForm;
