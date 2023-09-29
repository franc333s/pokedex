import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../App';


import './Topbar.scss';



function Topbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <>
           <header className='topbar vertical-padding'>
                <Link to='/' onClick={() => navigate.push('/')}>
                    <img className='topbar__logo' src='/pokedex-logo.png' alt='Logo Pokedex'/>
                </Link>

                <div className='topbar__switch'>
                    <label className='tobpar__switch__label'> {theme === "light" ? "Day Mode" : "Night Mode"} </label>
                    <ReactSwitch 
                        onColor="#6F04F7"
                        offColor="#F5E559"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={24}
                        onChange={toggleTheme} 
                        checked={theme === "dark"}
                    />
                </div>
            </header>
        </>
    )
}

export default Topbar;