import React from 'react';

const DownloadPDF = () => {
    const pdfUrl = '../static/prompts-unleashed.pdf'; 
    const pdfFileName = 'prompts-unleashed.pdf'; 
  
    return (

        <div className='container'>
          <h3 className='align-center'>Books</h3>
          <p className='mb-4'>
           If you find this content useful, please consider <a href='https://www.buymeacoffee.com/kendalenz' target='blank' className='text-dark text-decoration-underline'>buying me a beer</a>.
          </p>
          <div className='row'>
            <div className='col-sm'>
              <a href={pdfUrl} download={pdfFileName}>
                <img src='/static/PromptsUnleashed.png' alt='Prompts Unleashed' className='md-4' id='prompts-img'></img>
              </a>
            </div>
            <div className='col-sm float-left' id='prompts-text'>
              <p>
              "Prompts Unleashed: A Journey into Prompt Engineering for Junior Software Engineers" invites you to a transformative exploration that bridges the gap between language models and the dynamic realm of coding. Author Kendal Enz recounts a personal odyssey in the world of programming, from a coding bootcamp to the discovery of ChatGPT—an AI companion that ignited a passion for prompt engineering. With real-world examples, this concise e-book unveils the power of well-crafted prompts to tap into the capabilities of language models, enhancing problem-solving skills and fostering deep understanding. Embark on a journey that empowers you to excel in software development, and uncover your true coding potential.
              </p>
              <a href={pdfUrl} download={pdfFileName}>
                <button className='btn btn-primary my-4' id='prompts-button'>Download E-book</button>
              </a>
            </div>
          </div>
      </div>
    );
  };
  
  export default DownloadPDF;