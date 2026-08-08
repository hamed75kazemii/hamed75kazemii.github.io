import { useEffect, useState } from "react";
import { content } from "./data/content.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ScrollTop from "./components/ScrollTop.jsx";

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    localStorage.setItem("lang", lang);
  }, [lang, t.dir]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app lang-${lang}`}>
      <Navbar
        t={t}
        lang={lang}
        theme={theme}
        onToggleLang={() => setLang((l) => (l === "en" ? "fa" : "en"))}
        onToggleTheme={() => setTheme((th) => (th === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
      <ScrollTop />
    </div>
  );
}
