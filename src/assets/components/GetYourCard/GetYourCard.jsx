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
        <img src="" alt="logos-svg" />
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
    </section>
  );
}
