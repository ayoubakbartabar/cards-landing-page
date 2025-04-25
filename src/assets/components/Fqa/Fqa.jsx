import React from 'react'
import './Fqa.css'
import fqaArray from './FqaDatas'
export default function Fqa() {
  return (
    <section className='fqa-container'>
        <h1 className="fqa-title">FAQs</h1>
        <div className="fqa-box-container">
            {fqaArray.map(item =>(
                <div key={item.id} className="fqa-box">
                    <h2 className="fqa-box-title">{item.question}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}
