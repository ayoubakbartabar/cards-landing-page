import React from "react";
import "./CustomSuperCards.css";
export default function CustomSuperCards() {
  // create data file
  const CustomSuperCardsArray = [
    {
      id: 1,
      cardType: "Starter",
      image: "public/image/pricing-01.png",
      price: "$0/m",
      buttonTitle: "get starter",
      title: "Features include",
      features: [
        "Contactless payments",
        "Mobile payments",
        "Extra card (optional)",
        "Free payments worldwide",
        "Free domestic ATM withdrawals",
      ],
    },
    {
      id: 2,
      cardType: "Smart",
      image: "public/image/pricing-02.png",
      price: "$12/m",
      buttonTitle: "get smart",
      title: "Everything in Starter, plus",
      features: [
        "Cashback",
        "Travel insurance",
        "3 Extra cards (optional)",
        "Flight insurance",
        "Two-factor authentication",
        "Chatbot and in-app support",
        "Discounted domestic transfers",
      ],
    },
    {
      id: 3,
      cardType: "You",
      image: "public/image/pricing-03.png",
      price: "$24/m",
      buttonTitle: "get you",
      title: "Everything in Starter, plus",
      features: [
        "Split and settle bills",
        "Money management",
        "5 Extra cards (optional)",
        "Finance tracking",
        "Free and international domestic ATM withdrawals",
      ],
    },
    {
      id: 4,
      cardType: "Black",
      image: "public/image/pricing-04.png",
      price: "$49/m",
      buttonTitle: "get black",
      title: "Everything in You, plus",
      features: [
        "Split and settle bills",
        "Money management",
        "5 Extra cards (optional)",
        "Finance tracking",
        "Free and international domestic ATM withdrawals",
      ],
    },
  ];
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
      <div className="custom-super-cards-bottom"></div>
    </section>
  );
}
