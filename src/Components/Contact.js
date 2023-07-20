import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Contact Me</h3>
        <div className='d-flex flex-row justify-content-center'>
          <form action='https://formsubmit.co/c9131e5bb6c78e0f59d5fbbb88445f73' method="POST">
            <div className='form-group'>
              <div className='row my-4'>
                <input type='hidden' name='_subject' value='New email!'></input>
                <div className='col'>
                  <input type='text' name='name' className='form-control' placeholder='Name' required></input>
                </div>
                <div className='col'>
                  <input type='email' name='email' className='form-control' placeholder='Email' required></input>
                </div>
              </div>
            </div>
            <div className='form-group my-4'>
              <input type='text' name='subject' className='form-control' placeholder='Subject' required></input>
            </div>
            <div className='form-group'>
              <textarea className='form-control' rows='3' type='textarea' name='message' placeholder='Message' required></textarea>
            </div>
            <button type='submit'className='btn btn-primary my-4'>Send</button>
          </form>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col mb-4'>
              <a className='link-dark' href='https://www.linkedin.com/in/kendalenz/'>Follow Me on LinkedIn</a>
            </div>
            <div className='col mb-4'>
             <a className='link-dark' href='https://github.com/kendalenz'>Follow Me on GitHub</a>
            </div>
            <div className='col mb-4'>
              <a className='link-dark' href="https://www.buymeacoffee.com/kendalenz">Buy Me a Beer</a>
            </div>
            <div className='w-100'></div>
            <div className='col mb-4'>
              <a className='social-icon' href='https://www.linkedin.com/in/kendalenz/' target='blank'><ion-icon size='large' name='logo-linkedin'></ion-icon></a>
            </div>
            <div className='col mb-4'>
              <a className='social-icon' href='https://github.com/kendalenz' target='blank'><ion-icon size='large' name='logo-github'></ion-icon></a>
            </div>
            <div className='col mb-4'>
              <a className='social-icon' href='https://www.buymeacoffee.com/kendalenz' target='blank'><ion-icon size='large' name='beer'></ion-icon></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;