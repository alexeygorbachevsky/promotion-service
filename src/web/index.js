import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { addReducers, getStore } from "helpers/reducerRegistry";

import { reducer as auth } from "ducks/auth";
import { reducer as news } from "ducks/news";

import App from "./App";

addReducers({
  auth,
  news,
});

// Allow webpack to use hot module replacement
if (module.hot) {
  module.hot.accept();
}

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  rootEl,
);
