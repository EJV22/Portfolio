import React, {useState} from 'react';


function Header(){

    const [isClicked, setIsClicked] = useState(false);

    const toggleClick = () => {

        setIsClicked(!isClicked);
    }

    return(
        <header className="header">
            <a href="#" className="logo">
                <span>Eiron Vite</span>
            </a>

            <ul className={`nav-links ${isClicked ? `active` : ''}`}>
                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#experience">Experience</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
                
            <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleClick}></i>

            <button className="visit-btn" >Visit Github</button>
        </header>
    );
}

export default Header;