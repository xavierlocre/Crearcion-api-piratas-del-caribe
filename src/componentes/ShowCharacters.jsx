import { useEffect } from "react"
import axios from "axios"

const url = "http://localhost:8080/characters"
const ShowCharacters = () => {

    useEffect( () => {
        getAllCharacters()
    },[])


    const getAllCharacters = async() =>{
        const response = await axios.get(url)
        console.log(response.data)
    }





  return (
    <div>ShowCharacters</div>
  )
}

export default ShowCharacters