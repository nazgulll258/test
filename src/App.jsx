import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [Data,setData] = useState([])
useEffect(() =>{
const getRequest = async() =>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
    const pokemon = await Promise.all(response.data.results.map(async(todos) =>{
   const getpokemon = await axios.get(todos.url)
   return getpokemon.data
    }))
    setData(pokemon)
    console.log(pokemon);

  }
  getRequest()
},[])
  
  return (
    <div>
      {Data.map((pokemon,index) =>(
   <div key={index}>
    <span>
      {pokemon.name}
      <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
    </span>
    </div>
       

   


      ))}
    </div>
  )
}

export default App
