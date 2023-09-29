import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import Catagory from "../Pages/Catagory/Catagory";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
    {

        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/Catagory.json')
            },
            {
                path: "/donation",
                element:<Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/catagory/:id",
                element: <Catagory></Catagory>,
                loader: () => fetch('/Catagory.json')
            }

        ]

    }
])

export default Router;