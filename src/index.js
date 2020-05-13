import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./07052020";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
