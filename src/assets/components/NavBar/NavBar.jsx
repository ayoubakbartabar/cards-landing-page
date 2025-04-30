import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <Link className="mobile-menu-link" to="">
              Home
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="mobile-menu-link" to="">
              Get your card
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link className="mobile-menu-link" to="">
              Support center
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
