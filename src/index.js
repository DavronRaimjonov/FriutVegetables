import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/index";
import Provider from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
