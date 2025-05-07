import React from "react";
import "./GetYourCardBtn.css";
import { FaArrowRightLong } from "react-icons/fa6";
export default function GetYourCardBtn({ onClick, className = "" }) {
  return (
    <>
      <button onClick={onClick} className={`getYourCard-btn ${className}`}>
        get your card
        <span className="arrow-icon">
          <FaArrowRightLong />
        </span>
      </button>
    </>
  );
}
