import React from "react";
import "./CustomCardArticle.css";
export default function CustomCardArticle() {
  return (
    <section className="custom-card-article-container">
      <div className="custom-card-article-box">
        <img src="public/svg/custom-cards-1.svg" alt="custom-card-svg" />
        <h4 className="custom-card-article-title">Create custom cards</h4>
        <p className="custom-card-article-paragraph">
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spending's.
        </p>
      </div>

      <div className="custom-card-article-box">
        <img src="public/svg/custom-cards-2.svg" alt="custom-card-svg" />
        <h4 className="custom-card-article-title">Create custom cards</h4>
        <p className="custom-card-article-paragraph">
          Create cards that work exactly as you configured them. Make real-time
          decisions on charges and spending's.
        </p>
      </div>

      <div className="custom-card-article-box">
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
