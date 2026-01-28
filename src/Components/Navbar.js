import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ theme }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const sections = useMemo(
    () => [
      { id: "Home", label: "Home" },
      { id: "MyService", label: "What I Build" },
      { id: "MyWork", label: "Projects" },
      { id: "Experience", label: "Experience & Skills" },
      { id: "Contact", label: "ContactMe" },
    ],
    []
  );

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-30% 0px -55% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector(".navbar");
    const navOffset = (nav?.offsetHeight || 0) + 10;
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const onNavClick = (e, id) => {
    e.preventDefault();
    setIsSidebarOpen(false);
    setActive(id);
    scrollToId(id);
  };

  function toggleSidebar() {
    setIsSidebarOpen((v) => !v);
  }
  return (
    <>
      <div className={`navbar ${theme ? "" : "Dark"}`}>
        <div className="nav-left">
          <button
            className={`button ${theme ? "" : "Dark"}`}
            style={{ background: "transparent" }}
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <p id="logo">Vikash Mehra</p>
        </div>
        <div className="nav-right">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "is-active" : ""}
              aria-current={active === s.id ? "page" : undefined}
              onClick={(e) => onNavClick(e, s.id)}
            >
              {s.label}
              <AnimatePresence>
                {active === s.id && (
                  <motion.span
                    className="nav-underline"
                    layoutId="nav-underline"
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>
      </div>
      <div
        className={`sidebar-outer ${isSidebarOpen ? "background" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className={`sidebar ${theme ? "Dark-min" : ""} ${isSidebarOpen ? "showIn" : "showOut"}`}
      >
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={(e) => onNavClick(e, s.id)}>
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}
