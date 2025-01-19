import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
