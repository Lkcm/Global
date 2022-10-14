import { useState, useEffect } from 'react'

export function Pokemons () {

    const[pokemons, setPokemons] = useState([])


    
useEffect(() => {
fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json())
.then((data) => setPokemons(data))
},[])




const poke = pokemons.results.map((index) => 
    <li>{index.name}</li>
)



  return (
      <>
    <h2>Pokemons</h2>
    <ul>
        <li>{poke}</li>
    </ul>
   </>
  )
}
