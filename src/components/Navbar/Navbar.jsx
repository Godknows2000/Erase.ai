import React, { useEffect, useState, useRef, useContext } from 'react';
import { FaUserPlus, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FaBarsStaggered } from 'react-icons/fa6';
import gsap from 'gsap';
import "./Navbar.css";
import { useClerk, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/appContext';
import { FaCoins } from 'react-icons/fa';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const container = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos > 145);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        container.current,
        { y: -250 },
        { y: 0, top: 0, zIndex: 100, duration: 0.5 }
      );
    }
  }, [visible]);

  const location = useLocation();

  const isActiveLink = (path) => {
    return path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  };

  const { openSignIn } = useClerk();
  const { signOut } = useClerk();
  const { isSignedIn, user } = useUser();
  const {credit, loadCreditsData} = useContext(AppContext);

  useEffect(() => {
    if(isSignedIn)
    {
      loadCreditsData();
    }

  }, [isSignedIn]);

  const getUserInitials = () => {
    if (user) {
      const firstName = user.firstName || '';
      const lastName = user.lastName || '';
      return (firstName[0] + (lastName[0] || '')).toUpperCase();
    }
    return '';
  };

  return (
    <nav
      className={`navbar__container ${visible ? 'visible' : ''}`}
      ref={container}
    >
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}

      <Link to='/'>
        <div className="logo flex justify-between mx-4 py-3 lg:mx-22">
          <h1 className={isSignedIn ? 'text-white' : 'text-white'}>Erase.ai</h1>
        </div>
      </Link>

      <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
        <span className="icon__container close__btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </span>

{/* Links for authenticated users */}
{isSignedIn ? (
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
                isActiveLink('/imageresult') ? 'active-link' : ''
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
        ) : (
          /* Links for unauthenticated users */
          <div className="navbar-links">
            <Link
              to="/remove-background"
              className={`tab__item navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
                isActiveLink('/removeBackground') ? 'active-link' : ''
              }`}
            >
              Remove Background
            </Link>
            <Link
              to="/how-it-works"
              className={`tab__item navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
                isActiveLink('/howItWorks') ? 'active-link' : ''
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/subscription"
              className={`tab__item navbar-link text-sm font-medium text-gray-700 hover:text-blue-700 transition duration-300 ${
                isActiveLink('/subscription') ? 'active-link' : ''
              }`}
            >
              Pricing
            </Link>
          </div>
        )}
      </div>

      <div className="nav__buttons__group">
        {isSignedIn ? (
          <div className="user-container flex items-center gap-2 sm:gap-7">
            <button className="credit-tagline flex items-center gap-2 px-4 sm:px-7 sm:py-2.5 shadow-md hover:scale-105 duration-700 transition-all">
              <FaCoins className="credit-icon w-6 h-6 text-yellow-500" />
              <p className="text-sm font-medium text-white">
                Credits: {credit}
              </p>
            </button>
            <div
              className="user-circle cursor-pointer w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
              onClick={toggleMenu}
            >
              <span>{getUserInitials()}</span>
            </div>

            {showMenu && (
              <div
                className="dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                onClick={() => setShowMenu(false)}
              >
                <ul className="divide-y divide-gray-100">
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
          <button
            className="signup-button flex items-center sm:px-8"
            onClick={openSignIn}
          >
            <FaUserPlus className="signup-icon" />
            Sign Up
          </button>
        )}

        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
