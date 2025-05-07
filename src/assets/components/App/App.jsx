import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyCardPage from "../BuyCardPage/BuyCardPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-card" element={<BuyCardPage />} />
      </Routes>
    </Router>
  );
}
