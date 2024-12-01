import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "./pages/Home"
import FuDPage from "./pages/FluteOfDoom"
import GaDPage from "./pages/GreedAndDarkness"
import './index.css'
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/fluteofdoom",
      element: <FuDPage />
    },
    {
      path:"/greedanddarkness",
      element: <GaDPage />
    }
  ])
  
  export default function Router() {
    return (
      <RouterProvider router={router} />
    )
  }