import React from 'react'
import './Header.css'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <section className='header-container'>
        <div className="header-top">
            <img src="/public/svg/label.svg" alt="" />
            <button className='getYourCard-btn'>get your card<FaArrowRightLong />
            </button>
        </div>
        <div className="header-bottom"></div>
    </section>
  )
}
