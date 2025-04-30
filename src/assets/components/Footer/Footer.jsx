import React from "react";
import "./Footer.css";
import { FaArrowRightLong } from "react-icons/fa6";
import footerDatas from "./FooterDatas.js";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-section">
        <div className="footer-top-left-side">
          <h3 className="footer-top-text">What are you waiting for?</h3>
          <h1 className="footer-top-title">Get the only custom super card</h1>
        </div>
        <div className="footer-top-right-side">
          {" "}
          <button className="getYourCard-blue-btn">
            get your card
            <span className="arrow-icon">
              <FaArrowRightLong />
            </span>
          </button>
          <button className="footer-dark-btn">
            <span className="footer-dark-btn-text">Get in touch</span>
          </button>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-bottom-data">
        <div className="footer-bottom-left-side">
          <svg
            className="card-svg"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="nonzero" fill="none">
              <g className="cypkd" fill="#eff6ff" transform="translate(3 3)">
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
      <div className="author-container">
        <span>Made by<a href="https://github.com/ayoubakbartabar">Ayoub Akbartabar Kami</a></span>
      </div>
        <img
          src="public/svg/footer-illustration.svg"
          alt=""
          className="footer-bottom-image"
        />
      </div>
    </footer>
  );
}
