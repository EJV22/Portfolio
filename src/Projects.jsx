import React, { useEffect, useState } from "react"

function Project(){

    useEffect(() => {

        const observer = new IntersectionObserver ((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        }, {
            threshold: 0.4,
            rootMargin: "0px 0px -50px 0px"
        });

        const cards = document.querySelectorAll(".project-card");

        cards.forEach((card) =>{

            observer.observe(card);
        });
    }, []);

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
                                Repository
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
                                Repository
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
                                Repository
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;