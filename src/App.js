import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import './App.css';
import './Home.css'
import Signup from './component/Signup';
import UserData from './component/UserData';

// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

const App = () => {
    return (
        <Router>

            <nav>
              <div className='logo'><h1>Realstate</h1></div>
              <div className='navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/userdata">User data</Link></li>
                </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/userdata' element={<UserData />} />
            </Routes>
        </Router>
    );
};

export default App;

