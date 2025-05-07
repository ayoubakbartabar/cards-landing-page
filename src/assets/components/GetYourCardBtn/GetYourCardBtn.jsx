import React from "react";
import "./GetYourCardBtn.css";
import { FaArrowRightLong } from "react-icons/fa6";
export default function GetYourCardBtn() {
  // create BuyCardBtnHandler function
  const BuyCardBtnHandler = () => {
    console.log("hello");
  };
  return (
    <>
      <button onClick={() => BuyCardBtnHandler()} className="getYourCard-btn">
        get your card
        <span className="arrow-icon">
          <FaArrowRightLong />
        </span>
      </button>
    </>
  );
}
