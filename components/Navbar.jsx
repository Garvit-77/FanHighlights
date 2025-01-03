import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/highlights">Highlights</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;