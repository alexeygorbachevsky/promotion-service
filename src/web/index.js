import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Allow webpack to use hot module replacement
if (module.hot) module.hot.accept()

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, rootEl);
