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
              <div key={item.id} className="custom-super-cards-box">
                <h4 className="custom-super-cards-title">{item.title}</h4>
                <img src={item.image} alt={item.title}  className="custom-super-cards-image"/>
                <h3 className="custom-super-cards-price">{item.price}</h3>
                <button className="custom-super-cards-btn">{item.buttonTitle}</button>
              </div>
              
              
            ))
          }
      </div>
    </section>
  );
}
