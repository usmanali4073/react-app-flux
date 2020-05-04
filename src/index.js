import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// same as ReactDOM
import { render } from "react-dom";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
