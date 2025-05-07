import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy-card" element={<BuyCardComponent />} />
    </Routes>
  </Router>
  );
}
