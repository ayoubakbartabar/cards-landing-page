import React from "react";
import "./GetYourCardBtn.css";
import { FaArrowRightLong } from "react-icons/fa6";
export default function GetYourCardBtn() {
// create const for variant property
    const className =
    variant === "blue"
      ? "getYourCard-blue-btn"
      : "getYourCard-btn";

  // create BuyCardBtnHandler function
  const BuyCardBtnHandler = () => {
    console.log("hello");
  };
  return (
    <>
      <button onClick={() => BuyCardBtnHandler()}  className={className}>
        get your card
        <span className="arrow-icon">
          <FaArrowRightLong />
        </span>
      </button>
    </>
  );
}
