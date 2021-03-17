import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header({children}) {
  return (
    <>
      <header>
        <div className="container">
          {children}
          <Link to="/">Main</Link>
        </div>
      </header>
    </>
  );
}
