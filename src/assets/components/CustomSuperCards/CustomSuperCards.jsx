import React from "react";
import "./CustomSuperCards.css";
import CustomSuperCardsArray from "./CustomSuperCardsDatas";
export default function CustomSuperCards() {
  return (
    <section className="custom-super-cards-container">
      <div className="custom-super-cards-top">
        <h1 className="custom-super-cards-title">
          Get the only custom super card you'll ever need
        </h1>
        <p className="custom-super-cards-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="custom-super-cards-bottom">
        {/* set map for generate elements */}
        {CustomSuperCardsArray.map((item) => (
          <div key={item.id} className={`custom-super-cards-box ${
            item.activeMode ? "custom-super-cards-box--active" : ""
          }`}>
            <h4 className="custom-super-cards-box-title">{item.cardType}</h4>
            <img
              src={item.image}
              alt={item.title}
              className="custom-super-cards-image"
            />
            <h3 className="custom-super-cards-box-price">{item.price}</h3>
            <button className={`${item.buttonStyle}`}>
              {item.buttonTitle}
            </button>
            <ul className="custom-super-cards-list">
              <h3 className="custom-super-cards-list-title">{item.title}</h3>
              {item.features.map((feature, index) => (
                <li key={index} className="custom-super-cards-item-container">
                  <img
                    src="public/svg/green-Check.svg"
                    alt="green check"
                    className="custom-super-cards-item-svg"
                  />
                  <span className="custom-super-cards-item">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
