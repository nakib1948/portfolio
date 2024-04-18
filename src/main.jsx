import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtandCraft from "./components/ArtandCraft.jsx";
import ToysStore from "./components/ToysStore.jsx";
import Chefrecipe from "./components/Chefrecipe.jsx";
import Blog from "./components/Blog.jsx";
import Bookvalley from "./components/Bookvalley.jsx";
import BookManagement from "./components/BookManagement.jsx";

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
  },
  {
    path:"/bookvalley",
    element:<Bookvalley/>
  },
  {
    path:"/bookmanagement",
    element:<BookManagement/>
  },
  {
    path:"/blog",
    element:<Blog/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
