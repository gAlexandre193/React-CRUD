import React from "react";
import { createRoot } from "react-dom/client";
import ModAppProvider from "./context/modApp";
import ClientsProvider from "./context/clients";
import App from "./App";
// Style
import "./assets/styles/global.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ModAppProvider>
      <ClientsProvider>
        <App />
      </ClientsProvider>
    </ModAppProvider>
  </React.StrictMode>
);