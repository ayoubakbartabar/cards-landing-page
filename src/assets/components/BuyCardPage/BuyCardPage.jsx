import React from "react";
import "./BuyCardPage.css";
export default function BuyCardPage() {
  return (
    <>
      <section className="buy-card-page-section">
        <div className="buy-card-page-top-side">
          <div className="header-top fade-up delay-1">
            <svg
              className="card-svg"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="nonzero" fill="none">
                <g className="cypkd" fill="#eff6ff" transform="translate(3 3)">
                  <circle cx="5" cy="5" r="5" />
                  <circle cx="19" cy="5" r="5" />
                  <circle cx="5" cy="19" r="5" />
                  <circle cx="19" cy="19" r="5" />
                </g>
                <g className="coow8" fill="#7dd3fc">
                  <circle cx="15" cy="5" r="5" />
                  <circle cx="25" cy="15" r="5" />
                  <circle cx="15" cy="25" r="5" />
                  <circle cx="5" cy="15" r="5" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="buy-card-page-bottom-side"></div>
      </section>
    </>
  );
}
