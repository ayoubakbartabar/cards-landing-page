import React from "react";
import "./GetYourCardBtn.css";
import { FaArrowRightLong } from "react-icons/fa6";
export default function GetYourCardBtn() {


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
