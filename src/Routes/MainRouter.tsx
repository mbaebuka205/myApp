import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Dashboard/Layout";
import Body from "../Pages/Body";




export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[{
            index: true,
            element:<Body/>
        }]
    }
])