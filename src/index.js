import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WordsProvider } from "./components/Context/WordsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WordsProvider>
      <App />
    </WordsProvider>
  </React.StrictMode>
);
