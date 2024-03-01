// Navbar.jsx
import jwt from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [users,setUsers]=useState();
  const navigateTo = useNavigate();
  const [cur,setCur]=useState();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);


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
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  const handleSearch=async()=>{
   
    try {
      const response = await fetch("http://localhost:5000/users/allusers");
    
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setUsers(data);
      console.log(users);
      const filteredResults = await users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
     
      setResults(filteredResults);
      console.log(results);
    
      
    } catch (error) {
      setError('Error fetching data');
   }


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
      <input
      placeholder='Search the user'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      /> 
      {
  results && results.map((user) => (
    query && (
      <li key={user.id}>
        <strong>{user.name}</strong> - {user.email}
      </li>
    )
  ))
}

   
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
