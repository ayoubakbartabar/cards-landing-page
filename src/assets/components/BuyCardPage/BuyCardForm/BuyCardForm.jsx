import React from "react";
import "./BuyCardForm.css";
export default function BuyCardForm() {
  return (
    <div className="buy-card-form-container">
      <div className="buy-card-form-bg">
        <img src="public\svg\cards-illustration.svg" alt="svg" />
        <div className="buy-card-form-box">
          <form className="buy-card-form">
            <div className="first-name-input-box">
              <label className="first-name-label" htmlFor="">
                First name
              </label>
              <input className="first-name-input" type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
