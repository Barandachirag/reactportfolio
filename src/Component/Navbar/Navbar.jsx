import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        {/* <li>Services</li> */}
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
  );
};

export default Navbar;
