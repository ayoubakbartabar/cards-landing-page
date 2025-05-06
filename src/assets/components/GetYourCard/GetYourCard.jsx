import React, { useRef } from "react";
import "./GetYourCard.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";

export default function GetYourCard() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  // create array for install guide date
  const installGuide = [
    {
      id: 1,
      title: "Download the app",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 2,
      title: "Request your card",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 3,
      title: "Connect all your account",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
  ];

  return (
    <section className="getyourcart-container" ref={ref}>
      <div className="getyourcart-container-section">
        <div className="getyourcart-top fade-in-up">
          <h2 className="getyourcart-title">
            Get started in minutes and connect all your accounts in one place
          </h2>
          <p className="getyourcart-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="getyourcart-img-container fade-in-up">
        <svg  className="getyourcart-svg" width="742" height="742" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="0%" y1="0%" x2="101.743%" y2="100%" id="a">
            <stop stopColor="#3B82F6" stop-opacity=".64" offset="0%" />
            <stop stopColor="#3B82F6" stop-opacity="0" offset="100%" />
        </linearGradient>
        <filter x="-28.8%" y="-28.8%" width="157.7%" height="157.7%" filterUnits="objectBoundingBox"
            id="b">
            <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
        </filter>
    </defs>
    <path
        d="M177.192 1530.192c0 143.594 116.406 260 260 260s260-116.406 260-260c-.167-143.525-116.475-259.834-260-260-143.594 0-260 116.406-260 260Z"
        filter="url(#b)" transform="translate(-60 -1153)" fill="url(#a)" fillRule="nonzero" />
</svg>
          <img
            src="public/image/logos.png"
            alt="logos"
            className="getyourcart-img"
          />
        </div>
        <div className="getyourcart-install-guide-container ">
          {installGuide.map((item) => (
            <div
              key={item.id}
              className="getyourcart-install-guide-box fade-in-up"
            >
              <div className="getyourcart-install-guide-svg fade-in-up">
                {item.id}
              </div>
              <h4 className="getyourcart-install-guide-title fade-in-up ">
                {item.title}
              </h4>
              <p className="getyourcart-install-guide-paragraph fade-in-up">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
