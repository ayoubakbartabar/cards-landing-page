import React, { useState, useRef } from "react";
import "./BusinessCard.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";

export default function BusinessCard() {
  const ref = useRef(null);
  useIntersectionObserver(ref);

  // Testimonials array (each card content)
  const businessCardsArray = [
    {
      id: 1,
      image: "public/image/testimonial-01.jpg",
      svg: "public/svg/testimonial-sign-01.svg",
      detail: "“ This card is awesome. ...”", // shortened for clarity
      name: "Elisa Koeppel",
      jobtitles: "CEO & Co-Founder",
    },
    {
      id: 2,
      image: "public/image/testimonial-02.jpg",
      svg: "public/svg/testimonial-sign-02.svg",
      detail: "“ This card allows us to achieve compliance...”",
      name: "Maria Gress",
      jobtitles: "CEO & Co-Founder",
    },
  ];

  // List of business features
  const businessFeature = [
    "Identity verifications",
    "Secure credit card data tokenization",
    "Online and mobile payments",
    "IGlobal regulations and compliance",
  ];

  // Current active card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref to track swipe start position
  const startX = useRef(0);

  // Touch event handlers for swipe on mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 50) goNext(); // Swipe left
    if (diff < -50) goPrev(); // Swipe right
  };

  // Mouse event handlers for swipe on desktop
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const diff = startX.current - endX;
    if (diff > 50) goNext(); // Drag left
    if (diff < -50) goPrev(); // Drag right
  };

  // Go to next card
  const goNext = () => {
    setCurrentIndex((prev) =>
      prev < businessCardsArray.length - 1 ? prev + 1 : 0
    );
  };

  // Go to previous card
  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : businessCardsArray.length - 1
    );
  };

  return (
    <section
      className="business-card-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={ref}
    >
      {/* Right side: testimonial card display */}
      <div className="business-card-right-side fade-in-up">
        <div className="business-card-box-container">
          {/* Show only one active card */}
          {businessCardsArray
            .slice(currentIndex, currentIndex + 1)
            .map((item) => (
              <div key={item.id} className="business-card-box">
                <div className="business-card-box-top">
                  <img
                    className="business-card-box-img"
                    src={item.image}
                    alt="Box"
                  />
                </div>
                <div className="business-card-box-bottom">
                  <div className="business-card-box-svg-container">
                    <img
                      className="business-card-box-svg"
                      src={item.svg}
                      alt="SVG"
                    />
                  </div>
                  <p className="business-card-box-paragraph">{item.detail}</p>
                  <span className="business-card-box-info-container">
                    <span className="business-card-box-name">{item.name}</span>{" "}
                    -
                    <span className="business-card-box-job-titles">
                      {item.jobtitles}
                    </span>
                  </span>
                </div>
              </div>
            ))}

          {/* Pagination dots */}
          <div className="pagination-btn-container">
            {businessCardsArray.map((_, i) => (
              <span
                key={i}
                className={`pagination-btn ${
                  i === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Left side: static business info */}
      <div className="business-card-left-side fade-in-up">
        <h2 className="business-card-left-side-title">
          Compliance built card for businesses and professionals
        </h2>
        <p className="business-card-left-side-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        {/* Business features list */}
        <ul className="business-card-list fade-in-up">
          {businessFeature.map((item, i) => (
            <li key={i} className="business-card-item-container">
              <img
                className="blue-check"
                src="public/svg/blue-Check.svg"
                alt="check"
              />
              <span className="business-card-item">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
