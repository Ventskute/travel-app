import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Country from "../Country/Country";
export default function Countries() {
  let match = useRouteMatch();

  return (
    <>
      <h2>Countries</h2>

      <ul>
        <li>
          <Link to={`countries/Belarus`}>Belarus</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`countries/:countryName`}>
          <Country />
        </Route>
      </Switch>
    </>
  );
}
