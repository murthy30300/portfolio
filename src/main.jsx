import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./App"; // Import ThemeProvider
import "./index.css";

ReactDOM.render(
  <React.StrictMode className="custom-curso"> 
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);