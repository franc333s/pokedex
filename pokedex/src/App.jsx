import { Navigate, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar"
import Pokedex from "./views/Pokedex"
import PokemonDetail from "./views/PokemonDetail"
import Favorites from "./views/Favorites"
import './scss/global.scss'
import { PokemonProvider } from "./context/PokemonProvider";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

    const[theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) =>(curr === "light" ? "dark" : "light"));
    }

  return (
    <>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className="App" id={theme}>


                <PokemonProvider>

                <header>
                    <Topbar />
                </header>
                
                <Routes>

                    <Route index element={<Pokedex/>} />
                    <Route path="/pokemon/:id" element={<PokemonDetail/>} />
                    <Route path="/favorite" element={<Favorites/>} />

                    <Route path="*" element={<Navigate to='/' />} />

                </Routes>
                
                </PokemonProvider>
            </main>

        </ThemeContext.Provider>
    </>
  )
}

export default App
