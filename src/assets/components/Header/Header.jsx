import React from "react";
import "./Header.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="header-container">
      <div className="header-top">
        <img
          className="card-svg"
          src="public/svg/card-2-svgrepo-com.svg"
          alt=""
        />
        <button className="getYourCard-btn">
          get your card
          <FaArrowRightLong />
        </button>
      </div>
      <div className="header-bottom">
        <div className="header-left-side">
          <h1 className="header-left-side-title">
            Create physical and virtual cards for your business
          </h1>
          <p className="header-left-side-paragraph">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <button className="getYourCard-btn">
            get your card
            <FaArrowRightLong />
          </button>
          <button className="read-doc-btn">Read documentation</button>
        </div>
      </div>
    </section>
  );
}
