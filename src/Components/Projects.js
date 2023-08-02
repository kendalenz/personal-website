import React from "react";

const Projects = () => {
    return (
      <div>
        <h3>Projects</h3>
        <p className='fw-light'><span className='fw-bold'>Please note:</span> Projects hosted on free instances of Render may initially take up to 90 seconds to load.</p>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
        <div className="card mx-4 my-4">
            <img src="../static/elysium.png" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className="card-title">Elysium</h4>
                <p className="card-text">An e-commerce site.</p>
                <a href="https://earthen-foods.onrender.com/" className="btn btn-primary btn-sm project-button mx-2">Visit site</a>
                <a href="https://github.com/kendalenz/elysium" className="btn btn-primary btn-sm project-button mx-2">View code</a>
              </div>
           </div>
          <div className="card mx-4 my-4">
            <img src="../static/EvoGym.png" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className="card-title">EvoGym</h4>
                <p className="card-text">A fitness web app.</p>
                <a href="https://fitness-app-ewf.pages.dev/" className="btn btn-primary btn-sm project-button mx-2">Visit site</a>
                <a href="https://github.com/kendalenz/fitness-app" className="btn btn-primary btn-sm project-button mx-2">View code</a>
              </div>
           </div>
           <div className="card mx-4 my-4">
            <img src="../static/Goji.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h4 className="card-title">Goji</h4>
              <p className="card-text">A web app for dog walking.</p>
              <a href="https://goji-rnfn.onrender.com/" className="btn btn-primary btn-sm project-button mx-2">Visit site</a>
              <a href="https://github.com/imlifewilling/capstoneproject-dogwalker" className="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
          </div>
          {/* <div className="card mx-4 my-4 ">
            <img src="../static/wolfe-books-5.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h4 className="card-title">Wolfe Books</h4>
              <p className="card-text">An e-commerce site.</p>
              <a href="https://github.com/kendalenz/wolfe-books-project" className="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
          </div> */}
        </div>
      </div>
    );
};

export default Projects;