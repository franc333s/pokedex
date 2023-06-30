import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {

    //We create useState to store the first 30 pokemons
    const [allPokemons, setAllPokemons] = useState([])

    //Limit + offset limit the amount of pokemons loaded, in this case 30
    const [offset, setOffset] = useState(0);
    
    // Calling first 30 pokemons from the API
    const getAllPokemons = async(limit = 30) => {

        const baseURL = 'https://pokeapi.co/api/v2/'

        // Const res gets the pokemons from the url passed. It only paints 30 because it has been previously stablish (const above baseURL). Offset is the starting point, first is 0, then it will be 31, etc. 
        const res = await fetch (
            `${baseURL}pokemon?limit=${limit}&offset=${offset}`
        )
        const data = await res.json();

    
        // Const promises enters each pokemon and gets more individual information. 
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        // Promise. helps us get the content info as we have an async function above.
        const results = await Promise.all(promises)
       


        setAllPokemons([
            ...allPokemons,
            ...results
        ])

    }



    useEffect(() => {
        getAllPokemons()
    }, [])


    return (
        <PokemonContext.Provider value={{
            allPokemons,

        }}>
            {children}
        </PokemonContext.Provider>
    )
}