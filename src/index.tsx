import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/route/AppRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
