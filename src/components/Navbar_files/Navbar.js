import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

            <nav className="container">

                <input type="checkbox" id="checkbox" />

                <ul>

                <li className="item">
                    <a href="#home">Home</a>
                </li>

                <li className="item">
                    <a href="#about">About</a>
                </li>

                <li className="item">
                    <a href="#projects">Projects</a>
                </li>

                <li className="item">
                    <a href="#experience">Experience</a>
                </li>

                <li className="item priority" style={{color:'white'}}>
                    <a href="#contact">Contact Me</a>
                </li>

                </ul>

                <label htmlFor="checkbox">
                <div className="mobile">
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </div>
                </label>

            </nav>
        </div>
    );
}

export default Navbar;