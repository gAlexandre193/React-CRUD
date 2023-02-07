import React from "react";
import ReactDOM from "react-dom/client";
import ClientsContext from "./context/clients.tsx";
import App from "./App.tsx";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClientsContext>
      <App />
    </ClientsContext>
  </React.StrictMode>
);