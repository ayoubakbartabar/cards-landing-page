import React from "react";
import "./CustomSuperCards.css";
import CustomSuperCardsArray from "./CustomSuperCardsDatas";
export default function CustomSuperCards() {
 
  return (
    <section className="custom-super-cards-container">
      <div className="custom-super-cards-top">
        <h1 className="custom-super-cards-title">
          Get the only custom super card you'll ever need
        </h1>
        <p className="custom-super-cards-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="custom-super-cards-bottom"> 
          {/* set map for generate elements */}
          {
            CustomSuperCardsArray.map(item =>(
              <div className="custom-super-cards-box">
                <h4 className="custom-super-cards-title">{item.title}</h4>
              </div>
              
              
            ))
          }
      </div>
    </section>
  );
}
