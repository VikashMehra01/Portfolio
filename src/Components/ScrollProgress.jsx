import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({ theme }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      className={`scroll-progress ${theme ? "Dark" : ""}`}
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
