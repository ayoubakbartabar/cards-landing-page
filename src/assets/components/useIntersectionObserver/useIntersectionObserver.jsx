import { useEffect } from "react";

/**
 * Custom hook to observe elements with the class 'fade-in-up' inside a container
 * and add the 'visible' class when they enter the viewport.
 */
export default function useIntersectionObserver(containerRef) {
  useEffect(() => {
    // If the container reference is not set, exit early
    if (!containerRef.current) return;

    // Select all elements within the container that should animate
    const elements = containerRef.current.querySelectorAll(".fade-in-up");

    // Create an IntersectionObserver instance to detect visibility of elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When an element is at least 40% visible, add the 'visible' class
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 } // Element must be 40% visible before triggering animation
    );

    // Observe each target element
    elements.forEach((el) => observer.observe(el));

    // Cleanup: stop observing when component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [containerRef]);
}