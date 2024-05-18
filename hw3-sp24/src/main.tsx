import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import List from "./routes/list";
import Population from "./routes/population";
import CustomRoute from "./routes/customRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home/" />,
  },
  {
    path: "home/",
    element: <Home />,
  },
  {
    path: "list/",
    element: <List />,
  },
  {
    path: "population/",
    element: <Population />,
  },
  {
    path: "customroute/",
    element: <CustomRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
