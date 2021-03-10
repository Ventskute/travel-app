import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">Main</Link>
        </div>
      </header>
    </>
  );
}
