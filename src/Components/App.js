import { Link, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import Home from './Home';

const App = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm'>
        <Link className='navbar-brand link-dark mx-4' to='/'>
            Kendal Enz
        </Link>
        <button 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbarNav' 
          className='navbar-toggler'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div id='navbarNav' className='collapse navbar-collapse mx-4 justify-content-end'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <HashLink className='link-dark mx-4' to='/#about-me'>
                About
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink className='link-dark mx-4' to='/#competencies'>
                Competencies
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink className='link-dark mx-4' to='/#books'>
                Books
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink className='link-dark mx-4' to='/#projects'>
                Projects
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink className='link-dark mx-4' to='/#contact-me'>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
   );
};

export default App;