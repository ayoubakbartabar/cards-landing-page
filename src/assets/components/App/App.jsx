import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CustomCardArticle from "../CustomCardArticle/CustomCardArticle";
export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <CustomCardArticle/>
      </main>
    </>
  );
}
