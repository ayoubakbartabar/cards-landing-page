import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Fqa/>
      </main>
      <Footer/>
    </>
  );
}
