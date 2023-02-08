import React from "react";
import { createRoot } from "react-dom/client";
// App
import App from "./App";
// Style
import "./assets/styles/global.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);