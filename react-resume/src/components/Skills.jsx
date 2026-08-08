import { MobileIcon, ServerIcon, WrenchIcon } from "../icons.jsx";

const ICONS = { mobile: MobileIcon, server: ServerIcon, wrench: WrenchIcon };

export default function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        {t.skills.groups.map((group) => {
          const Icon = ICONS[group.icon];
          return (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon-box">
                <Icon size={30} />
              </div>
              <h3>{group.title}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
