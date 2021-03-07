import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Country from "../Country/Country";
export default function Countries({ countryName }) {
  let match = useRouteMatch();

  return (
    <>
      <h2>Countries</h2>

      <ul>
        <li>
          <Link to={`${match.url}/${countryName}`}>{countryName}</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:${countryName}`}>
          <Country name={countryName} />
        </Route>
      </Switch>
    </>
  );
}
