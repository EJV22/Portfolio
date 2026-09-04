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

            <ul className={`nav-links ${isClicked ? 'active' : ''}`}>
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

            <a href="https://github.com/EJV22" target="_blank" rel="noopener noreferrer">
                <button className="visit-btn" >
                    Visit Github
                </button>
            </a>
        </header>
    );
}

export default Header;