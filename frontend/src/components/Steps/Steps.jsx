import React from "react";
import { FaUpload, FaMagic, FaDownload } from "react-icons/fa";
import './Steps.css';

const Steps = () => {
  return (
    <section id="step">
      <div className="card-section section__wrapper mx-4 lg:mx-10">
        <div className="section__header center">
          <h2 className="primary__title text-center text-2xl md:text-3xl lg:text-4xl mt-0 font-semibold">
          Quick guide to removing image backgrounds.
          </h2>
          <p className="text-center" style={{ color: '#b8b8b8' }}>
            Discover how our AI-powered tool can edit your pictures.
          </p>
        </div>
        <div className="flex items-start flex-wrap flex-col sm:flex-row gap-4 mt-10 justify-center w-full">
            <div className="card flex items-start gap-4 p-7 pb-10 me-5 rounded-lg border-2 border-white-600 drop-shadow-md hover:scale-105 transition-all duration-500 w-full sm:w-[90%] md:w-[70%] lg:w-1/3">
                <div className="icon-container max-w-9">
                <FaUpload size={30} color="#024CC8" />
                </div>
                <div>
                <h3 className="font-semibold text-xl">Upload Image</h3>
                <p className="text-small text-neutral-500 mt-1">
                    Start by uploading the image
                    you want to remove
                    the background from.
                </p>
                </div>
            </div>

            <div className="card flex items-start gap-4 p-7 bg-dark pb-10 me-5 rounded-lg border-2 border-blue-600 drop-shadow-md hover:scale-105 transition-all duration-500 w-full sm:w-[90%] md:w-[70%] lg:w-1/3">
                <div className="icon-container">
                <FaMagic size={30} color="#024CC8" />
                </div>
                <div>
                <h3 className="font-semibold text-xl">Removing Background</h3>
                <p className="text-small text-neutral-500 mt-1">
                    Our AI-powered tool automatically
                    removes the background.
                </p>
                </div>
            </div>

            <div className="card flex items-start gap-4 p-7 pb-10 rounded-lg border-2 border-blue-600 drop-shadow-md hover:scale-105 transition-all duration-500 w-full sm:w-[90%] md:w-[70%] lg:w-1/3">
                <div className="icon-container">
                <FaDownload size={30} color="#024CC8" />
                </div>
                <div>
                <h3 className="font-semibold text-xl font-medium">Download Image</h3>
                <p className="text-small text-neutral-500 mt-1">
                    Once the background is removed, you can
                    download your image with ease.
                </p>
                </div>
            </div>
            </div>

      </div>
    </section>
  );
};

export default Steps;
