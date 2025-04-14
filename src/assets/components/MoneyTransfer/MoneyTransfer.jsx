import React, { useEffect, useRef } from "react";
import "./MoneyTransfer.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MoneyTransfer() {
  // Create a reference to the container holding the elements we want to animate
  const containerRef = useRef(null);

  useEffect(() => {
    // Select all elements inside the container that should have the fade-in animation
    const elements = containerRef.current.querySelectorAll(".fade-in-up");

    // Create an IntersectionObserver to detect when elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is at least 40% visible, add the 'visible' class to trigger animation
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.4, // Element must be 40% visible before triggering the animation
      }
    );

    // Observe each target element
    elements.forEach((el) => observer.observe(el));

    // Cleanup: unobserve elements when the component is unmounted
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section className="money-transfer-container" ref={containerRef}>
      <img
        src="public/image/features-03.png"
        alt="features-img"
        className="money-transfer-left-side fade-in-up"
      />

      <div className="money-transfer-right-side">
        <h2 className="money-transfer-title fade-in-up">
          Spend your money everywhere, pay anyone effortlessly
        </h2>
        <p className="money-transfer-paragraph fade-in-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud exercitation.
        </p>
        <button className="getYourCard-blue-btn fade-in-up">
          get your card
          <span className="arrow-icon">
            <FaArrowRightLong />
          </span>
        </button>
        <div className="money-transfer-left-side-description-container fade-in-up">
          <img
            className="money-transfer-left-side-img"
            src="public/image/quote-author-02.jpg"
            alt="quote-author"
          />
          <p className="money-transfer-left-side-description">
            “ We know the card market very well and this product provides the
            speed, flexible account model, and API-first approach that no one
            else can. ”
          </p>
        </div>
      </div>
    </section>
  );
}
