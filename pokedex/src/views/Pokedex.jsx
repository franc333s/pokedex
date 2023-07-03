import PageNav from "../components/pageNav/PageNav";
import { PokemonList } from "../components/pokemonList/pokemonList";



function Pokedex() {

    return (
		<>
            <div className="">
                <PokemonList />
            </div>  

            <PageNav />
       
        </>
    )
}

export default Pokedex;