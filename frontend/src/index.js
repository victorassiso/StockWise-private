import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { ContextProvider } from "./contexts/contextProvider";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
