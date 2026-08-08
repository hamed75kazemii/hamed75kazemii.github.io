import { CodeIcon, PenToolIcon, LayoutIcon, RocketIcon } from "../icons.jsx";

const ICONS = { code: CodeIcon, pen: PenToolIcon, layout: LayoutIcon, rocket: RocketIcon };

export default function About({ t }) {
  return (
    <section className="section section-alt" id="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>{t.about.description}</p>
          <div className="chips">
            {t.about.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="about-cards">
          {t.about.cards.map((card) => {
            const Icon = ICONS[card.icon];
            return (
              <div className="feature-card" key={card.title}>
                <Icon size={36} className="feature-icon" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
