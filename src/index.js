import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ertg from "./projects/Ertg";
import Personal from "./projects/Personal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ertg",
    element: <Ertg />,
  },
  {
    path: "/bvdk",
    element: <Ertg />,
  },
  {
    path: "/graduation",
    element: <Ertg />,
  },
  {
    path: "/sleeer",
    element: <Ertg />,
  },
  {
    path: "/personal",
    element: <Personal />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
