import { useState } from "react";
import PageNav from "../components/pageNav/PageNav";
import { PokemonList } from "../components/pokemonList/pokemonList";



function Pokedex() {

    const [viewMode, setViewMode] = useState("grid");

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
    };

    return (
		<>
            <div className="view-mode-toggle">
                <button onClick={toggleViewMode}>
                    {viewMode === "grid" ? "See List View" : "See Grid View"}
                </button>
                
            </div>  


            <PokemonList viewMode={viewMode} />


            <PageNav />
       
        </>
    )
}

export default Pokedex;