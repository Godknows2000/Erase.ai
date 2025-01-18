import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <p>All rights reserved. Copyright &copy; {currentYear} @erase.ai</p>
        </div>
        <div className="right">
          <a
            href="https://github.com/Godknows2000"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/godknows-aresho-1231361b1"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/Godknowsftx"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/263715725572"
            target="_blank"
            aria-label="WhatsApp"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
