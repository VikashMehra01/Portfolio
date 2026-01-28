import { useEffect } from "react";

export default function useScrollAnimate(selector, animationClass, options = { threshold: 0.05 }) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // Older/mobile browsers or test environments might not support this.
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add(animationClass));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    }, options);

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, animationClass, options]);
}
