import React from "react";

const About = () => {
  return (
    <div class="container">
      <h3 class='mx-4 my-4 align-center'>About Me</h3>
        <div class="row">
          <div class="col-sm">
            <img src="/static/headshot.jpg" class='md-4' id='headshot'></img>
          </div>
          <div class="col-sm float-left" id='about-me-text'>
            <p>
              Kendal Enz is a fullstack software engineer with a professional background in project management, communications and writing. With an eye for design, she enjoys crafting beautiful experiences for website and application visitors. She holds an MA in Writing with a Concentration in Fiction from Johns Hopkins University, a BA in Communications with a Concentration in Journalism from Hood College and a Certificate of Software Engineering from Fullstack Academy. She is based in Brooklyn, NY, and spends her free time going on long runs through the city. 
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;