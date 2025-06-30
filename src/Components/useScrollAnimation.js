import { useEffect } from "react";

export default function useScrollAnimate(selector, animationClass, options = { threshold: 0.05 }) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass); // Optional: for repeat animation
        }
      });
    }, options);

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, [selector, animationClass, options]);
}
