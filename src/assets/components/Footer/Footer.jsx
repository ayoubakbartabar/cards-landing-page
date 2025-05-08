import React, { useRef, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Footer.css";
import { FaArrowRightLong } from "react-icons/fa6";
import footerDatas from "./FooterDatas.js";
import GetYourCardBtn from "../GetYourCardBtn/GetYourCardBtn.jsx";

export default function Footer() {
  const footerRef = useRef();
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to detect when the footer comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTyping(true); // Trigger typing animation when visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the footer is visible
    );

    // Attach observer to the footer element
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer-container">
      <div className="footer-section">
        {/* Top section of footer with call-to-action */}
        <div className="footer-top-section">
          <div className="footer-top-left-side">
            <h3 className="footer-top-text">
              {showTyping ? (
                <TypeAnimation
                  sequence={["What are you waiting for?", 1000]} // Text + pause
                  speed={50}
                  repeat={0}
                />
              ) : (
                ""
              )}
            </h3>
            <h1 className="footer-top-title">
              {showTyping ? (
                <TypeAnimation
                  sequence={["Get the only custom super card", 1000]} // Main title
                  speed={200}
                  repeat={0}
                />
              ) : (
                ""
              )}
            </h1>
          </div>

          {/* Right side with action buttons */}
          <div className="footer-top-right-side">
            <GetYourCardBtn
              onClick={() => BuyCardBtnHandler()}
              className="getYourCard-blue-btn "
            />
            <button className="footer-dark-btn">
              <span className="footer-dark-btn-text">Get in touch</span>
            </button>
          </div>
        </div>

        {/* Bottom section with lists and author credit */}
        <div className="footer-bottom-section">
          <div className="footer-bottom-data">
            {/* Left-side SVG logo */}
            <div className="footer-bottom-left-side">
              <svg
                className="card-svg"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fillRule="nonzero" fill="none">
                  <g
                    className="cypkd"
                    fill="#eff6ff"
                    transform="translate(3 3)"
                  >
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="19" cy="5" r="5" />
                    <circle cx="5" cy="19" r="5" />
                    <circle cx="19" cy="19" r="5" />
                  </g>
                  <g className="coow8" fill="#7dd3fc">
                    <circle cx="15" cy="5" r="5" />
                    <circle cx="25" cy="15" r="5" />
                    <circle cx="15" cy="25" r="5" />
                    <circle cx="5" cy="15" r="5" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Right-side dynamic lists from footerDatas */}
            <div className="footer-bottom-right-side">
              {footerDatas.map((item) => (
                <ul key={item.id} className="footer-bottom-list">
                  <h3 className="footer-bottom-list-title">{item.title}</h3>
                  {item.items.map((feature, index) => (
                    <li
                      key={index + 1}
                      className="footer-bottom-list-item"
                      data-text={feature}
                    >
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Author credit section */}
          <div className="author-container">
            <span className="author-link-container">
              Made by
              <a
                className="author-link"
                href="https://github.com/ayoubakbartabar"
              >
                Ayoub Akbartabar Kami
              </a>
            </span>
          </div>

          {/* Background illustration image */}
          <img
            src="public/svg/footer-illustration.svg"
            alt=""
            className="footer-bottom-image"
          />
        </div>
      </div>
    </footer>
  );
}
