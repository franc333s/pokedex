import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import CardPokemon from '../cardPokemon/CardPokemon'

export const PokemonList = () => {
    const { allPokemons } = useContext(PokemonContext);
  
    return (
      <div className="">
        {allPokemons.map((pokemon, index) => (
          <CardPokemon pokemon={pokemon} key={`${index}-${pokemon.id}`} /> 
        ))}
      </div>
    );
  };