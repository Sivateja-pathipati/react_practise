import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
export default ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
