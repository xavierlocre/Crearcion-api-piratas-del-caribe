import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateCharacters from "../components/CreateCharacters";
import EditCharacters from "../components/EditCharacters";
import DeleteCharacter from "../components/DeleteCharacter";

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