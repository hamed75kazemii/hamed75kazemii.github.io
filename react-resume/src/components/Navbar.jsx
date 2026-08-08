import { useEffect, useRef, useState } from "react";
import { GlobeIcon, SunIcon, MoonIcon } from "../icons.jsx";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ t, theme, onToggleLang, onToggleTheme }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) setHidden(false);
      else if (Math.abs(y - lastY.current) > 8) setHidden(y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <div className="navbar-actions">
        <button className="icon-btn" onClick={onToggleLang} aria-label="Toggle language">
          <GlobeIcon size={20} />
        </button>
        <button className="icon-btn icon-btn-active" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
      </div>
      <nav className="navbar-links">
        <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
        <button onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
        <button onClick={() => scrollTo("skills")}>{t.nav.skills}</button>
        <button onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
      </nav>
    </header>
  );
}
