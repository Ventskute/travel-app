import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { signin, signup } from "../../utils/api";

import "./AuthForm.scss";

const AuthForm = ({ isSignup, setUser, closeForm }) => {
  const { dict } = useSelector((state) => state);

  const [imgUrl, setImgUrl] = useState(
    "https://www.pinclipart.com/picdir/big/15-154296_gender-neutral-user-account-icon-png-clipart.png"
  );
  const [loginValue, setLoginValue] = useState("");
  const [loginPlaceHolder, setLoginPlaceHolder] = useState("name");

  // const form = useRef(null);

  const reader = new FileReader();
  reader.onload = (e) => {
    setImgUrl(e.target.result);
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = isSignup ? await signup(data) : await signin(data);
    const resStatus = await res.status;
    const resUser = await res.user;
    if (resStatus === 403) {
      setLoginValue("");
      isSignup
        ? setLoginPlaceHolder("this name already taken")
        : setLoginPlaceHolder("name or password is incorrect");
    } else if (resStatus === 200) {
      if (resUser) {
        setUser({
          login: loginValue,
          avatar: `${resUser.avatar}`,
        });
      } else {
        setUser({
          login: loginValue,
          avatar: `http://localhost:3000/statics/users/${loginValue.toLowerCase()}${imgUrl.substr(
            imgUrl.lastIndexOf(".")
          )}`,
        });
      }
      closeForm();
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-form-container">
        <button className="auth-form--close-button" onClick={closeForm}>
          close
        </button>
        <h2 className="auth-form--title">{isSignup ? "Signup" : "Signin"} form</h2>
        <form className="auth-form" onSubmit={submit}>
          <input
            name="login"
            type="text"
            required
            placeholder={loginPlaceHolder}
            value={loginValue}
            className="auth-form--input"
            onChange={(e) => {
              setLoginValue(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            className="auth-form--input"
            required
            placeholder="password"
          />
          {isSignup && (
            <label
              className="add-avatar-btn auth-form--input_file"
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={(e) => {
                  reader.readAsDataURL(e.target.files[0]);
                }}
              />
              {dict.ADD_AVATAR}
            </label>
          )}
          <input type="submit" className="auth-form_submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
