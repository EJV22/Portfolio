import Headshot1 from "./assets/Headshot1.jpeg"

function About(){

    return(

        <section id="about" className="about">
            <div className="about-container">
                <img src={Headshot1} alt=""/>

                    <div className="info-box">
                        <div className ="text">
                            <h3>Hey! I'm</h3>
                            <h1>Eiron Vite</h1>
                            <span>Software Developer</span>
                        </div>

                        <div className="btn-group">
                            <div className="btn">Download Resume</div>
                            <a href="#contact" className="btn">Contact</a>
                        </div>

                        <div className="socials">
                            <a href="https://github.com/EJV22" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-square-github"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/eiron-vite/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-square-linkedin"></i>
                            </a>
                        </div>

                    </div>
            </div>
        </section>        
    );
}

export default About;