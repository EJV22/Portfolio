import Headshot1 from "./assets/Headshot1.jpeg"

function Project(){

    return(

        <section id="projects" className="projects">

            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">
                <div className="project-card">

                    <img src={Headshot1} alt="" />
                    <h3>Projects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid aperiam vitae dolorum.</p>
                   
                   <div className="btn-group">
                        <div className="btn">
                            Repo
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    
                    <img src={Headshot1} alt="" />
                    <h3>Projects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid aperiam vitae dolorum.</p>
                   
                   <div className="btn-group">
                        <div className="btn">
                            Repo
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    
                    <img src={Headshot1} alt="" />
                    <h3>Projects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid aperiam vitae dolorum.</p>
                   
                   <div className="btn-group">
                        <div className="btn">
                            Repo
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;