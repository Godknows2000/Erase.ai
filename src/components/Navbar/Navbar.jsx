import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to='/'>
        <div className="logo flex justify-between mx-4 py-3 lg:mx-22">
          <h1>Erase.ai</h1>
        </div>
      </Link>

      {/* Sign Up button with icon */}
      <div className="signup-button-container">
        <button className="signup-button flex items-center sm:px-8">
          <FaUserPlus className="signup-icon" />
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
