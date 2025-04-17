import React, {useRef} from "react";
import { TypeAnimation } from 'react-type-animation';
import "./BuildCards.css";
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver.jsx'
import { FaArrowRightLong } from "react-icons/fa6";

export default function BuildCards() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <section className="build-cards-container"  ref={ref}>
      <div className="build-cards-left-side fade-in-up">
        <h2 className="build-cards-title">
        <TypeAnimation
        sequence={[
          'Build a flexible card program for your business needs',
          1000, 
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'inline-block' }}
        repeat={0}
      />
        </h2>
        <p className="build-cards-paragraph">
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
        <div className="build-cards-left-side-description-container">
          <img
            className="build-cards-left-side-img"
            src="public/image/quote-author-01.jpg"
            alt="quote-author"
          />
          <p className="build-cards-left-side-description">
            “ We know the card market very well and this product provides the
            speed, flexible account model and API-first approach that no one
            else can. ”
          </p>
        </div>
      </div>
      <div className="build-cards-right-side fade-in-up">
        <img
          className="build-cards-svg"
          src="public/svg/cards-illustration.svg"
          alt="background-svg"
        />
        <img
          className="build-cards-img"
          src="public/image/features-02.png"
          alt="features-image"
        />
      </div>
    </section>
  );
}
