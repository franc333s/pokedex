import { useState } from "react";
import PageNav from "../components/pageNav/PageNav";
import { PokemonList } from "../components/pokemonList/pokemonList";



function Pokedex() {

    const [viewMode, setViewMode] = useState("list");

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === "list" ? "grid" : "list"));
    };

    return (
		<>
        <main className="vertical-padding">
            <div className="view-mode-toggle">
                <button onClick={toggleViewMode}>
                    {viewMode === "grid" ? "See List View" : "See Grid View"}
                </button>
                
            </div>  


            <PokemonList viewMode={viewMode} />


            <PageNav />
        </main>
        </>
    )
}

export default Pokedex;