import React, { useState } from "react";
import "./BuildFlexibleCards.css";
import {
  BuildFlexibleCardsData,
  BuildFlexibleCardsCompony,
} from "./BuildFlexibleCardsData";
import { TypeAnimation } from "react-type-animation";

export default function BuildFlexibleCards() {
  // set Hook for cursor
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section className="build-flexible-card-section">
      <h1 className="build-flexible-card-title">
        <TypeAnimation
          sequence={[
            "Build flexible cards for your business",
            1000,
            () => {
              setShowCursor(false);
            },
          ]}
          speed={70}
          repeat={0}
          cursor={showCursor}
        />
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
          <p className="build-flexible-card-company-title">
            Trusted bt the best
          </p>
          <div className="build-flexible-card-companies">
            {BuildFlexibleCardsCompony.map((item) => (
              <div key={item.id} className="compony-img-container">
                <img src={item.svg} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
