import React from "react";
import About from "./About";
import Competencies from "./Competencies";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div id='home-page'>
      <section class="bg-image container-fluid d-flex"> 
        <div class="align-items-center container-fluid d-flex justify-content-center">
          <div class='hero-text text-white'>
            <h1 class='h1'>Kendal Enz</h1>
            <h2 class='h2'>Software Engineer</h2>
          </div> 
        </div>
      </section>
      <section  id='about-me'>
        <About />
      </section>
      <hr></hr>
      <section class='align-center' id='competencies'>
        <Competencies />
      </section>
      <hr></hr>
      <section class='align-center' id='projects'>
        <Projects />
      </section>
      <hr></hr>
      <section class='align-center' id='contact-me'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;