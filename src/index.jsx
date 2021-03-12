import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Country from "./views/Country/Country";
import Main from "./views/Main/Main";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:countryName" component={Country} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
