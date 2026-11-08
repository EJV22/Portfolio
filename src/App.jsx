import { useState } from "react";
import './index.css'
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from './Projects';
import Footer from "./Footer";
import Contact from "./Contact";


function App() {

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>

      <Header onContact={() => setContactOpen(true)} />

      <Hero onContact={() => setContactOpen(true)} />

      <About/>

      <Projects/>

      <Footer/>

      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export default App;
