import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useLocation  } from 'react-router-dom';
import "./Navbar.css";
import { useClerk, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const isActiveLink = (path) => {
    const location = useLocation();
    // Check for an exact match for '/'
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const { openSignIn } = useClerk();
  const { signOut } = useClerk();
  const { isSignedIn, user } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  // Get the user's initials
  const getUserInitials = () => {
    if (user) {
      const firstName = user.firstName || '';
      const lastName = user.lastName || '';
      const initials = (firstName[0] + (lastName[0] || '')).toUpperCase();
      return initials;
    }
    return '';
  };

  const toggleMenu = () => setShowMenu((prev) => !prev);
  
  return (
    <div className={`navbar-container ${isSignedIn ? 'signed-in' : ''}`} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Link to='/'>
      <div className="logo flex justify-between mx-4 py-3 lg:mx-22">
        <h1 className={isSignedIn ? 'text-black' : 'text-white'}>Erase.ai</h1>
      </div>
      </Link>

      {/* Authenticated user links */}
      {isSignedIn && (
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
              isActiveLink('/') ? 'active-link' : ''
            }`}
          >
            Home
          </Link>
        <Link
          to="/upload"
          className={`navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
            isActiveLink('/upload') ? 'active-link' : ''
          }`}
        >
          Uploaded Images
        </Link>
        <Link
          to="/resources"
          className={`navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
            isActiveLink('/resources') ? 'active-link' : ''
          }`}
        >
          Resources
        </Link>
        <Link
          to="/subscription"
          className={`navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
            isActiveLink('/subscription') ? 'active-link' : ''
          }`}
        >
          Subscription
        </Link>
      </div>
      )}

      {/* User Circle or Sign Up button */}
      {isSignedIn ? (
        <div className="user-container relative">
          {/* User circle */}
          <div
            className="user-circle cursor-pointer"
            onClick={toggleMenu} // Toggle the dropdown menu
          >
            <span>{getUserInitials()}</span>
          </div>

          {/* Dropdown menu */}
          {showMenu && (
            <div
              className="dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
              onClick={() => setShowMenu(false)} // Close menu on any click
            >
              <ul>
                <li className="dropdown-item px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li
                  className="dropdown-item px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={signOut}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="signup-button-container">
          <button onClick={() => openSignIn({})} className="signup-button flex items-center sm:px-8">
            <FaUserPlus className="signup-icon" />
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;