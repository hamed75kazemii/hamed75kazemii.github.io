import { useEffect, useState } from "react";
import { socials } from "../data/content.js";
import { MailIcon, GithubIcon, LinkedinIcon, InstagramIcon } from "../icons.jsx";

const TYPE_COLORS = ["var(--type-1)", "var(--type-2)", "var(--type-3)", "var(--type-4)"];

function useTyping(phrases) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setIndex(0);
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    const phrase = phrases[index % phrases.length];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === phrase) delay = 1600;
    else if (deleting && text === "") delay = 400;

    const timer = setTimeout(() => {
      if (!deleting && text === phrase) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(phrase.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return { text, color: TYPE_COLORS[index % phrases.length % TYPE_COLORS.length] };
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero({ t }) {
  const typing = useTyping(t.hero.typing);

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <h1 className="hero-name">{t.hero.name}</h1>
      <p className="hero-typing" style={{ color: typing.color }}>
        {typing.text}
        <span className="cursor">_</span>
      </p>
      <p className="hero-description">{t.hero.description}</p>
      <div className="hero-buttons">
        <button className="btn btn-filled" onClick={() => scrollTo("projects")}>
          {t.hero.viewWork}
        </button>
        <button className="btn btn-outlined" onClick={() => scrollTo("contact")}>
          {t.hero.connect}
        </button>
      </div>
      <div className="hero-socials">
        <a className="social-btn" href={socials.email} aria-label="Email">
          <MailIcon size={26} />
        </a>
        <a className="social-btn" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon size={26} />
        </a>
        <a className="social-btn" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon size={26} />
        </a>
        <a className="social-btn" href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon size={26} />
        </a>
      </div>
      <div className="hero-stats">
        {t.hero.stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
