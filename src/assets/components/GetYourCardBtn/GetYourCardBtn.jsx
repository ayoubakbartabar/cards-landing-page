import React from "react";
import "./GetYourCardBtn.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function GetYourCardBtn({ className = "" }) {
  // set navigate
  const navigate = useNavigate();
  // create BuyCardBtnHandler function
  const BuyCardBtnHandler = () => {
    navigate("/buy-card");
  };

  return (
    <>
      <button
        onClick={BuyCardBtnHandler}
        className={`getYourCard-btn ${className}`}
      >
        get your card
        <span className="arrow-icon">
          <FaArrowRightLong />
        </span>
      </button>
    </>
  );
}
