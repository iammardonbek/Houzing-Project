import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { LikeContextProvider } from "./components/Hooks/context";
const queryClient = new QueryClient();

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LikeContextProvider>
        <Router>
          <App />
        </Router>
      </LikeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
