import React, { useState } from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
export default function NavBar() {
  // set Hook
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="navbar-section">
      <img src="/svg/logo.svg" alt="logo" />
      <Menu />
      <button
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-nav ${isOpen ? "show" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}
