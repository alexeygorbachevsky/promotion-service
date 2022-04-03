import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { addReducers, getStore } from "helpers/reducerRegistry";

import { reducer as auth } from "ducks/auth";
import { reducer as news } from "ducks/news";
import { reducer as tasks } from "ducks/tasks";
import { reducer as alerts } from "ducks/alerts";

import { ErrorBoundary } from "components/error-boundary";

import App from "./App";

addReducers({
  auth,
  tasks,
  news,
  alerts,
});

// Allow webpack to use hot module replacement
if (module.hot) {
  module.hot.accept();
}

const rootEl = document.getElementById("root");

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </ErrorBoundary>,
  rootEl,
);
