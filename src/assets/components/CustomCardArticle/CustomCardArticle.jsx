import React, { useEffect, useRef } from "react";
import "./CustomCardArticle.css";

export default function CustomCardArticle() {
// Create a reference to the container holding the card elements
const containerRef = useRef(null);

useEffect(() => {
  // Select all elements inside the container that should animate
  const cards = containerRef.current.querySelectorAll(".fade-in-up");

  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // When the element enters the viewport, add the 'visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.4, // Element must be 40% visible before triggering animation
    }
  );

  // Start observing each card
  cards.forEach(card => observer.observe(card));

  // Clean up the observer when the component unmounts
  return () => {
    cards.forEach(card => observer.unobserve(card));
  };
}, []);


  return (
    <section
      className="custom-card-article-container"
      ref={containerRef}
    >
      <div className="custom-card-article-box fade-in-up">
        <img src="public/svg/custom-cards-1.svg" alt="custom-card-svg" />
        <h4 className="custom-card-article-title">Create custom cards</h4>
        <p className="custom-card-article-paragraph">
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spending's.
        </p>
      </div>

      <div className="custom-card-article-box fade-in-up">
        <img src="public/svg/custom-cards-2.svg" alt="custom-card-svg" />
        <h4 className="custom-card-article-title">Create custom cards</h4>
        <p className="custom-card-article-paragraph">
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spending's.
        </p>
      </div>

      <div className="custom-card-article-box fade-in-up">
        <img src="public/svg/custom-cards-3.svg" alt="custom-card-svg" />
        <h4 className="custom-card-article-title">Create custom cards</h4>
        <p className="custom-card-article-paragraph">
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spending's.
        </p>
      </div>
    </section>
  );
}
