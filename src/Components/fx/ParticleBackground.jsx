import React, { useEffect, useMemo, useRef } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ParticleBackground({ theme }) {
  const canvasRef = useRef(null);
  const reduced = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;

    const pointer = { x: 0, y: 0, active: false };

    const config = {
      count: reduced ? 35 : 70,
      maxSpeed: reduced ? 0.2 : 0.55,
      linkDist: reduced ? 95 : 125,
      linkDist2: 0,
      repelDist: reduced ? 80 : 120,
    };
    config.linkDist2 = config.linkDist * config.linkDist;

    const colors = theme
      ? {
          // light theme
          bg: "rgba(255,255,255,0)",
          dot: "rgba(15, 23, 42, 0.55)",
          line: "rgba(37, 99, 235, 0.18)",
          glow: "rgba(250, 204, 21, 0.08)",
        }
      : {
          // dark theme
          bg: "rgba(0,0,0,0)",
          dot: "rgba(226, 232, 240, 0.52)",
          line: "rgba(250, 204, 21, 0.16)",
          glow: "rgba(96, 165, 250, 0.09)",
        };

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rand = (min, max) => min + Math.random() * (max - min);

    const particles = Array.from({ length: config.count }, () => ({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      vx: rand(-config.maxSpeed, config.maxSpeed),
      vy: rand(-config.maxSpeed, config.maxSpeed),
      r: rand(1.2, 2.4),
    }));

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    resize();

    const step = () => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      // subtle background glow
      ctx.fillStyle = colors.glow;
      ctx.beginPath();
      ctx.arc(width * 0.2, height * 0.15, Math.min(width, height) * 0.28, 0, Math.PI * 2);
      ctx.fill();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        if (!reduced && pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const repel2 = config.repelDist * config.repelDist;
          if (d2 < repel2 && d2 > 0.0001) {
            const f = (repel2 - d2) / repel2;
            p.vx += (dx / Math.sqrt(d2)) * f * 0.015;
            p.vy += (dy / Math.sqrt(d2)) * f * 0.015;
          }
        }

        // clamp speed
        const s2 = p.vx * p.vx + p.vy * p.vy;
        const max2 = config.maxSpeed * config.maxSpeed;
        if (s2 > max2) {
          const s = Math.sqrt(s2);
          p.vx = (p.vx / s) * config.maxSpeed;
          p.vy = (p.vy / s) * config.maxSpeed;
        }
      }

      // links
      ctx.strokeStyle = colors.line;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < config.linkDist2) {
            const alpha = 1 - d2 / config.linkDist2;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // dots
      ctx.fillStyle = colors.dot;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(step);
    };

    raf = window.requestAnimationFrame(step);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [theme, reduced]);

  return <canvas ref={canvasRef} className="fx-canvas" aria-hidden="true" />;
}
