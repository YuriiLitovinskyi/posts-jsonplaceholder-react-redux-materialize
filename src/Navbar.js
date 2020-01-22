import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <a href="#!" className="brand-logo">Posts</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>                
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;
