import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="p-4 App-Header">
          <div className="container mx-auto flex justify-between items-center w-full">
            <nav className="space-x-4 container mx-auto flex justify-between items-center w-full mx-4">
              <div className="sm:hidden md:block w-12"></div>
              <Link to="/" className="text-amber-400">
                Home
              </Link>
              <Link to="/about" className="text-indigo-600">
                About
              </Link>
              <Link to="/" className="text-white font-bold text-xl">
                <img src="https://static.showit.co/400/1Fa_cN0QTmueWgFYm0-U1w/shared/png_white.png" alt="Logo" />
              </Link>
              <Link to="/services" className="text-amber-400">
                Services
              </Link>
              <Link to="/contact" className="text-indigo-600">
                Contact
              </Link>
            <Link to="/login" className="text-white font-bold text-xl rounded bg-lime-600">
              Login
            </Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
