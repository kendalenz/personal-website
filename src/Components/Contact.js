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
              <a href='https://www.linkedin.com/in/kendalenz/' target='blank' aria-label='LinkedIn'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                  <g 
                    fill="none" 
                    fillRule="nonzero" 
                    stroke="none" 
                    strokeWidth="1" 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter" 
                    strokeMiterlimit="10" 
                    strokeDasharray="" 
                    strokeDashoffset="0" 
                    fontFamily="none" 
                    fontWeight="none" 
                    fontSize="none" 
                    textAnchor="none" 
                  >
                  <g transform="scale(5.33333,5.33333)">
                    <path 
                      d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" 
                      fill="#303030">
                    </path>
                    <path 
                      d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z" 
                      fill="#ffffff">
                    </path>
                  </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className='col mb-4'>
              <a href='https://github.com/kendalenz' target='blank' aria-label='GitHub'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                  <g 
                    fill="#303030" 
                    fillRule="nonzero" 
                    stroke="none" 
                    strokeWidth="1" 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter" 
                    strokeMiterlimit="10" 
                    strokeDasharray="" 
                    strokeDashoffset="0" 
                    fontFamily="none" 
                    fontWeight="none" 
                    fontSize="none" 
                    textAnchor="none" 
                  >
                  <g transform="scale(3.55556,3.55556)">
                    <path d="M36,12c13.255,0 24,10.745 24,24c0,10.656 -6.948,19.685 -16.559,22.818c0.003,-0.009 0.007,-0.022 0.007,-0.022c0,0 -1.62,-0.759 -1.586,-2.114c0.038,-1.491 0,-4.971 0,-6.248c0,-2.193 -1.388,-3.747 -1.388,-3.747c0,0 10.884,0.122 10.884,-11.491c0,-4.481 -2.342,-6.812 -2.342,-6.812c0,0 1.23,-4.784 -0.426,-6.812c-1.856,-0.2 -5.18,1.774 -6.6,2.697c0,0 -2.25,-0.922 -5.991,-0.922c-3.742,0 -5.991,0.922 -5.991,0.922c-1.419,-0.922 -4.744,-2.897 -6.6,-2.697c-1.656,2.029 -0.426,6.812 -0.426,6.812c0,0 -2.342,2.332 -2.342,6.812c0,11.613 10.884,11.491 10.884,11.491c0,0 -1.097,1.239 -1.336,3.061c-0.76,0.258 -1.877,0.576 -2.78,0.576c-2.362,0 -4.159,-2.296 -4.817,-3.358c-0.649,-1.048 -1.98,-1.927 -3.221,-1.927c-0.817,0 -1.216,0.409 -1.216,0.876c0,0.467 1.146,0.793 1.902,1.659c1.594,1.826 1.565,5.933 7.245,5.933c0.617,0 1.876,-0.152 2.823,-0.279c-0.006,1.293 -0.007,2.657 0.013,3.454c0.034,1.355 -1.586,2.114 -1.586,2.114c0,0 0.004,0.013 0.007,0.022c-9.61,-3.133 -16.558,-12.162 -16.558,-22.818c0,-13.255 10.745,-24 24,-24z">
                    </path>
                  </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className='col mb-4'>
              <a href='https://www.buymeacoffee.com/kendalenz' target='blank' aria-label='Buy Me a Coffee'>
                <svg 
                  fill="#303030" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  width="50" 
                  height="50" 
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="1">
                    </g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                    <g id="Beer_Mug_Full" data-name="Beer Mug Full"> 
                    <g> 
                      <path d="M18.356,9.63h-.97V7.99a2.938,2.938,0,0,0,.5-1.65,1.77,1.77,0,0,0-.01-.23,2.905,2.905,0,0,0-1.64-2.38,2.956,2.956,0,0,0-2.4-.07,3.278,3.278,0,0,0-5.62,0,2.9,2.9,0,0,0-1.68-.17,2.866,2.866,0,0,0-2.16,1.75,2.948,2.948,0,0,0,.3,2.77V19.43a2.5,2.5,0,0,0,2.5,2.5h7.71a2.5,2.5,0,0,0,2.5-2.5v-.99l.91-.36a2.433,2.433,0,0,0,1.54-2.27V11.1A1.481,1.481,0,0,0,18.356,9.63Zm-1.97,9.8a1.5,1.5,0,0,1-1.5,1.5H7.176a1.5,1.5,0,0,1-1.5-1.5V11.34a2.858,2.858,0,0,0,1.93.74c.13,0,.25-.01.37-.02V18.4a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.82a.17.17,0,0,0-.01-.07,2.939,2.939,0,0,0,1.57-2.46h4.42a2.86,2.86,0,0,0,1.43-.38Zm-.01-11.77a1.949,1.949,0,0,1-1.42.63h-4.61a.8.8,0,0,0-.79.61,1.231,1.231,0,0,0-.02.2,1.975,1.975,0,0,1-1.05,1.78,1.934,1.934,0,0,1-2.8-1.72,1.808,1.808,0,0,1,.17-.77.6.6,0,0,0-.13-.68,1.939,1.939,0,0,1-.41-2.11,1.868,1.868,0,0,1,1.4-1.13,2.531,2.531,0,0,1,.38-.03,1.909,1.909,0,0,1,.86.2.766.766,0,0,0,.59.06A.8.8,0,0,0,9,4.32a2.273,2.273,0,0,1,4.06,0,.751.751,0,0,0,.44.38.8.8,0,0,0,.59-.05,1.917,1.917,0,0,1,2.79,1.54A1.886,1.886,0,0,1,16.376,7.66Zm2.46,8.15a1.428,1.428,0,0,1-.92,1.34l-.52.22V10.63h.96a.478.478,0,0,1,.48.47Z">
                      </path>
                      <path d="M13.577,18.9a.5.5,0,0,1-.5-.5V11.82a.5.5,0,0,1,1,0V18.4A.5.5,0,0,1,13.577,18.9Z">
                      </path> 
                    </g> 
                    </g> 
                    </g>
                </svg>             
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;