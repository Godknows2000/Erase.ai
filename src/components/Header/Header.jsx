import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './Header.css';
import header_img from "../../assets/header_img.png";
import { FiUpload } from "react-icons/fi";

const Header = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <header id="header" className="blur-effect" ref={container}>
<div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                Professional-Quality Background Removal Made Easy.
                <Cursor
                  cursorStyle="|"
                  cursorColor="#024CC8"
                  className="color__primary"
                />
              </h1>
              <p className="text__muted header__description">
                Transform Your Photos Instantly with AI-Powered Background Removal. Get Perfect Images with Just One Click!
              </p>
              <div className="upload-button-container">
                <button className="upload-button flex items-start sm:px-8">
                  Upload your image <FiUpload className="upload-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
                {/* Image Section */}
        <div className="profile__wrapper order-1 lg:order-none">
          <div className="profile__photo__container">
            <img src={header_img} className="profile__photo" alt="Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
