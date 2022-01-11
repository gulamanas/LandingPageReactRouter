import React, { useState } from 'react'
import './Nav.css'
import { Button } from './Button';
import { Link } from 'react-router-dom'

function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

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
                {button && <Button buttonStyle='btn_outline'>Sign Up</Button>}
            </div>
        </nav>
    )
}

export default Nav
