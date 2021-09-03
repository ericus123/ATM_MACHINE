import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./redux/store";
import {Provider} from "react-redux";
import {NotificationContainer} from "react-notifications";
import "react-notifications/lib/notifications.css";

ReactDOM.render(
<Provider store={store}>
    <App />
    <NotificationContainer/>
</Provider>,
  document.getElementById("root")
);

