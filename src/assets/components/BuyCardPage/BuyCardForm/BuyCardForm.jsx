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
            <div className="website-input-box">
              <label className="website-label" htmlFor="">
                Website
              </label>
              <input className="website-input" type="text" />
            </div>
            <div className="compony-size-select-box">
              <label className="compony-size-label" htmlFor="">
                Compony size
              </label>
              <select className="compony-size-select" name="" id="">
                <option value="Less than 10">Less than 10</option>
                <option value="More than 10">More than 10</option>
                <option value="More than 20">More than 20</option>
                <option value="More than 50">More than 50</option>
              </select>
            </div>
            <div className="country-select-box">
              <label className="country-label" htmlFor="">
                Country
              </label>
              <select className="country-select" name="" id="">
                <option value="United States">United states</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
              </select>
            </div>
            <div className="anything-else-box">
              <label className="anything-else-label" htmlFor="">
                Country
              </label>
                <textarea className="anything-else-textarea" name="" id=""></textarea>
            </div>

            <button className=""></button>
          </form>
        </div>
      </div>
    </div>
  );
}
