import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import adminRoutes from "./admin.routes";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <MainLayout />,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <MainLayout />,
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default mainRoutes;