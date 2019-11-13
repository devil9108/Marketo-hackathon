import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Marks from "./Marks";
import MainPage from './MainPage';

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
