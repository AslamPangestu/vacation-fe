import React from "react";

import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import Home from "pages/Home";
import DetailProduct from "pages/products/Detail";

import "./assets/scss/index.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/product" component={DetailProduct}></Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
