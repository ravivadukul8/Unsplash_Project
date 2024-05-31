import React from "react";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/store";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
