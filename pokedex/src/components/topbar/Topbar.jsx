
import { Link } from "react-router-dom";
import "./Topbar.scss";

function Topbar() {
 
    return (
		<>
           <header className='topbar'>
				<Link to='/'>
					<img src='/public/pokedex-logo.png' alt='Logo Pokedex'/>
				</Link>

				
			</header>
        </>
    )
}

export default Topbar;