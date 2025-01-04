import React from 'react';
import bg_slider from "../assets/bg-removal-slider.png";
import "./ImageResult.css";
import { IconLucideImagePlus } from '../components/IconLucideImagePlus';
import { assets } from "../assets/assets"
import { FiDownload } from 'react-icons/fi';

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
      <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
        <div
          className="rounded-lg px-8 py-6 drop-shadow-sm"
          style={{ backgroundColor: "#232e45" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-start font-semibold text-white-600 mb-2">Original</p>
              <img
                className="rounded-md border"
                src={assets.image_w_bg}
                alt="Original"
              />
            </div>

            <div>
              <p className="text-start font-semibold text-white-600 mb-2">Background Removed</p>
              <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
                <img className="rounded-md border-solid" src={assets.image_wo_bg} alt="Background Removed" />
                {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div
                    style={{
                      border: "4px solid #0000ff", // Violet border color
                      borderTop: "4px solid transparent", // Transparent top border to create the spinning effect
                      borderRadius: "9999px", // Full circle (rounded)
                      height: "3rem", // 12 * 0.25rem = 3rem
                      width: "3rem", // 12 * 0.25rem = 3rem
                      animation: "spin 1s linear infinite", // Spinning animation
                    }}
                  ></div>
                </div> */}
                </div>
              </div>
            </div>
          <div className='flex justify-center sm:justify-end items-centerflex-wrap gap-4 mt-12'>
          <button 
            className="px-8 py-2.5 text-blue-600 text-sm rounded-full hover:scale-105 transition-all duration-700"
            style={{
              border: "2px solid #3B82F6", // Border color (blue)
            }}
          >
            Try another Image
          </button>

            <a className="upload-button hover:scale-105 transition-all duration-700" href=""><FiDownload className="upload-icon" /> Download Image</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageResult;
