import React, { useEffect, useMemo, useRef } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CursorGlow({ theme }) {
  const ref = useRef(null);
  const reduced = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = -9999;
    let ty = -9999;
    let x = tx;
    let y = ty;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // smooth follow
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`cursor-glow ${theme ? "cursor-glow--light" : "cursor-glow--dark"}`}
      aria-hidden="true"
    />
  );
}
