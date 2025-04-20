import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CustomCardArticle from "../CustomCardArticle/CustomCardArticle";
import BuildCards from "../BuildCards/BuildCards";
import MoneyTransfer from "../MoneyTransfer/MoneyTransfer";
import Brands from "../Brands/Brands";
import GetYourCard from "../GetYourCard/GetYourCard";
import BusinessCard from "../BusinessCard/BusinessCard";
import CustomSuperCards from "../CustomSuperCards/CustomSuperCards";
export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <CustomCardArticle/>
        <BuildCards/>
        <MoneyTransfer/>
        <Brands/>
        <GetYourCard/>
        <BusinessCard/>
        <CustomSuperCards/>
      </main>
    </>
  );
}
