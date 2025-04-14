import React, { useRef } from "react";
import "./CustomCardArticle.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";

export default function CustomCardArticle() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <section className="custom-card-article-container" ref={ref}>
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
