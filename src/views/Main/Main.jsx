import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Localization from "../../components/Localization/Localization";
import Search from "../../components/Search/Search";
import Countries from "../Countries/Countries";

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
            <Link to="/countries">Countries</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/countries">
            <Countries countryName="Belarus" />
          </Route>
        </Switch>
      </div>
      <footer> </footer>
    </>
  );
}
