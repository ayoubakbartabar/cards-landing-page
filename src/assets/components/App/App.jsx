import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import BuyCardPage from "../BuyCardPage/BuyCardPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy-card" element={<BuyCardPage />} />
    </Routes>
  );
}
