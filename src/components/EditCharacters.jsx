import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = "http://localhost:8080/characters";

const EditCharacters = () => {
    const { id } = useParams();
    const isEditing = !!id;

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacters = async () => {
        try {
            const response = await axios.get(url);
            setCharacters(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchCharacters();
    }, []);

    useEffect(() => {
        const fetchCharacter = async () => {
        try {
            const response = await axios.get(`${url}/${id}`);
            const character = response.data;
            setSelectedCharacter(character);
            setNombre(character.name);
            setImagen(character.img);
            setDescripcion(character.description);
        } catch (error) {
            console.error(error);
        }
        };

        if (isEditing) {
        fetchCharacter();
        }
    }, [id, isEditing]);

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        setNombre(character.name);
        setImagen(character.img);
        setDescripcion(character.description);
    };

    const handleCharacterEdit = async (e) => {
        e.preventDefault();
        const data = { name: nombre, img: imagen, description: descripcion };

        try {
        await axios.put(`${url}/${selectedCharacter.id}`, data);
        navigate("/");
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <>
        <h2>{isEditing ? "Crear" : "Editar"} un personaje de la saga</h2>

        <div>
            <label>Seleccionar personaje:</label>
            <select value={selectedCharacter ? selectedCharacter.id : ""} onChange={(e) => handleCharacterSelect(characters.find(character => character.id === e.target.value))}>
            <option value="">Seleccione un personaje</option>
            {characters.map((character) => (
                <option key={character.id} value={character.id}>
                {character.name}
                </option>
            ))}
            </select>
        </div>

        {selectedCharacter && (
            <form onSubmit={handleCharacterEdit}>
            <div>
                <label>Nombre</label>
                <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Imagen</label>
                <input
                type="text"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                />
            </div>
            <div>
                <label>Descripción</label>
                <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">
                {isEditing ? "Guardar cambios" : "Editar personaje"}
            </button>
            </form>
        )}
        </>
    );
};

export default EditCharacters;