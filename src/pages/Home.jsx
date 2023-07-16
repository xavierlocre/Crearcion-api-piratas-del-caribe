import ShowCharacters from "../comoponents/ShowCharacters"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <NavLink to="/create"> <button>Crear</button> </NavLink>
            <NavLink to="/edit"> <button>Editar</button> </NavLink>

            <ShowCharacters/>
        </div>
    )
}

export default Home