// Navbar.jsx
import jwt from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {

  const navigateTo = useNavigate();
  const [cur,setCur]=useState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedUser = jwt.decode(token);
        if (decodedUser) {
          setCur(decodedUser.email); 
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        
      }
    }
  }, [cur]); 
  const handleClick = () => {
    navigateTo(`/user/${cur}`);
  };
 
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
        <div>
          <div>Connect</div>
          <div>Coupons</div>
        </div>
      </div>
      <div className="nav-main">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-profile">
        {cur ? (
          <>
            <img onClick={handleClick} src="/assets/user.png" alt="" />
            {cur} {/* Assuming 'name' is a property of your user object */}
           
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
