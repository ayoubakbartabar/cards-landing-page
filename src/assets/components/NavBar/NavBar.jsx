import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
export default function NavBar() {
  // set Hook
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <section className="navbar-section">
      <img src="/svg/logo.svg" alt="logo" />
      <Menu />
      <button
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-nav ${isOpen ? "show" : ""}`} ref={menuRef}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}
