import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <nav>
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