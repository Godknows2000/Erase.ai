import React from "react";
import "./HeroSection.css";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-header">
        <span className="hero-tagline">🚀 Let's Transform Your Images</span>
      </div>
      <div className="section__header center mt-7">
        <h2 className="primary__title text-center text-2xl md:text-3xl lg:text-4xl mt-0 font-semibold">
          Transform your Images into Stunning Results <br />
          with Erase.ai
        </h2>
        <p className="hero-description">
          Effortlessly remove image backgrounds while retaining high-quality
          results. With just a few clicks, <br />
          our AI-powered tool delivers precision edits tailored to your needs.
        </p>
      </div>
      <div
        className="upload-button-container"
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Adjust as needed
        }}
        >
        <button
            className="upload-button"
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            Get Started Now <FiArrowRight className="upload-icon" />
        </button>
        </div>
    </div>
  );
};

export default HeroSection;
