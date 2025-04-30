import React from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
export default function NavBar() {
  return (
    <section className="navbar-section">
      <img src="/svg/logo.svg" alt="logo" />
      <Menu />
      <button className="mobile-menu"></button>
    </section>
  );
}
