import React from "react";
import {Link} from "react-router-dom";
import './Menu.css'
export default function Menu() {
  return (
    <ul className="menu-list">
      <li className="menu-item">
        <Link className="menu-link" to="">Home</Link>
      </li>
      <li className="menu-item">
        <Link className="menu-link" to="">Get your card</Link>
      </li>
      <li className="menu-item">
        <Link className="menu-link" to="">Support center</Link>
      </li>
    </ul>
  );
}
