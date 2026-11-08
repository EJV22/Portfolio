import { useState, useEffect } from "react";

import LightMode from "./assets/LightMode.svg";
import DarkMode from "./assets/DarkMode.svg";

function useLightMode() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("light", isLight);
    }, [isLight]);

    return [isLight, setIsLight];
}

function Header({ onContact }) {

    const [isLight, setIsLight] = useLightMode();

    return(

        <header>

            <div className="header-box">
                <h1>EJ</h1>

                <div className="nav-box">

                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); onContact(); }}>Contact</a>
                    <button onClick={() => setIsLight(prev => !prev)}>
                        <img src={isLight ? DarkMode : LightMode} alt="Light Mode or Dark Mode" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;