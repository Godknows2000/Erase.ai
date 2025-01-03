import React from 'react';
import bg_slider from "../assets/bg-removal-slider.png";
import "./ImageResult.css";
import { IconLucideImagePlus } from '../components/IconLucideImagePlus';

const ImageResult = () => {
  const styles = {
    buttonContainer: {
      textAlign: "center",
    },
    uploadButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#6bd66b",
      color: "#ffffff",
      border: "none",
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    uploadButtonHover: {
      backgroundColor: "#5cc85c",
    },
    icon: {
      marginRight: "8px",
      fontSize: "20px",
    },
  };

  return (
    <div className="bg-remover">
      <header className="bg-remover-header">
        <h1 className="primary__title title">Free Background Remover</h1>
        <p className="subtitle" style={{ color: '#b8b8b8' }}>
          Remove backgrounds from any image in just one click with Erase.ai's background remover. Make transparent backgrounds instantly for free!
        </p>
      </header>

      <div className="bg-remover-content">
        <div className="image-preview">
          <img
            src={bg_slider}
            alt="Example of background removed"
          />
        </div>
        <div className="hero-container">
          <div className="upload-box">
            <div className="upload-instructions">
              <p>Drag and drop your image here</p>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: "10px"
            }}>
              <button className="upload-button">
                <IconLucideImagePlus style={styles.icon} /> Upload Image
              </button>
            </div>
            <p className="supported-formats">
              Supported formats: <b>JPG, JPEG, PNG, WebP</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageResult;
