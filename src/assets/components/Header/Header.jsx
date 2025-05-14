import React from "react";
import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import GetYourCardBtn from "../GetYourCardBtn/GetYourCardBtn";

const HeaderSection = () => {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <section className="header-container">
      <div className="header-section">
        <div className="header-top fade-up delay-1">
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

          <GetYourCardBtn onClick={() => BuyCardBtnHandler()} />
        </div>

        <div className="header-bottom fade-up delay-2">
          <div className="header-left-side">
            <h1 className="header-left-side-title">
              {!animationDone ? (
                <TypeAnimation
                  sequence={[
                    "Create physical and virtual cards for your business",
                    () => setAnimationDone(true),
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={0}
                  style={{ display: "inline-block" }}
                />
              ) : (
                <>
                  Create physical and virtual cards for your{" "}
                  <span className="business-span">
                    {animationDone && (
                      <img
                        className="circle-bg fade-in"
                        src="/svg/background-circle.svg"
                        alt="circle-bg"
                      />
                    )}
                    <p className="business-text">business</p>
                  </span>
                </>
              )}
            </h1>

            <p className="header-left-side-paragraph">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>

            <div className="header-left-side-btns">
              <GetYourCardBtn onClick={() => BuyCardBtnHandler()} />

              <button className="read-doc-btn">Read documentation</button>
            </div>
          </div>

          <div className="header-image-wrapper">
            <img
              className="header-transparent-img"
              src="/svg/logos-illustration.svg"
              alt=""
            />
            <img
              className="header-img"
              src="/image/hero-image.png"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
