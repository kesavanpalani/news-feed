import {NavLink} from 'react-router-dom'
import './navbar.css'
import {ReactComponent as Hamburger} from '../img/hamburger.svg';
import {ReactComponent as BatmanLogo} from '../img/batman.svg';
import { useContext, useEffect, useState } from 'react';
import { FavoriteIDsContext } from './context';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [favIds] = useContext(FavoriteIDsContext)
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };

    useEffect(() => console.log("seri da", favIds), [favIds])

    return (
        <nav className="navbar">
            <div className="container">
                <div className='title-container'>
                    <BatmanLogo />
                    <h4>Wayne enterprise</h4>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger/>
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to = "/">
                                Stories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/favorites">
                                Favourites ({favIds.length})
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar