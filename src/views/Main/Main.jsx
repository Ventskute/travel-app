import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Localization from "../../components/Localization/Localization";
import Search from "../../components/Search/Search";
import Country from "../Country/Country";

import "./Main.scss";

export default function Main() {
  return (
    <>
      <header>
        <Link to="/">Main</Link>
        <Search />
        <Localization />
      </header>

      <div className="main">
        <ul>
          <li>
            <Link to="/Belarus">Belarus</Link>
          </li>
          <li>
            <Link to="/Japan">Japan</Link>
          </li>
        </ul>

        <Switch>
          <Switch>
            <Route path="/:countryName" children={<Country />} />
          </Switch>
        </Switch>
      </div>
      <footer> </footer>
    </>
  );
}
