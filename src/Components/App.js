import { Link, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import Home from './Home';

const App = () => {
    return (
        <div>
            <nav class='navbar'>
                <div class="d-flex justify-content-start">
                    <Link class='link-dark mx-4' to='/'>
                        <h5>Kendal Enz</h5>
                    </Link>
                </div>
                <div class="d-flex justify-content-between">
                    <HashLink class='link-dark mx-4' to='/#about-me'>
                        <h6>About Me</h6>
                    </HashLink>
                    <HashLink class='link-dark mx-4' to='/#competencies'>
                        <h6>Competencies</h6>
                    </HashLink>
                    <HashLink class='link-dark mx-4' to='/#projects'>
                        <h6>Projects</h6>
                    </HashLink>
                    <HashLink class='link-dark mx-4' to='/#contact-me'>
                        <h6>Contact</h6>
                    </HashLink>
                    </div>
                </nav>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
};

export default App;