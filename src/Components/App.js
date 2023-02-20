import { Link, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import Home from './Home';

const App = () => {
    return (
        <div>
            <nav class='navbar navbar-expand-sm'>
                    <Link 
                        class='navbar-brand link-dark mx-4' 
                        to='/'>
                        Kendal Enz
                    </Link>
                <button 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNav' 
                    class='navbar-toggler'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div 
                    class="collapse navbar-collapse mx-4 justify-content-end" 
                    id='navbarNav'>
                        <ul class='navbar-nav'>
                            <li class='nav-item'>
                                <HashLink class='link-dark mx-4' to='/#about-me'>
                                    About
                                </HashLink>
                            </li>
                            <li class='nav-item'>
                                <HashLink class='link-dark mx-4' to='/#competencies'>
                                    Competencies
                                </HashLink>
                            </li>
                            {/* <li class='nav-item'>
                                <HashLink class='link-dark mx-4' to='/#projects'>
                                    Projects
                                </HashLink>
                            </li> */}
                            <li class='nav-item'>
                                <HashLink class='link-dark mx-4' to='/#contact-me'>
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
    )
};

export default App;