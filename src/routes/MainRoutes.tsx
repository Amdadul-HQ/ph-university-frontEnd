import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import routesGenerator from "../utils/function/routesGenerator";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <MainLayout />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <MainLayout />,
    children: routesGenerator(adminPaths),
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