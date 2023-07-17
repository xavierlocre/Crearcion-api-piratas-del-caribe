import { createBrowserRouter } from "react-router-dom";
import Home from "../paginas/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])