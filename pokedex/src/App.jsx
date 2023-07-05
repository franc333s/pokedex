import { Navigate, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { PokemonProvider } from './context/PokemonProvider';

import Topbar from './components/topbar/Topbar';
import Pokedex from './views/Pokedex';
import PokemonDetail from './views/PokemonDetail';
import Favorites from './views/Favorites';

import './scss/global.scss';

export const ThemeContext = createContext(null);


function App() {

    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) =>(curr === 'light' ? 'dark' : 'light'));
    }

  return (
    <>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className='App' id={theme}>
                <PokemonProvider>
                <header>
                    <Topbar />
                </header>
                <Routes>
                    <Route path='/' element={<Pokedex/>} />
                    <Route path='/pokemon/:id' element={<PokemonDetail/>} />
                    <Route path='/favorites' element={<Favorites/>} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                </PokemonProvider>
            </main>
        </ThemeContext.Provider>
    </>
    )
}

export default App
