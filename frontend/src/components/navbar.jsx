// Navbar.jsx
import React from 'react';
import { useAuth } from '../authContext'; // Import the AuthContext
import "./navbar.scss";

const Navbar = () => {
  const { user, logout } = useAuth(); // Use the useAuth hook to access the context

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
        <div>
          <div>Connect</div>
          <div>Coupons</div>
        </div>
      </div>
      <div className="nav-main"><input type="text" placeholder="Search" /></div>
      <div className="nav-profile">
        {user ? (
          <>
            <img src="./assets/user.png" alt="" />
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
