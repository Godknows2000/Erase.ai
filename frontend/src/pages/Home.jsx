import React, { useContext, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Steps from '../components/Steps/Steps';
import BgSlider from '../components/BgSlider/BgSlider';
import Testimonials from '../components/Testimonials/Testimonials';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';
import bg_slider from "../assets/bg-removal-slider.png";
import { IconLucideImagePlus } from '../components/IconLucideImagePlus';
import { AppContext } from '../context/appContext';

const Home = () => {
  const { removeBackground } = useContext(AppContext);
  const { isSignedIn } = useUser();  // Check if the user is signed in
  const navigate = useNavigate();  // Hook to handle navigation

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

  const bgRemoverContent = (
    <div className="card-container-1">
      <p className='text-start text-blue-700 mt-6 text-2xl font-extrabold mb-8 bg-clip-text'>Remove Your Image Background</p>
      <div className="bg-remover-content-1">
        <div className="image-preview">
          <img
            src={bg_slider}  // Assuming bg_slider is your image source
            alt="Example of background removed"
          />
        </div>
        <div className="hero-container-1">
          <div className="upload-box-1">
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
              <input
                onChange={e => removeBackground(e.target.files[0])}
                type="file"
                id="upload"
                accept='image/*'
                hidden
              />
              <label className="upload-button" htmlFor="upload">
                <IconLucideImagePlus style={{ fontSize: '17px' }} /> Upload Image
              </label>
            </div>
            <p className="supported-formats">
              Supported formats: <b>JPG, JPEG, PNG, WebP</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      {!isSignedIn ? (
        <>
          <Header />
          <Steps />
          <BgSlider />
          <Testimonials />
        </>
      ) : (
        <>{bgRemoverContent}</>
      )}

      <HeroSection />
    </div>
  );
};

export default Home;
