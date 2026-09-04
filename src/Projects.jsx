import Headshot1 from "./assets/Headshot1.jpeg"

function Project(){

    return(

        <section id="projects" className="projects">

            <h2 className="section-title">Projects</h2>


            <div className="projects-grid">

                <div className="project-card">
                    
                    <h3>Storage Cleaner</h3>
                    <p>CLI-based Java application that organizes various app information. Determines and ranks storage space based on deletion priority.</p>
                   
                   <div className="btn-group">
                        <a href="https://github.com/EJV22/Storage-Cleaner" target="_blank" rel="noopener noreferrer">
                            <div className="btn">
                                Repo
                            </div>
                        </a>
                    </div>
                </div>


                <div className="project-card">
                    
                    <h3>Habit Tracker</h3>
                    <p>Python text-to-logic application that allows you to save and track habits, to-do lists, and update personal progress.</p>
                   
                   <div className="btn-group">
                        <a href="https://github.com/EJV22/Habit-Tracker" target="_blank" rel="noopener noreferrer">
                            <div className="btn">
                                Repo
                            </div>
                        </a>
                    </div>
                </div>


                <div className="project-card">
                    
                    <h3>Pizza Maker</h3>
                    <p>Pizza making app built using a Java interface that allows users to directly interact and customize their experience!</p>
                   
                   <div className="btn-group">
                        
                        <a href="https://github.com/EJV22/PizzaGUI" target="_blank" rel="noopener noreferrer">
                            <div className="btn">
                                Repo
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;