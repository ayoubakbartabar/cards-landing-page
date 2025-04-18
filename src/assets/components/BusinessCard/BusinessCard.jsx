import React from 'react'
import './BusinessCard.css'
export default function BusinessCard() {

    // create Array
    const businessCardsArray = [
        {id:1 , image:'public/image/testimonial-01.jpg', svg:'public/svg/testimonial-sign-01.svg' , detail:'“ This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier. ”' , name:'Elisa Koeppel' , jobtitles:'CEO & Co-Founder' }
    ]
  return (
    <section className='business-card-container'>
      <div className="business-card-right-side"></div>  
      <div className="business-card-left-side"></div>  
    </section>
  )
}
