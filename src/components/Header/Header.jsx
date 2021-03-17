import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header({children}) {
  const logo = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      let mouseX = e.pageX;
      let mouseY = e.pageY;
      let traX = (8 * mouseX) / 570 + 0;
      let traY = (8 * mouseY) / 570 + 50;
      logo.current.style.backgroundPosition = `${traX}% ${traY}%`;
    });
  }, []);

  let userLogged;

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <p className="logo_title" ref={logo}>TRAVEL APP</p>
          </Link>
          <button className="sign">Sign in</button>
          {children && children}
        </div>
      </header>
    </>
  );
}
