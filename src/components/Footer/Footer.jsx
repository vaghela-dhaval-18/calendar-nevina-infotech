import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">Copyright policy</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="footer-links">
            <li>
              <span> | </span>
            </li>
            <li>
              <p>&copy; Curioushit 2023 - All rights reserved.</p>
            </li>
            <li>
              <span> | </span>
            </li>
            <li>
              <a
                className="social-icon"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
