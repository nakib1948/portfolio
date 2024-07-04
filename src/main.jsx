import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog.jsx";
import { Snowfall } from "react-snowfall";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ProjectDetails from "./components/Projects/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Snowfall />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
