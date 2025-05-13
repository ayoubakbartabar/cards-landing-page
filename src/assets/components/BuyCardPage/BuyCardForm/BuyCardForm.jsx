import React, { useState } from "react";
import "./BuyCardForm.css";
export default function BuyCardForm() {
  // set Hook
  const [emailInputVal, setEmailInputVal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  // const valid handler
  const validateEmail = (value) => {
    const emailRegex = /^[^s@]+@(gmail.com|email.com)$/;
    return emailRegex.test(value);
  };
  // email input handler
  const handleChange = (event) => {
    const value = event.target.value;
    setEmailInputVal(value);
    setIsValid(validateEmail(value));
  };
  return (
    <div className="buy-card-form-container">
      <div className="buy-card-form-bg">
        <img
          className="form-background-image"
          src="public\svg\cards-illustration.svg"
          alt="svg"
        />
        <div className="buy-card-form-box">
          <form className="buy-card-form">
            <div className="first-name-input-box">
              <label className="first-name-label" htmlFor="">
                First name
              </label>
              <input
                placeholder="Ayoub"
                className="first-name-input"
                type="text"
                required
              />
            </div>
            <div className="last-name-input-box">
              <label className="last-name-label" htmlFor="">
                Last name
              </label>
              <input
                placeholder="Akbartabar Kami"
                className="last-name-input"
                type="text"
                required
              />
            </div>
            <div className="work-email-input-box">
              <label className="work-email-label" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                placeholder="example@gmail.com"
                className={`work-email-input ${!isValid ? "is-not-valid" : ""}`}
                type="text"
                value={emailInputVal}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required
              />
            </div>

            <div className="website-input-box">
              <label className="website-label" htmlFor="">
                Website
              </label>
              <input
                placeholder="example.com"
                className="website-input"
                type="text"
                required
              />
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
                Anything else?
              </label>
              <textarea
                className="anything-else-textarea"
                name=""
                id=""
                required
              ></textarea>
            </div>
            <div className="buy-card-submit-btn-container">
              <button className="getYourCard-blue-btn ">Submit the form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
