import React from "react";
import './Footer.css'
import { FaArrowRightLong } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-section">
        <div className="footer-top-left-side"><h3 className="footer-top-text">What are you waiting for?</h3>
        <h1 className="footer-top-title"></h1></div>
         <button className="getYourCard-blue-btn">
                  get your card
                  <span className="arrow-icon">
                    <FaArrowRightLong />
                  </span>
                </button>
      </div>
      <div className="footer-bottom-section">
        Get the only custom super card
      </div>
    </footer>
  );
}
