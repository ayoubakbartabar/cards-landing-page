import React, { useRef } from "react";
import "./Brands.css";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";
import GetYourCardBtn from "../GetYourCardBtn/GetYourCardBtn.jsx";

export default function Brands() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  // create stores Arrays
  const physicalStores = [
    "Starbucks",
    "Tesco",
    "American Eagle",
    "Bershka",
    "salisbury`s",
    "Marks & Spencer",
    "Primark",
    "SportsDirect",
  ];
  const onlineStores = [
    "Amazon Prime",
    "Universal Store",
    "Apple One",
    "Booking.com",
    "Netflix",
    "Deliveroo",
    "Spotify",
    "Well Made Clothes",
  ];

  return (
    <section className="brand-container" ref={ref}>
      <div className="brand-container-section">
        <div className="brand-left-side  fade-in-up">
          <h2 className="brand-left-side-title">
            Get cashback rewards on your favourite brands
          </h2>
          <p className="brand-left-side-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="stores-list-container">
            <ul className="physical-stores-list">
              <h4 className="physical-stores-list-title">Physical Stores</h4>
              {physicalStores.map((item, index) => (
                <div className="physical-stores-item-container" key={index + 1}>
                  <img
                    className="blue-check"
                    src="/svg/blue-Check.svg"
                    alt="blue-Check"
                  />
                  <li className="physical-stores-item">{item}</li>
                </div>
              ))}
            </ul>
            <ul className="online-stores-list">
              <h4 className="online-stores-list-title">online Stores</h4>
              {onlineStores.map((item, index) => (
                <div className="online-stores-item-container" key={index + 1}>
                  <img
                    className="blue-check"
                    src="/svg/blue-Check.svg"
                    alt="blue-Check"
                  />
                  <li className="online-stores-item">{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <GetYourCardBtn
            onClick={() => BuyCardBtnHandler()}
            className="getYourCard-blue-btn fade-in-up"
          />
        </div>
        <img
          className="brand-right-side  fade-in-up"
          src="/image/features-04.png"
          alt="features-04"
        />
      </div>
    </section>
  );
}
