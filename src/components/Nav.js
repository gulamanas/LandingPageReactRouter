import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_logo">TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu_icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className="nav_item">
                        <Link to='/' className='nav_links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to='/services' className='nav_links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to='/products' className='nav_links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to='/sign-up' className='nav_links_mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
