import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

function PageNav() {

    const { setAllPokemons, offset, setOffset } = useContext(PokemonContext);


    const handleNextPage = async () => {
        //Function to go to next page
        const newOffset = offset + 12;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${newOffset}`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);

        setAllPokemons((prevPokemons) => [...prevPokemons, ...results]);
        setOffset(newOffset); 
    };

    const handlePreviousPage = async () => {
        //Function to go back to the previous page
        const newOffset = offset -12;

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${newOffset}`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        
        const results = await Promise.all(promises);

        setAllPokemons((prevPokemons) => [...prevPokemons, ...results]);
        setOffset(newOffset);

    };

    return (
        <div className="pokedex__pagination">
            {offset > 0 && (
                <button onClick={handlePreviousPage}>Prev Page</button>
            )}

            <button className="btn" onClick={handleNextPage}>Next Page</button>
            
        </div>
    );
}

export default PageNav;