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
          <svg
            className="getyourcart-svg"
            width="594"
            height="639"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                x="-42.9%"
                y="-38%"
                width="185.7%"
                height="175.9%"
                filterUnits="objectBoundingBox"
                id="b"
              >
                <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
              </filter>
              <filter
                x="-28.1%"
                y="-28.1%"
                width="156.2%"
                height="156.2%"
                filterUnits="objectBoundingBox"
                id="c"
              >
                <feGaussianBlur stdDeviation="12" in="SourceGraphic" />
              </filter>
              <filter
                x="-70.6%"
                y="-70.6%"
                width="241.2%"
                height="241.2%"
                filterUnits="objectBoundingBox"
                id="d"
              >
                <feGaussianBlur stdDeviation="8" in="SourceGraphic" />
              </filter>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                <stop stop-color="#0EA5E9" offset="0%" />
                <stop stop-color="#BAE6FD" offset="100%" />
              </linearGradient>
            </defs>
            <g
              transform="translate(-422 -2927)"
              fill="url(#a)"
              fill-rule="nonzero"
            >
              <path
                d="M286.04 19.22c74.64 46.968 85.528 164.69 24.342 263.158-61.303 98.461-171.592 140.279-246.339 93.402-74.746-46.876-85.645-164.696-24.342-263.158C101.004 14.161 211.293-27.657 286.04 19.22Zm-47.046 76.512c-42.544-26.681-105.319-2.88-140.211 53.163C63.89 204.938 70.093 272 112.638 298.68c42.544 26.682 105.319 2.88 140.211-53.163 34.827-56.046 28.629-123.051-13.855-149.785Z"
                filter="url(#b)"
                transform="translate(544 3049)"
              />
              <path
                d="M152 270c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64Zm0-16c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48Z"
                filter="url(#c)"
                transform="translate(544 3049)"
              />
              <path
                d="M151 235c-9.389 0-17-7.611-17-17s7.611-17 17-17 17 7.611 17 17-7.611 17-17 17Zm0-4c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
                filter="url(#d)"
                transform="translate(544 3049)"
              />
            </g>
          </svg>
          <img
            src="/image/logos.png"
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
