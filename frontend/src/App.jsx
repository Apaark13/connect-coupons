import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import User from "./components/user";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';
import Footer from "./components/footer";
import { Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const navigateTo = useNavigate();
   useEffect(()=>{
    if(localStorage.getItem('token'))
    {
       setIsLoggedIn(true);
    }
    else
    {
      setIsLoggedIn(false);
    }
   },[])
  
   console.log(isLoggedIn)
  // Condition to determine whether to show the Navbar based on the pathname instead of window using uselocation route, and for this moved the browser router over the app component
  const showNavbar = !["/login", "/register"].includes(location.pathname);
  return (
    // <Router>
      <div>
        {isLoggedIn && showNavbar && <Navbar />}
        <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> :<Navigate to="/login" />}/>
          <Route path="/user/:userId" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/profile" element={<Register />} />
        </Routes>
        {isLoggedIn && showNavbar && <Footer />}
      </div>

    // </Router>
    
    );
};

export default App;
