import React from "react";

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
        <div class="container">
          <h3 class='mx-4 my-4 align-center'>About Me</h3>
          <div class="row">
            <div class="col-sm">
              <img src="/static/headshot.jpg" class='md-4' id='headshot'></img>
            </div>
            <div class="col-sm float-left" id='about-me-text'>
              <p>
                Kendal Enz is a fullstack software engineer with a professional background in project management, communications and writing. With an eye for design, she enjoys crafting beautiful experiences for website and application visitors. She holds an MA in Writing with a Concentration in Fiction from Johns Hopkins University, a BA in Communications with a Concentration in Journalism from Hood College and a Certificate of Software Engineering from Fullstack Academy. She is based in Brooklyn, NY. 
              </p>
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
          Node.js
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
            <img src="../static/EvoGym.png" class="card-img-top h-100 w-auto" alt="..."></img>
            <div class="card-body">
              <h4 class="card-title">EvoGym</h4>
              <p class="card-text">A fitness app.</p>
              <a href="https://fitness-app-ewf.pages.dev/" class="btn btn-primary btn-sm project-button mx-2">Visit site</a>
              <a href="https://github.com/kendalenz/fitness-app" class="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
           </div>
           <div class="card mx-4 my-4">
            <img src="../static/Goji.png" class="card-img-top h-100 w-auto" alt="..."></img>
            <div class="card-body">
              <h4 class="card-title">Goji</h4>
              <p class="card-text">A web app for dog walking.</p>
              <a href="https://goji-rnfn.onrender.com/" class="btn btn-primary btn-sm project-button mx-2">Visit site</a>
              <a href="https://github.com/imlifewilling/capstoneproject-dogwalker" class="btn btn-primary btn-sm project-button mx-2">View code</a>
            </div>
          </div>
          <div class="card mx-4 my-4 ">
            <img src="../static/wolfe-books-5.jpg" class="card-img-top h-100 w-auto" alt="..."></img>
            <div class="card-body">
              <h4 class="card-title">Wolfe Books</h4>
              <p>An e-commerce site.</p>
              <a href="https://github.com/kendalenz/wolfe-books-project" class="btn btn-primary btn-sm project-button mt-2">View code</a>
            </div>
          </div>
        </div>
      </section>

            <hr></hr>

            <section class='align-center' id='contact-me'>
                <h3>Contact Me</h3>
               
                <div class='d-flex flex-row justify-content-center'>

                    <form action="https://formsubmit.co/kendal.enz@gmail.com" method="POST">

                        <div class='form-group'>
                            <div class="row my-4">
                                <input type='hidden' name='_subject' value='New email!'></input>
                                <div class="col">
                                    <input type="text" name='name' class="form-control" placeholder="Name" required></input>
                                </div>
                                <div class="col">
                                    <input type="email" name='email' class="form-control" placeholder="Email" required></input>
                                </div>
                            </div>
                        </div>

                        <div class='form-group my-4'>
                            <input type="text" name='subject' class="form-control" placeholder="Subject" required></input>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" rows="3" type='textarea' name='message' placeholder='Message' required></textarea>
                        </div>

                        <button type='submit'class="btn btn-primary my-4">Send</button>

                    </form>
 
                   {/* <form action="https://formsubmit.co/kendal.enz@gmail.com" method="POST">
                        <input type='hidden' name='_subject' value='New submission!'></input>
                        <input type="text" name="fname" placeholder='First Name' required></input>
                        <input type="text" name="lname" placeholder='Last Name' required></input>
                        <input type="email" name="email" placeholder='Email Address' required></input>
                        <input type='textarea' name='message' placeholder='Message' required></input>
                        <button type="submit">Send</button>
                    </form>  */}

                </div>

                <div class='d-flex flex-row justify-content-center'>
                    <div class='mx-4 mb-4'>
                        <a class='social-icon' href="https://www.linkedin.com/in/kendalenz/" target='blank'><ion-icon size='large' name="logo-linkedin"></ion-icon></a>
                    </div>
                    <div class='mx-4 mb-4'>
                        <a class='social-icon' href="https://github.com/kendalenz" target='blank'><ion-icon size='large' name="logo-github"></ion-icon></a>
                    </div>
                </div>

            </section>
        </div>
    )
};

export default Home;