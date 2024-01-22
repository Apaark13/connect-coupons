import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import User from './components/user';
import Register from './components/Register';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

const App = () => {
  return (
    // <Router>
    //   <div>
        
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home/>} />
    //       <Route path="/user" element={<User/>} />
    //     </Routes>
      
    //   </div>
    //   <Footer/>
    // </Router>
    <div>
     
      <Register/>
    
    </div>
    
  );
};

export default App;