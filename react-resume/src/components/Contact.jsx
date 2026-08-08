import { socials } from "../data/content.js";
import { MailIcon, GithubIcon, LinkedinIcon } from "../icons.jsx";

export default function Contact({ t }) {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-text">{t.contact.text}</p>
      <div className="contact-buttons">
        <a className="btn btn-filled contact-btn" href={socials.email}>
          <MailIcon size={20} /> <span>{t.contact.email}</span>
        </a>
        <a className="btn btn-outlined contact-btn" href={socials.github} target="_blank" rel="noreferrer">
          <GithubIcon size={20} /> <span>{t.contact.github}</span>
        </a>
        <a className="btn btn-outlined contact-btn" href={socials.linkedin} target="_blank" rel="noreferrer">
          <LinkedinIcon size={20} /> <span>{t.contact.linkedin}</span>
        </a>
      </div>
    </section>
  );
}
