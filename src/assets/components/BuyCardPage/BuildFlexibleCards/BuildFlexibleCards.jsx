import React from "react";
import "./BuildFlexibleCards.css";
import BuildFlexibleCardsData from "./BuildFlexibleCardsData";
export default function BuildFlexibleCards() {
  return (
    <section className="build-flexible-card-section">
      <h1 className="build-flexible-card-title">
        Build flexible cards for your business
      </h1>
      <div className="build-flexible-card-box-container">
        {BuildFlexibleCardsData.map((item) => (
          <div key={item.id} className="build-flexible-card-box">
            <img
              className="build-flexible-card-box-svg"
              src={item.svg}
              alt="check-svg"
            />
            <p className="build-flexible-card-box-paragraph">
              {item.paragraph}
            </p>
          </div>
        ))}
        <div className="build-flexible-card-company-container">
            <p className="build-flexible-card-company-title">Trusted bt the best</p>
            <div className="build-flexible-card-companies">
                
            </div>
        </div>
      </div>
    </section>
  );
}
