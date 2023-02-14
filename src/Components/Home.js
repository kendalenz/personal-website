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
        <section>
            <div class='mx-4 my-4'>
                <h1>About Me</h1>
                <p>
                    Hello! I'm a fullstack software engineer with an eye for design, and I love crafting beautiful websites. My background in journalsim and creative writing has given me excellent communications skills, and my work as a project manager has allowed me to develope exceptional organizational and time management skills. I'm based in Brooklyn, NY. 
                </p>
            </div>
        </section>
        <section>
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
        </div>
    )
};

export default Home;