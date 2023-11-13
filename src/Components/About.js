import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h3 className='mx-4 my-4 align-center'>About Me</h3>
        <div className='row'>
          <div className='col-sm'>
            <img src='/static/headshot.webp' alt='Headshot of fullstack engineer Kendal Enz' className='md-4' id='headshot'></img>
          </div>
          <div className='col-sm float-left' id='about-me-text'>
            <p>
              Hi, I'm Kendal Enz. I'm a fullstack software engineer with a background in communications, journalism and creative writing. I enjoy building websites and writing about harnessing the power of AI to assist with coding and writing tasks. I hold an MA in Writing with a Concentration in Fiction from Johns Hopkins University, a BA in Communications with a Concentration in Journalism from Hood College and a Certificate of Software Engineering from Fullstack Academy. I'm based in Brooklyn, NY, and when I'm not working, I enjoy going on long runs through the city.            
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;