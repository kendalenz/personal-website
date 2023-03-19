import React from "react";

const Contact = () => {
  return (
    <div>
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
        </div>
        <div class='d-flex flex-row justify-content-center'>
          <div class='mx-4 mb-4'>
            <a class='social-icon' href="https://www.linkedin.com/in/kendalenz/" target='blank'><ion-icon size='large' name="logo-linkedin"></ion-icon></a>
          </div>
          <div class='mx-4 mb-4'>
            <a class='social-icon' href="https://github.com/kendalenz" target='blank'><ion-icon size='large' name="logo-github"></ion-icon></a>
          </div>
        </div>
    </div>
  );
};

export default Contact;