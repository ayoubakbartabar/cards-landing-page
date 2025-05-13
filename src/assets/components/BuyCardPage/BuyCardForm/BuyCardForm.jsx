import React, { useState } from "react";
import "./BuyCardForm.css";
import { IoIosArrowDown } from "react-icons/io";
export default function BuyCardForm() {
  // set Hooks
  const [inputs, setInputs] = useState({
    email: "",
    website: "",
  });
  const [validity, setValidity] = useState({
    email: true,
    website: true,
  });
  // Validation functions for each input field
  const validate = {
    email: (value) => /^[^\s@]+@(gmail\.com|email\.com)$/.test(value),
    website: (value) =>
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|ir|org|net|co|io|dev|app)$/.test(
        value
      ),
  };
  // Input change handler for both email and website fields
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [field]: value }));

    // If input is empty, remove invalid styling (treat as neutral)
    if (value === "") {
      setValidity((prev) => ({ ...prev, [field]: true }));
    } else {
      setValidity((prev) => ({ ...prev, [field]: validate[field](value) }));
    }
  };

  return (
    <div className="buy-card-form-container">
      <div className="buy-card-form-bg">
        <img
          className="form-background-image"
          src="public/svg/cards-illustration.svg"
          alt="svg"
        />
        <div className="buy-card-form-box">
          <form className="buy-card-form">
            <div className="first-name-input-box">
              <label className="first-name-label">First name</label>
              <input
                placeholder="Ayoub"
                className="first-name-input"
                type="text"
                required
              />
            </div>

            <div className="last-name-input-box">
              <label className="last-name-label">Last name</label>
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
                className={`work-email-input ${
                  !validity.email ? "is-not-valid" : ""
                }`}
                type="text"
                value={inputs.email}
                onChange={handleInputChange("email")}
                required
              />
            </div>

            <div className="website-input-box">
              <label className="website-label" htmlFor="website">
                Website
              </label>
              <input
                id="website"
                placeholder="example.com"
                className={`website-input ${
                  !validity.website ? "is-not-valid" : ""
                }`}
                type="text"
                value={inputs.website}
                onChange={handleInputChange("website")}
              />
            </div>

            <div className="compony-size-select-box">
              <label className="compony-size-label">Company size</label>
              <div className="custom-select-wrapper">
                <select className="compony-size-select" required>
                  <option value="Less than 10">Less than 10</option>
                  <option value="More than 10">More than 10</option>
                  <option value="More than 20">More than 20</option>
                  <option value="More than 50">More than 50</option>
                </select>
                <IoIosArrowDown className="custom-select-arrow" />
              </div>
            </div>
            
            <div className="country-select-box">
              <label className="country-label">Country</label>
              <select className="country-select" required>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
              </select>
            </div>

            <div className="anything-else-box">
              <label className="anything-else-label">Anything else?</label>
              <textarea className="anything-else-textarea" required></textarea>
            </div>

            <div className="buy-card-submit-btn-container">
              <button className="getYourCard-blue-btn" type="submit">
                Submit the form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
