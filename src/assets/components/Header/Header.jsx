import React from "react";
import "./Header.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="header-container">
      <div className="header-top   fade-up delay-1">
        <img
          className="card-svg"
          src="public/svg/card-2-svgrepo-com.svg"
          alt=""
        />
        <button className="getYourCard-btn">
          get your card
          <span className="arrow-icon">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="header-bottom   fade-up  delay-2">
        <div className="header-left-side">
          <h1 className="header-left-side-title">
            Create physical and virtual cards for your{" "}
            <span className="business-span">
              <img
                className="circle-bg"
                src="public/svg/background-circle.svg"
                alt=""
              />
              <p className="business-text">business</p>
            </span>
          </h1>
          <p className="header-left-side-paragraph">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="header-left-side-btns">
            <button className="getYourCard-btn">
              get your card
              <span className="arrow-icon">
                <FaArrowRightLong />
              </span>
            </button>
            <button className="read-doc-btn">Read documentation</button>
          </div>
        </div>
        <div className="header-image-wrapper">
          <img
            className="header-transparent-img"
            src="public/svg/logos-illustration.svg"
            alt=""
          />
          <img
            className="header-img"
            src="public/image/hero-image.png"
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
