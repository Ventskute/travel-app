import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../utils/actions";

import "./Header.scss";

export default function Header({ children }) {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const logo = useRef(null);

  const logoutUser = () => {
    dispatch({ type: actions.REMOVE_USER });
  };
  const openSignupForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: true, isSignup: true }
    });
  };
  const openSigninForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: true, isSignup: false }
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      let mouseX = e.pageX;
      let mouseY = e.pageY;
      let traX = (8 * mouseX) / 570 + 0;
      let traY = (8 * mouseY) / 570 + 50;
      logo.current.style.backgroundPosition = `${traX}% ${traY}%`;
    });
  }, []);

  return (
      <header>
        <div className="container">
          <Link to="/">
            <p className="logo_title" ref={logo}>TRAVEL APP</p>
          </Link>

          <div className="login-buttons">
            { !user && <>
              <button className="login-button" onClick={openSignupForm}>Sign up</button>
              <button className="login-button" onClick={openSigninForm}>Log in</button>
            </>}
            { user && <>
              { user.avatar &&
                <div className="avatar-wrapper">
                  <img src={user.avatar}/>
                </div>
              }
              <h3 className="login-name">{user.login}</h3>
              <button className="login-button" onClick={logoutUser}>Log out</button>
            </>}
          </div>

          {children && children}
        </div>
      </header>
  );
}
