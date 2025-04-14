import { useEffect } from "react";

export default function useIntersectionObserver(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );


    elements.forEach((el) => observer.observe(el));


    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [containerRef]);
}
