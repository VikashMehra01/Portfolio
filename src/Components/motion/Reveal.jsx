import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 18,
  once = true,
  amount = 0.2,
  className,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
