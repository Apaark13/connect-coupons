import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import User from "./components/user";
import Register from "./components/Register";
import Login from "./components/Login";
import { useAuth } from './authContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import jwt from 'jsonwebtoken';

const App = () => {
  const {login } = useAuth();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedUser = jwt.decode(token);
        console.log(decodedUser);
        
        if (decodedUser) {
          login(decodedUser.email); 
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        // Handle decoding errors if necessary
      }
    }
  }, []);
  // Condition to determine whether to show the Navbar based on the pathname instead of window using uselocation route, and for this moved the browser router over the app component
  const showNavbar = !["/login", "/register"].includes(location.pathname);
  return (
    // <Router>
      <div>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {showNavbar && <Footer />}
      </div>

    // </Router>
    
    );
};

export default App;
