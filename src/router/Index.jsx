import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateCharacters from "../comoponents/CreateCharacters";
import EditCharacters from "../comoponents/EditCharacters";
import DeleteCharacter from "../comoponents/DeleteCharacter";

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
    },
    {
        path: "/delete",
        element: <DeleteCharacter/>
    }

])