import React from "react";
import "./MoneyTransfer.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MoneyTransfer() {
  return (
    <section className="money-transfer-container">
      <img
        src="public/image/features-03.png"
        alt="features-img"
        className="money-transfer-left-side"
      />

      <div className="money-transfer-right-side">
        <h2 className="money-transfer-title">
          Spend your money everwhere, pay anyone effortlessy
        </h2>
        <p className="money-transfer-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud exercitation.
        </p>
        <button className="getYourCard-blue-btn">
          get your card
          <span className="arrow-icon">
            <FaArrowRightLong />
          </span>
        </button>
        <div className="money-transfer-left-side-description-container">
          <img
            className="money-transfer-left-side-img"
            src="public/image/quote-author-02.jpg"
            alt="quote-author"
          />
          <p className="money-transfer-left-side-description">
            “ We know the card market very well and this product provides the
            speed, flexible account model and API-first approach that no one
            else can. ”
          </p>
        </div>
      </div>
    </section>
  );
}
