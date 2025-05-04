import React, { useRef } from "react";
import "./CustomCardArticle.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";

export default function CustomCardArticle() {
  const ref = useRef(null);
  useIntersectionObserver(ref);

  // create object
  const customCardArticleArray = [
    {
      id: 1,
      img: "public/svg/custom-cards-1.svg",
      title: "Create custom cards",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spending's.",
    },
    {
      id: 2,
      img: "public/svg/custom-cards-2.svg",
      title: "Create custom cards",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spending's.",
    },
    {
      id: 3,
      img: "public/svg/custom-cards-3.svg",
      title: "Create custom cards",
      paragraph:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spending's.",
    },
  ];
  return (
    <section className="custom-card-article-container" ref={ref}>
      <div className="custom-card-article-section">
      {customCardArticleArray.map((item) => (
        <div key={item.id} className="custom-card-article-box fade-in-up">
          <img src={item.img} alt="custom-card-svg" />
          <h4 className="custom-card-article-title">{item.title}</h4>
          <p className="custom-card-article-paragraph">{item.paragraph}</p>
        </div>
      ))}
      </div>
    </section>
  );
}
