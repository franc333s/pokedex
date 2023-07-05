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
                <div className="pokedex__grid-list-btn">
                    <button className="btn" onClick={toggleViewMode}>
                        {viewMode === "grid" ? "List View" : "Grid View"}
                    </button>
                </div>
                <PokemonList viewMode={viewMode} />
                <PageNav />
            </main>
        </>
    )
}

export default Pokedex;