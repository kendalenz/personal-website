import React from 'react';

const Projects = () => {
    return (
      <div>
        <h3>Projects</h3>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          <div className='card mx-4 my-4'>
            <img src='../static/NarrativeGenius-min.png' className='card-img-top' alt='...'></img>
              <div className='card-body'>
                <h4 className='card-title'>NarrativeGenius</h4>
                <p className='card-text'>A creative writing AI chatbot.</p>
                <a href='https://narrative-genius.pages.dev/' className='btn btn-primary btn-sm project-button mx-2'>Visit site</a>
                <a href='https://github.com/kendalenz/narrative-genius' className='btn btn-primary btn-sm project-button mx-2'>View code</a>
              </div>
          </div>
          <div className='card mx-4 my-4'>
            <img src='../static/elysium-min.png' className='card-img-top' alt='...'></img>
              <div className='card-body'>
                <h4 className='card-title'>Elysium</h4>
                <p className='card-text'>An e-commerce site.</p>
                <a href='https://earthen-foods.onrender.com/' className='btn btn-primary btn-sm project-button mx-2'>Visit site</a>
                <a href='https://github.com/kendalenz/elysium' className='btn btn-primary btn-sm project-button mx-2'>View code</a>
              </div>
          </div>
          <div className='card mx-4 my-4'>
            <img src='../static/EvoGym-min.png' className='card-img-top' alt='...'></img>
              <div className='card-body'>
                <h4 className='card-title'>EvoGym</h4>
                <p className='card-text'>A fitness web app.</p>
                <a href='https://fitness-app-ewf.pages.dev/' className='btn btn-primary btn-sm project-button mx-2'>Visit site</a>
                <a href='https://github.com/kendalenz/fitness-app' className='btn btn-primary btn-sm project-button mx-2'>View code</a>
              </div>
          </div>
           <div className='card mx-4 my-4'>
            <img src='../static/gabriel-zapata-min.png' className='card-img-top mb-2' alt='...'></img>
            <div className='card-body'>
              <h4 className='card-title mt-4'>Gabriel Zapata</h4>
              <p className='card-text'>A personl portfolio website.</p>
              <a href='https://gabriel-website.pages.dev/' className='btn btn-primary btn-sm project-button mx-2'>Visit site</a>
              <a href='https://github.com/kendalenz/gabriel-zapata' className='btn btn-primary btn-sm project-button mx-2'>View code</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;