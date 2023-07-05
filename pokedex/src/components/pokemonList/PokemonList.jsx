import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import CardPokemon from "../cardPokemon/CardPokemon";

import "./PokemonList.scss";

export const PokemonList = ({ viewMode }) => {

    const { allPokemons } = useContext(PokemonContext);

    return (
        <div className={`pokemon-list ${viewMode}`}>
            {allPokemons.map((pokemon, index) => (
                <CardPokemon pokemon={pokemon} key={`${index}-${pokemon.id}`} />
            ))}
        </div>
    );
};
