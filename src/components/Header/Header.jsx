import React from "react";
import { Link } from "react-router-dom";

import TravelLogo from "../../assets/logo/travel_app.png";

import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img className="travel_logo" src={TravelLogo} />
          </Link>
        </div>
      </header>
    </>
  );
}
