import React from "react";

const Home = () => {
    return (
        <div>

        <section class="bg-image container-fluid d-flex"> 
            <div class="align-items-center container-fluid d-flex justify-content-center">
                <div class='hero-text text-white'>
                    <h1 class='h1'>Kendal Enz</h1>
                    <h2 class='h2'>Software Engineer</h2>
                    {/* <button class="btn btn-primary my-4" id='hero-button'>Contact Me</button> */}
                </div> 
            </div>
        </section>

        <section  id='about-me'>
            <div class="container">
                <h3 class='mx-4 my-4 align-center'>About Me</h3>
                <div class="row">
                    <div class="col-sm">
                        <img src="/static/headshot.jpg" id='headshot'></img>
                    </div>
                    <div class="col-sm float-left" id='about-me-text'>
                        <p>Hello! I'm a fullstack software engineer with an eye for design, and I love crafting beautiful websites. My background in journalsim and creative writing has given me excellent communications skills, and my work as a project manager has allowed me to develope exceptional organizational and time management skills.</p>  
                        <p>In my free time, I enjoy long runs through the city, reading in the park and writing short stories. I'm based in Brooklyn, New York.</p>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>

        <section class='align-center' id='competencies'>
            <h3>Competencies</h3>
            <p class='mx-4 my-4'>
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
            </p>
        </section>
        <hr></hr>
        <section class='align-center' id='projects'>
            <h3>Projects</h3>
            <div class='d-flex flex-row flex-wrap justify-content-center'>
            <div class="card mx-4 my-4">
                <img src="../static/Goji.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Goji</h5>
                    <div >
                    <p>A web app for dog walking.</p>
                    <p class="card-text">Worked on a team of four to build app from wireframe to deployment.
                    Responsible for building user and pet profile pages using JavaScript, RESTful APIs, React/Redux, Sequelize, PostgreSQL, Express, CSS and HTML5, allowing users to create, update and delete profiles.</p>
                    </div>
                    <a href="https://goji-rnfn.onrender.com/" class="btn btn-primary project-button mt-2">Visit site</a>
                </div>
            </div>
            <div class="card mx-4 my-4">
                <img src="../static/Wolfe-Books.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Wolfe Books</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary project-button">View code</a>
                </div>
            </div>
            <div class="card mx-4 my-4">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary project-button">Visit site</a>
                </div>
            </div>
            </div>
        </section>
        <hr></hr>
        <section class='align-center' id='contact-me'>
            <h3>Contact Me</h3>
            <div class='d-flex flex-row justify-content-center'>
            <div class='mx-4 my-4'>
            <a class='social-icon' href="https://www.linkedin.com/in/kendalenz/" target='blank'><ion-icon size='large' name="logo-linkedin"></ion-icon></a>
            </div>
            <div class='mx-4 my-4'>
            <a class='social-icon' href="https://github.com/kendalenz" target='blank'><ion-icon size='large' name="logo-github"></ion-icon></a>
            </div>
            </div>
        </section>
        </div>
    )
};

export default Home;