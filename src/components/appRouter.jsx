import Dashboard from "../pages/Dashboard";
import RequestCard from "../pages/RequestCard";
import Requests from "../pages/Requests";
import AppLayout from "../UI/AppLayout";

import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {path: "dashboard", element: <Dashboard/>},
        {path: "requests",  element: <Requests/>},
        {path: "requests/:id", element: <RequestCard/>},
        {path: "*", element: <Navigate to="dashboard"/>},
        {path: "/", element: <Navigate to="dashboard"/>}
      ]
    }
  ])

export default router