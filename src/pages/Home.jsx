import ShowCharacters from "../components/ShowCharacters"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <NavLink to="/create"> <button>Crear</button> </NavLink>
            <NavLink to="/edit"> <button>Editar</button> </NavLink>
            <NavLink to="/delete"> <button>Borrar</button> </NavLink>

            <ShowCharacters/>
        </div>
    )
}

export default Home