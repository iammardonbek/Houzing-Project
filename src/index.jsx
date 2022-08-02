import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Fallback } from "./style";
import { BarWave } from "react-cssfx-loading";
import { FavoriteContextProvider } from "./components/Hooks/context";
const queryClient = new QueryClient();
const App = lazy(() => {
  return Promise.all([
    import("./components/App"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports);
});

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoriteContextProvider>
        <Router>
          <Suspense
            fallback={
              <Fallback>
                <BarWave color="#0D263B" width="100px" height="70px" />
              </Fallback>
            }
          >
            <App />
          </Suspense>
        </Router>
      </FavoriteContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
// root.render(<Mock />);
