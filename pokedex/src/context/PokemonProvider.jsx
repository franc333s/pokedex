import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {

    //We create useState to store the first 12 pokemons
    const [allPokemons, setAllPokemons] = useState([])

    // Limit + offset limit the amount of pokemons loaded, in this case 12
    const [offset, setOffset] = useState(0);
    
    // Calling first 12 pokemons from the API
    const getAllPokemons = async(limit, offset) => {

        const baseURL = 'https://pokeapi.co/api/v2/';

        // Const res gets the pokemons from the url passed. It only paints 12 because it has been previously stablish (const above baseURL). Offset is the starting point, first is 0, then it will be 13, etc. 
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

    
        // Const promises enters each pokemon and gets more individual information. 
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

        // Promise. helps us get the content info as we have an async function above.
        const results = await Promise.all(promises)

        setAllPokemons(results);
    };


    useEffect(() => {
        getAllPokemons(12, offset)
    }, [offset])


    return (
        <PokemonContext.Provider value={{ allPokemons, setAllPokemons, offset, setOffset }}>
            {children}
        </PokemonContext.Provider>
    );
};