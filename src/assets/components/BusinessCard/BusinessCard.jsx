import React from "react";
import "./BusinessCard.css";
export default function BusinessCard() {
  // create Array
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
  // create Array for Business Feature
  const businessFeature = [
    "Identity verifications",
    "Secure credit card data tokenization",
    "Online and mobile payments",
    "IGlobal regulations and compliance",
  ];

  return (
    <section className="business-card-container">
      <div className="business-card-right-side">
        <div className="business-card-box-container">
          {businessCardsArray.map((item) => (
            <div key={item.id} className="business-card-box">
              <div className="business-card-box-top">
                <img
                  className="business-card-box-img"
                  src={item.image}
                  alt="Box Image"
                />
              </div>
              <div className="business-card-box-bottom">
                <div className="business-card-box-svg-container">
                  <img
                    className="business-card-box-svg"
                    src={item.svg}
                    alt="Box svg"
                  />
                </div>
                <p className="business-card-box-paragraph">{item.detail}</p>
                <span className="business-card-box-info-container">
                  <span className="business-card-box-name">{item.name}</span>-
                  <span className="business-card-box-job-titles">
                    {item.jobtitles}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="business-card-left-side">
        <h2 className="business-card-left-side-title">
          Compliance built card for businesses and professionals
        </h2>
        <p className="business-card-left-side-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud exercitation.
        </p>
        <div className="business-card-list-container">
          <ul className="business-card-list">
            {businessFeature.map((item, index) => (
              <div className="business-card-item-container" key={index + 1}>
                <img
                  className="blue-check"
                  src="public/svg/blue-Check.svg"
                  alt="blue-Check"
                />
                <li className="business-card-item">{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
