import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import User from './components/user';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

const App = () => {
  const showNavbar = !window.location.pathname.includes('/login') && !window.location.pathname.includes('/register');

  return (
    <Router>
      <div>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {showNavbar && <Footer />}
    </Router>
  );
};

export default App;