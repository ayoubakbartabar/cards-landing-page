import React, { useState } from "react";
import "./BuyCardForm.css";
import { IoIosArrowDown } from "react-icons/io";

export default function BuyCardForm() {
  // set Hook fir Inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    companySize: "",
    country: "",
    anythingElse: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Validation functions for each input field
  const validateEmail = (email) =>
    /^[^\s@]+@(gmail\.com|email\.com)$/.test(email);
  const validateWebsite = (website) =>
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|ir|org|net|co|io|dev|app)$/.test(
      website
    );

  // Input change handler for both email and website fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    const errors = {}; // Object to store field-specific validation errors

    // Validate each field and set error flags if invalid
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!validateEmail(formData.email)) errors.email = true;
    if (!validateWebsite(formData.website)) errors.website = true;
    if (!formData.companySize) errors.companySize = true;
    if (!formData.country) errors.country = true;
    if (!formData.anythingElse.trim()) errors.anythingElse = true;

    // If any error exists, update error state and stop submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If all inputs are valid, proceed with submission
    console.log("✅ Form submitted successfully:", formData);
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
          <form className="buy-card-form" onSubmit={handleSubmit}>
            <div className="first-name-input-box">
              <label className="first-name-label">First name</label>
              <input
                name="firstName"
                placeholder="Ayoub"
                className={`first-name-input ${
                  formErrors.firstName ? "is-not-valid" : ""
                }`}
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="last-name-input-box">
              <label className="last-name-label">Last name</label>
              <input
                name="lastName"
                placeholder="Akbartabar Kami"
                className={`last-name-input ${
                  formErrors.lastName ? "is-not-valid" : ""
                }`}
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="work-email-input-box">
              <label className="work-email-label" htmlFor="email">
                Work email
              </label>
              <input
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className={`work-email-input ${
                  formErrors.email ? "is-not-valid" : ""
                }`}
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="website-input-box">
              <label className="website-label" htmlFor="website">
                Website
              </label>
              <input
                name="website"
                id="website"
                placeholder="example.com"
                className={`website-input ${
                  formErrors.website ? "is-not-valid" : ""
                }`}
                type="text"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="compony-size-select-box">
              <label className="compony-size-label">Company size</label>
              <div className="custom-select-wrapper">
                <select
                  name="companySize"
                  className={`compony-size-select ${
                    formErrors.companySize ? "is-not-valid" : ""
                  }`}
                  value={formData.companySize}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
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
              <div className="custom-select-wrapper">
                <select
                  name="country"
                  className={`country-select ${
                    formErrors.country ? "is-not-valid" : ""
                  }`}
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <IoIosArrowDown className="custom-select-arrow" />
              </div>
            </div>

            <div className="anything-else-box">
              <label className="anything-else-label">Anything else?</label>
              <textarea
                name="anythingElse"
                className={`anything-else-textarea ${
                  formErrors.anythingElse ? "is-not-valid" : ""
                }`}
                value={formData.anythingElse}
                onChange={handleChange}
              />
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
