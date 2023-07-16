import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateCharacters from "../comoponents/CreateCharacters";
import EditCharacters from "../comoponents/EditCharacters";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <CreateCharacters/>
    },
    {
        path: "/edit",
        element: <EditCharacters/>
    }

])