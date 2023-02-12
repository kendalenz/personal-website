import { Link, Routes, Route } from 'react-router-dom';
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
                    <Link class='link-dark mx-4'>
                        <h6>About Me</h6>
                    </Link>
                    <Link class='link-dark mx-4'>
                        <h6>Competencies</h6>
                    </Link>
                    <Link class='link-dark mx-4'>
                        <h6>Projects</h6>
                    </Link>
                    <Link class='link-dark mx-4'>
                        <h6>Contact</h6>
                    </Link>
                    </div>
                </nav>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
};

export default App;