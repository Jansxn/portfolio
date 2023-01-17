import React from 'react'

export default function Navbar() {
    return (
        <div>

        <nav className = "navbar bg-primary">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className = "name"><a href = "/">J.S.D</a></div>
            <ul className = "links">
                <li><a href = "#intro">About</a></li>
                <li><a href = "#experience">Experience</a></li>
                <li><a href = "#project">Projects</a></li>
                <li><a href = "#">Contact</a></li>
            </ul>
        </nav>

        <nav className = "m-navbar">
            <div>
                <a href = "/" onClick={click_mnav} className = "image-nav">
                <span className="material-symbols-outlined bg-primary rounded-full z-10">
                    menu
                </span>
                </a>

                <div className = "list z-0">
                    <div className = "m-name"><a href = "/"><b>J.S.D</b></a></div>

                    <ul className = "m-links">
                        <li><a href = "#">Home</a></li>
                        <li><a href = "#">About</a></li>
                        <li><a href = "#">Experience</a></li>
                        <li><a href = "#">Projects</a></li>
                        <li><a href = "#">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>

        </div>
    )
}

function click_mnav(e){
    e.preventDefault();
    var navbar = document.querySelector(".list");
    navbar.classList.toggle("active");
}