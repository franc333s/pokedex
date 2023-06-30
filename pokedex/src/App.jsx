import { Navigate, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar"
import Pokedex from "./views/Pokedex"
import PokemonDetail from "./views/PokemonDetail"
import Favorites from "./views/Favorites"
import './scss/global.scss'
import { PokemonProvider } from "./context/PokemonProvider";

function App() {

  return (
    <>
    <PokemonProvider>

    <header>
      <Topbar />
    </header>
     
     <Routes>

        <Route index element={<Pokedex/>} />
        <Route path="pokemon/:id" element={<PokemonDetail/>} />
        <Route path="/favorite" element={<Favorites/>} />

        <Route path="*" element={<Navigate to='/' />} />

     </Routes>
  
    </PokemonProvider>
    </>
  )
}

export default App
