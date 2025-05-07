import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CustomCardArticle from "../CustomCardArticle/CustomCardArticle";
import BuildCards from "../BuildCards/BuildCards";
import MoneyTransfer from "../MoneyTransfer/MoneyTransfer";
import Brands from "../Brands/Brands";
import GetYourCard from "../GetYourCard/GetYourCard";
import BusinessCard from "../BusinessCard/BusinessCard";
import CustomSuperCards from "../CustomSuperCards/CustomSuperCards";
import Fqa from "../Fqa/Fqa";
import Footer from "../Footer/Footer";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <CustomCardArticle />
        <BuildCards />
        <MoneyTransfer />
        <Brands />
        <GetYourCard />
        <BusinessCard />
        <CustomSuperCards />
        <Fqa />
      </main>
      <Footer />
    </>
  );
}
