import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import Theme from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
