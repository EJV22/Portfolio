import React, {useEffect, useState} from "react";


function Contact(){

    const [copied, setCopied] = useState(false);

    const copyNumber = async () => {

        await navigator.clipboard.writeText("437-985-7856");
        setCopied (true);

        setTimeout(() => {

            setCopied(false);
        }, 2000);
    };

    useEffect(() => {
        
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }else{
                    entry.target.classList.remove("show");
                }
            });
        });

        const contactElements = document.querySelectorAll(".box");

        contactElements.forEach ((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return(
        <section className="contact" id="contact">
            <div className="contact-box">

                <h2 className="section-title">Contact Me</h2>

                <a href="mailto:viteeiron@gmail.com">
                    <div className="box">

                        <i class="fa-solid fa-envelope"/>
                        <span>viteeiron@gmail.com </span>
                        <span className="copy-tooltip">Click to email</span>
            
                    </div>
                </a>

                <a href="mailto:eiron.j.vite@torontomu.ca">
                    <div className="box">
                        <i class="fa-solid fa-book"/>
                        <span>eiron.j.vite@torontomu.ca</span>
                        <span className="copy-tooltip">Click to email</span>
                    </div>
                </a>


                <a onClick={copyNumber}>
                    <div className="box">
                        <i class="fa-solid fa-phone"/>
                        <span>+1(437)-985-7856</span>
                        <span className="copy-tooltip"> {copied ? `Successfully copied!` : `Click to copy`}</span>

                    </div>  
                </a>

            </div>
        </section>
    );
}

export default Contact;