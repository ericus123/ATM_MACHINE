import React from "react";
import ReactDOM from "react-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <NotificationContainer />
  </Provider>,
  document.getElementById("root")
);

