import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import Career from "../Career/Career";
import ErrorElement from "../ErrorElement/ErrorElement";

 const myCreatedRouts = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorElement></ErrorElement>,
        children : [
           {
            path : "/",
            loader: () => fetch("/news.json"),
            element : <Home></Home>,
           },
           {
            path: "/about",
            element : <About></About>,
           },
           {
            path : "/career",
            element : <Career></Career>,
           },
        ]
    }
 ])

 export default myCreatedRouts;
