import { ThemeProvider } from "@medusa-ui/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { themes } from "./themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider themes={themes}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
