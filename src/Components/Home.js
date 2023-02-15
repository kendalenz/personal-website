import React from "react";

const Home = () => {
    return (
        <div>
        <section class="bg-image container-fluid d-flex "> 
            <div class="align-items-center container-fluid d-flex justify-content-center">
                <div class='hero-text text-white'>
                    <h1 class='h1'>Kendal Enz</h1>
                    <h2 class='h2'>Software Engineer</h2>
                    <button type="button" class="btn btn-primary my-4" id='hero-button'>Contact Me</button>

                </div> 
            </div>
        </section>
        <section id='about-me'>
            <div class='mx-4 my-4'>
                <h1>About Me</h1>
                <p>
                    Hello! I'm a fullstack software engineer with an eye for design, and I love crafting beautiful websites. My background in journalsim and creative writing has given me excellent communications skills, and my work as a project manager has allowed me to develope exceptional organizational and time management skills. I'm based in Brooklyn, NY. 
                </p>
            </div>
        </section>
        <hr></hr>
        <section id='competencies'>
            <h1>Competencies</h1>
            <ul>
                JavaScript
                <br></br>
                React/Redux
                <br></br>
                Node
                <br></br>
                Express
                <br></br>
                PostgreSQL
                <br></br>
                Sequelize
                <br></br>
                RESTful APIs
                <br></br>
                CSS3
                <br></br>
                HTML5
                <br></br>
                Bootstrap
                <br></br>
                Git
                <br></br>
                Github
            </ul>
        </section>
        <hr></hr>
        <section>
            <h1>Projects</h1>
            <div class='d-flex flex-row justify-content-center'>
            <div class="card mx-4 my-4">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary project-button">Go somewhere</a>
                </div>
            </div>
            <div class="card mx-4 my-4">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary project-button">Go somewhere</a>
                </div>
            </div>
            <div class="card mx-4 my-4">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary project-button">Go somewhere</a>
                </div>
            </div>
            </div>
        </section>
        <hr></hr>
        <section>
            <h1>Contact Me</h1>
        </section>
        </div>
    )
};

export default Home;