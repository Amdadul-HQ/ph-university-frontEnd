import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const mainRoutes = createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
        {
            path:'/',
            // element:
        }
    ]
}]);

export default mainRoutes;