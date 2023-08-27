import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtandCraft from "./components/ArtandCraft.jsx";
import ToysStore from "./components/ToysStore.jsx";
import Chefrecipe from "./components/Chefrecipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/artandcraft",
    element:<ArtandCraft/>
  },
  {
    path:"/toysstore",
    element:<ToysStore/>
  },
  {
    path:"/chefrecipe",
    element:<Chefrecipe/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
