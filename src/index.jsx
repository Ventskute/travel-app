import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import actions from "./utils/actions";
import rootReducer from "./utils/rootReducer";
import Country from "./views/Country/Country";
import Main from "./views/Main/Main";

import './index.scss'

export default function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:countryName" component={Country} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
