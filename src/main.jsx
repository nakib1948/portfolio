import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtandCraft from "./components/ArtandCraft.jsx";
import ToysStore from "./components/ToysStore.jsx";
import Blog from "./components/Blog.jsx";
import Bookvalley from "./components/Bookvalley.jsx";
import BookManagement from "./components/BookManagement.jsx";
import { Snowfall } from "react-snowfall";
import LostAndFound from "./components/LostAndFound.jsx";

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
    path:"/bookvalley",
    element:<Bookvalley/>
  },
  {
    path:"/bookmanagement",
    element:<BookManagement/>
  },
  {
    path:"/lostAndFound",
    element:<LostAndFound/>
  },
  {
    path:"/blog",
    element:<Blog/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Snowfall  />
    <RouterProvider router={router} />
  </React.StrictMode>
);
