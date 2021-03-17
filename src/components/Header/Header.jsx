import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header({ children }) {
  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      let mouseX = e.pageX;
      let mouseY = e.pageY;
      let traX = (4 * mouseX) / 570 + 40;
      let traY = (4 * mouseY) / 570 + 50;
      let logoEl = document.getElementsByClassName("logo_title")[0];
      logoEl.style.cssText = `background-position: ${traX}% ${traY}%`;
    });
  }, []);

  let userLogged;

  return (
    <>
      <header>
        <div className="container">
          <div className="logo_title">
            <Link to="/">
              <p>TRAVEL APP</p>
            </Link>
          </div>
          <button className="sign">Sign in</button>
          {children && children}
        </div>
      </header>
    </>
  );
}
