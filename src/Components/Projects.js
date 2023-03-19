import React from "react";

const Projects = () => {
    return (
      <div>
        <h3>Projects</h3>
        <div class='d-flex flex-row flex-wrap justify-content-center'>
          <div class="card mx-4 my-4">
            <img src="../static/EvoGym.png" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h4 class="card-title">EvoGym</h4>
                <p class="card-text">A fitness app.</p>
                <a href="https://fitness-app-ewf.pages.dev/" class="btn btn-primary btn-sm project-button mx-2">Visit site</a>
                <a href="https://github.com/kendalenz/fitness-app" class="btn btn-primary btn-sm project-button mx-2">View code</a>
              </div>
           </div>
           <div class="card mx-4 my-4">
            <img src="../static/Goji.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h4 class="card-title">Goji</h4>
              <p class="card-text">A web app for dog walking.</p>
              <a href="https://goji-rnfn.onrender.com/" class="btn btn-primary btn-sm project-button mx-2">Visit site</a>
              <a href="https://github.com/imlifewilling/capstoneproject-dogwalker" class="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
          </div>
          <div class="card mx-4 my-4 ">
            <img src="../static/wolfe-books-5.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h4 class="card-title">Wolfe Books</h4>
              <p class="card-text">An e-commerce site.</p>
              <a href="https://github.com/kendalenz/wolfe-books-project" class="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;