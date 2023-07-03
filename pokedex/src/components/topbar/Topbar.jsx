
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";


import "./Topbar.scss";



function Topbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    return (
        <>
           <header className='topbar'>
                <Link to='/' onClick={() => navigate.push('/')}>
                    <img src='/pokedex-logo.png' alt='Logo Pokedex'/>
                </Link>

                <div>
                    <label> {theme === "light" ? "Day Mode" : "Night Mode"} </label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                </div>

            </header>
        </>
    )
}

export default Topbar;