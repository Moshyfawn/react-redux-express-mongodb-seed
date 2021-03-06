import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { FormThemeProvider } from "react-standalone-form";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <FormThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormThemeProvider>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
