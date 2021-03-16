import React from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import TravelLogo from "../../assets/logo/travel_app.png";
import "./Header.scss";
const TravelAppLogo = () => <Img src={TravelLogo} width="40px" height="40px" />;

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <TravelAppLogo />
          </Link>
        </div>
      </header>
    </>
  );
}
