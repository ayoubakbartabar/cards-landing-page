import React, { useRef } from "react";
import "./MoneyTransfer.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";
import GetYourCardBtn from "../GetYourCardBtn/GetYourCardBtn.jsx";

export default function MoneyTransfer() {
  const ref = useRef(null);

  useIntersectionObserver(ref);
  return (
    <section className="money-transfer-container" ref={ref}>
      <div className="money-transfer-section">
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
          <GetYourCardBtn
            onClick={() => BuyCardBtnHandler()}
            className="getYourCard-blue-btn fade-in-up"
          />
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
      </div>
    </section>
  );
}
