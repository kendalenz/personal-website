import React from 'react';
import About from './About';
import Competencies from './Competencies';
import Contact from './Contact';
import Projects from './Projects';
import DownloadPDF from './PromptsUnleashedPDF';

const Home = () => {
  return (
    <div id='home-page'>
      <section className='bg-image container-fluid d-flex'> 
        <div className='align-items-center container-fluid d-flex justify-content-center'>
          <div className='hero-text text-white'>
            <h1 className='h1 mb-4'>Kendal Enz</h1>
            <h2 className='h2'>Writer</h2>
            <h4 className='h4'>and</h4>
            <h2 className='h2'>Software Engineer</h2>
          </div> 
        </div>
      </section>
      <section  id='about-me'>
        <About />
      </section>
      <hr className='mx-auto my-4'></hr>
      <section className='align-center' id='competencies'>
        <Competencies />
      </section>
      <hr className='mx-auto my-4'></hr>
      <section className='align-center' id='books'>
        <DownloadPDF />
      </section>
      <hr className='mx-auto my-4'></hr>
      <section className='align-center' id='projects'>
        <Projects />
      </section>
      <hr className='mx-auto my-4'></hr>
      <section className='align-center' id='contact-me'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;