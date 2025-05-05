import React, { useRef } from "react";
import "./Fqa.css";
import fqaArray from "./FqaDatas";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver.jsx";
export default function Fqa() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <section className="fqa-container" ref={ref}>
      <div className="fqa-section">
        <h1 className="fqa-title fade-in-up">FAQs</h1>
        <div className="fqa-box-container fade-in-up">
          {fqaArray.map((item) => (
            <div key={item.id} className="fqa-box fade-in-up">
              <h2 className="fqa-box-title fade-in-up">{item.question}</h2>
              <p className="fqa-box-description fade-in-up">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
