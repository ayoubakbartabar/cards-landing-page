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
            <div className="last-name-input-box">
              <label className="last-name-label" htmlFor="">
                Last name
              </label>
              <input className="last-name-input" type="text" />
            </div>
            <div className="work-email-input-box">
              <label className="work-email-label" htmlFor="">
                Work email
              </label>
              <input className="work-email-input" type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
