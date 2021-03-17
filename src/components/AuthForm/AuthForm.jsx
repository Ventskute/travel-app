import React, { useRef, useState } from "react";
import { signin, signup } from "../../utils/api";

import "./AuthForm.scss";

const AuthForm = ({ isSignup, setUser, closeForm }) => {
  const [imgUrl, setImgUrl] = useState(
    "https://www.pinclipart.com/picdir/big/15-154296_gender-neutral-user-account-icon-png-clipart.png"
  );
  const [loginValue, setLoginValue] = useState("");
  const [loginPlaceHolder, setLoginPlaceHolder] = useState("name");
  const form = useRef(null);
  const reader = new FileReader();
  reader.onload = (e) => {
    setImgUrl(e.target.result);
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const resStatus = isSignup ? await signup(data) : await signin(data);
    if (resStatus === 403) {
      setLoginValue("");
      isSignup
        ? setLoginPlaceHolder("this name already taken")
        : setLoginPlaceHolder("name or password is incorrect");
    } else if (resStatus === 200) {
      setUser({ login: loginValue });
      closeForm();
    }
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
