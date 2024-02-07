// Navbar.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
// import jwt from 'jsonwebtoken';
import './navbar.scss';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigateTo = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     try {
  //       const decodedUser = jwt.decode(token);
  //       console.log(decodedUser);
  //       // Assuming 'name' is a property of your user object
  //       if (decodedUser) {
  //         login(decodedUser.email); // Assuming you want to update the user state
  //       }
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //       // Handle decoding errors if necessary
  //     }
  //   }
  // }, [login]); // Add login to the dependencies if it's part of the user state update

  const handleClick = () => {
    navigateTo('/user');
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
        {user ? (
          <>
            <img onClick={handleClick} src="./assets/user.png" alt="" />
            {user} {/* Assuming 'name' is a property of your user object */}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
