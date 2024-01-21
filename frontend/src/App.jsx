import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import User from './components/user';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;