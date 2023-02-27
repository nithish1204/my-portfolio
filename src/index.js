import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Projects from './components/Projects';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
    },
    {
        path: "/projects",
        element:<Projects />,
      }
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
