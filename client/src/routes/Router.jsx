import { createBrowserRouter } from "react-router-dom";
import {AdminLayout} from "../layout/AdminLayout";
import MainLayout from "../layout/MainLayout";
import AboutMe from "../views/admin/AboutMe";
import Dashboard from "../views/admin/Dashboard";
import Home from "../views/Home";
import PortfolioDetails from './../views/PortfolioDetails';

const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio/:slug",
        element: <PortfolioDetails />,
      },
    ],
  },
  // admin layout
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/about",
        element: <AboutMe />,
      },
      
    ],
  },
]);
export default router;
