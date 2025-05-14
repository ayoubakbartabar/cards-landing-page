import React, { useRef } from "react";
import "./BuildCards.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";
import GetYourCardBtn from "../GetYourCardBtn/GetYourCardBtn.jsx";
export default function BuildCards() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <section className="build-cards-container" ref={ref}>
      <div className="build-card-section">
        <div className="build-cards-left-side fade-in-up">
          <h2 className="build-cards-title">
            Build a flexible card program for your business needs
          </h2>
          <p className="build-cards-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation.
          </p>
          <GetYourCardBtn
            onClick={() => BuyCardBtnHandler()}
            className="getYourCard-blue-btn fade-in-up"
          />
          <div className="build-cards-left-side-description-container">
            <img
              className="build-cards-left-side-img"
              src="/image/quote-author-01.jpg"
              alt="quote-author"
            />
            <p className="build-cards-left-side-description">
              “ We know the card market very well and this product provides the
              speed, flexible account model and API-first approach that no one
              else can. ”
            </p>
          </div>
        </div>
        <div className="build-cards-right-side fade-in-up">
          <svg
            className="build-cards-svg"
            width="742"
            height="742"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="0%" x2="101.743%" y2="100%" id="a">
                <stop stopColor="#3B82F6" stop-opacity=".64" offset="0%" />
                <stop stopColor="#3B82F6" stop-opacity="0" offset="100%" />
              </linearGradient>
              <filter
                x="-28.8%"
                y="-28.8%"
                width="157.7%"
                height="157.7%"
                filterUnits="objectBoundingBox"
                id="b"
              >
                <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
              </filter>
            </defs>
            <path
              d="M177.192 1530.192c0 143.594 116.406 260 260 260s260-116.406 260-260c-.167-143.525-116.475-259.834-260-260-143.594 0-260 116.406-260 260Z"
              filter="url(#b)"
              transform="translate(-60 -1153)"
              fill="url(#a)"
              fillRule="nonzero"
            />
          </svg>
          <img
            className="build-cards-img"
            src="/image/features-02.png"
            alt="features-image"
          />
        </div>
      </div>
    </section>
  );
}
