import React from 'react'
import './Header.css'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  return (
    <section className='header-container'>
        <div className="header-top">
            <img className='card-svg' src="public/svg/card-2-svgrepo-com.svg" alt="" />
            <button className='getYourCard-btn'>get your card<FaArrowRightLong />
            </button>
        </div>
        <div className="header-bottom"></div>
    </section>
  )
}
