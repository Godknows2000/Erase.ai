import React from 'react';
import './BgSlider.css';
import bg_slider from "../../assets/bg-removal-slider.png";

const BgSlider = () => {
    return (
        <div>
            <div className="section__header center mt-7">
                <h2 className="primary__title text-center text-2xl md:text-3xl lg:text-4xl mt-0 font-semibold">
                    Remove Your Images Background <br /> Without Losing Quality.
                </h2>
                <p className='text-center' style={{ color: '#b8b8b8' }}>
                    Explore the power of our AI-driven tool to enhance and transform your images effortlessly.
                </p>
            </div>

            <div className="background-remover-container">
                <div className="image-section">
                    <div className="image-wrapper">
                        <img
                            src={bg_slider}
                            alt="Background Removal Demo"
                            className="demo-image"
                        />
                    </div>
                </div>
                <div className="text-section">
                    <h1>The Ultimate Background Remover Tool</h1>
                    <p>
                        Say goodbye to complicated editing tools! With Erase.ai, removing the background from your photos or images is effortless. Our AI-powered tool provides precise results in seconds—completely free. Just upload your image, let our advanced background eraser work its magic, and download a high-quality PNG file with a transparent background. No installation, no learning curve—just simple, seamless editing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BgSlider;
