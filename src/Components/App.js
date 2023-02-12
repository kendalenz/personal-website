import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';

const App = () => {
    return (
        <div>
            <nav class='navbar'>
                <Link to='/'>
                    <h2>Kendal Enz</h2>
                </Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
};

export default App;