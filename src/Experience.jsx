import Headshot1 from "./assets/Headshot1.jpeg"

function Experience(){

    return(

        <section id="experience" className="experience">

            <h2 className="section-title">Experience</h2>

            <div className="experience-info">

                <div className="grid">
                    <div className="grid-card">

                        <div className="icons">
                            <i class="fa-brands fa-html5"/> <i class="fa-brands fa-css3-alt"/>
                        </div>

                        <span>Frontend Development</span>
                        <h3>1 year</h3>
                        <p>Self-studied CSS/HTML/JS fundamentals and implemented a React + Vite framework for this website! Familiar with responsiveness, web scalability, and deployment.</p>
                    </div>

                    <div className="grid-card">
                        <i class="fa-solid fa-file-code"></i>

                        <span>Community Involvement</span>
                        <h3>3+ years</h3>
                        <p>Directed and volunteered for multiple clubs and initiatives. Currently an Events Associate for TMU BYTE and a Course Tutoring Coordinator for USSTM!</p>
                    </div>

                    <div className="grid-card">
                        <i class="fa-solid fa-laptop"></i>

                        <span>Service</span>
                        <h3>3+ years</h3>
                        <p>Formerly worked for Canada's Largest running dance business, Studio North. Different customer service jobs in retail and fast food!</p>
                    </div>

                    <div className="grid-card">
                        <i class="fa-solid fa-list"></i>

                        <span>Fundamentals</span>
                        <h3>1+ years</h3>
                        <p>Familiar with Object Oriented Programming, data structures, algorithms, and project scalability.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Experience;