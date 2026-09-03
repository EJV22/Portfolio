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
                            <div className="btn">Contact</div>
                        </div>

                        <div className="socials">
                            <i className="fa-brands fa-square-github"></i>
                            <i className="fa-brands fa-square-linkedin"></i>
                        </div>

                    </div>
            </div>
        </section>        
    );
}

export default About;