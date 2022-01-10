import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar-logo">TRVL <i className="fab fa-typo3"></i></Link>
            </div>
        </nav>
    )
}

export default Nav
