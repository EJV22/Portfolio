import Headshot from "./assets/Headshot.jpeg";

function Hero ({ onContact }) {


    return (
        <div className="hero">

            <div className="hero-box">

                <div className="intro">

                    <div className="name">
                        <h2>Hello, I'm</h2>
                        <h2>Eiron Vite!</h2>
                    </div>
                        
                    <div className="role">
                        <h3>Software Dev & UI/UX Designer</h3>
                    </div>

                    <div className="social-links">

                        <a href="/" onClick={(e) => { e.preventDefault(); onContact(); }}>Let's Connect!</a>
                        <a href="https://www.linkedin.com/in/eiron-vite/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/EJV22" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>

                <div className="hero-img">

                    <img src={Headshot} alt="Headshot of Me" />
                </div>
                
            </div>

        </div>
    );
}

export default Hero;