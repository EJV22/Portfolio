
function Contact(){

    const copyNumber = () => {

        navigator.clipboard.writeText("437-985-7856");
    };

    return(
        <section className="contact" id="contact">
            <div className="contact-box">

                <h2 className="section-title">Contact Me</h2>

                <div className="box">

                    <a href="mailto:viteeiron@gmail.com">
                        <i class="fa-solid fa-envelope"/>
                        <span>viteeiron@gmail.com </span>
                        <span className="copy-tooltip">Click to email</span>
                    </a>

                </div>

                <div className="box">
                    <a href="mailto:eiron.j.vite@torontomu.ca">
                        <i class="fa-solid fa-book"/>
                        <span>eiron.j.vite@torontomu.ca</span>
                        <span className="copy-tooltip">Click to email</span>
                    </a>

                </div>

                <div className="box">
                    <a onClick={copyNumber}>
                        <i class="fa-solid fa-phone"/>
                        <span>+1(437)-985-7856</span>
                        <span className="copy-tooltip">Click to copy</span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;