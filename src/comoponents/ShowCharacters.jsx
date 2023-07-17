import axios from "axios";
import { useEffect, useState } from "react";
import "./showcharacters.css";

const url = "http://localhost:8080/characters";

const ShowCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCharacters(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        characters.map((character) => (
          <div className="contenedor" key={character.id}>
            <div className="contenedor-img">
              <img src={character.img} alt="" />
            </div>
            <div className="contenedor-datos">
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ShowCharacters;
