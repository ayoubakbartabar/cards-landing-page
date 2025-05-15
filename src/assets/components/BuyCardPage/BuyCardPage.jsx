import React from "react";
import "./BuyCardPage.css";
import BuildFlexibleCards from "./BuildFlexibleCards/BuildFlexibleCards";
import BuyCardForm from "./BuyCardForm/BuyCardForm";
export default function BuyCardPage() {
  return (
    <>
      <section className="buy-card-page-section">
        <div className="buy-card-page-top-side fade-up delay-1">
          <a href="/">
            <svg
              className="card-svg"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill-rule="nonzero" fill="#3b82f6">
                <g transform="translate(3 3)">
                  <circle cx="5" cy="5" r="5"></circle>
                  <circle cx="19" cy="5" r="5"></circle>
                  <circle cx="5" cy="19" r="5"></circle>
                  <circle cx="19" cy="19" r="5"></circle>
                </g>
                <g fill="#7dd3fc">
                  <circle cx="15" cy="5" r="5"></circle>
                  <circle cx="25" cy="15" r="5"></circle>
                  <circle cx="15" cy="25" r="5"></circle>
                  <circle cx="5" cy="15" r="5"></circle>
                </g>
              </g>
            </svg>
          </a>
        </div>

        <div className="buy-card-page-bottom-side">
          <BuildFlexibleCards />
          <BuyCardForm />
        </div>
      </section>
    </>
  );
}
