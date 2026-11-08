import EJWatch from "./assets/EJWatch.png";

function Projects() {

    return(

        <div className="projects" id="projects">

            <div className="project-header">

                <h2>Projects</h2>
                <h2>What I Make!</h2>
            </div>

            <div className="project-box">

                <div className="project-article">

                    <h3>EJWatch</h3>

                    <div className="project-desc">

                        <ul>
                            <p>- React.js-based web application!</p>

                            <p>- Uses TMDb API to collect info!</p>

                            <p>- Deployed on Netlify</p>
 
                            <p>- Fully responsive across devices</p>
                        </ul>
                    </div>

                    <a href="/">Repository</a>
                </div>

                <div className="project-img">

                    <img src={EJWatch} alt="EJWatch Homepage" />
                </div>
            </div>
        </div>
    );
}

export default Projects;