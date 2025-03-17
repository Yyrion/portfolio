import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "./pages/Home"
import FuDPage from "./pages/FluteOfDoom"
import GaDPage from "./pages/GreedAndDarkness"
import './index.css'
import CiRPage from "./pages/ClockIsRunning";
  
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
    },
    {
      path:"/theclockisrunning",
      element: <CiRPage />
    }
  ])
  
  export default function Router() {
    return (
      <RouterProvider router={router} />
    )
  }