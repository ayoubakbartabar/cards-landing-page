import React, { useState, useRef } from "react";
import "./BusinessCard.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";

export default function BusinessCard() {
  const ref = useRef(null);
  useIntersectionObserver(ref);

  // Index of the currently displayed business card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Control animation state for fade effect
  const [animate, setAnimate] = useState(false);

  // Triggers fade animation by toggling a class
  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  // Track swipe start position (touch/mouse)
  const startX = useRef(0);

  // Business testimonials data
  const businessCardsArray = [
    {
      id: 1,
      image: "public/image/testimonial-01.jpg",
      svg: "public/svg/testimonial-sign-01.svg",
      detail:
        "“ This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier. ”",
      name: "Elisa Koeppel",
      jobtitles: "CEO & Co-Founder",
    },
    {
      id: 2,
      image: "public/image/testimonial-02.jpg",
      svg: "public/svg/testimonial-sign-02.svg",
      detail:
        "“ This card allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer support, and keep the user experience on our platform. “",
      name: "Maria Gress",
      jobtitles: "CEO & Co-Founder",
    },
  ];

  // List of static features displayed on the right
  const businessFeature = [
    "Identity verifications",
    "Secure credit card data tokenization",
    "Online and mobile payments",
    "IGlobal regulations and compliance",
  ];

  // Touch start (for swipe detection on mobile)
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Touch end (detect left/right swipe)
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 50) goNext(); // Swipe left
    if (diff < -50) goPrev(); // Swipe right
  };

  // Mouse down (for swipe simulation on desktop)
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  // Mouse up (detect drag left/right)
  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const diff = startX.current - endX;
    if (diff > 50) goNext(); // Drag left
    if (diff < -50) goPrev(); // Drag right
  };

  // Move to the next card
  const goNext = () => {
    triggerAnimation();
    setCurrentIndex((prev) =>
      prev < businessCardsArray.length - 1 ? prev + 1 : 0
    );
  };

  // Move to the previous card
  const goPrev = () => {
    triggerAnimation();
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
      {/* Left: testimonial card display */}
      <div className="business-card-left-side fade-in-up">
        <div className="business-card-box-container">
          {/* Show only the active card */}
          {businessCardsArray
            .slice(currentIndex, currentIndex + 1)
            .map((item) => (
              <div
                key={item.id}
                className={`business-card-box ${
                  animate ? "fade-in-card" : ""
                } `}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="business-card-overlay ">
                  <img
                    className="business-card-box-svg"
                    src={item.svg}
                    alt="SVG"
                  />
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

          {/* Pagination buttons */}
          <div className="pagination-btn-container">
            {businessCardsArray.map((_, i) => (
              <span
                key={i}
                className={`pagination-btn ${
                  i === currentIndex ? "active" : ""
                }`}
                onClick={() => {
                  if (i !== currentIndex) {
                    triggerAnimation();
                    setCurrentIndex(i);
                  }
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: static info and features */}
      <div className="business-card-right-side fade-in-up">
        <h2 className="business-card-left-side-title">
          Compliance built card for businesses and professionals
        </h2>
        <p className="business-card-left-side-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud exercitation.
        </p>

        {/* Feature list */}
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
