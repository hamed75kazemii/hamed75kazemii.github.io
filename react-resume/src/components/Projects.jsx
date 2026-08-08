import { useState } from "react";
import { projects } from "../data/content.js";
import { PlayIcon, AppleIcon, AndroidIcon, GithubIcon, LockIcon, GlobeIcon } from "../icons.jsx";

function VideoModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <video src={project.videoUrl} controls autoPlay className="modal-video" />
      </div>
    </div>
  );
}

function ProjectCard({ project, t, lang }) {
  const [playing, setPlaying] = useState(null);
  const isDev = project.status === "dev";

  const openVideo = () => {
    if (project.videoUrl) setPlaying(project);
    else if (project.link) window.open(project.link, "_blank");
  };

  return (
    <article className="project-card">
      <div className={`project-status ${isDev ? "status-dev" : "status-done"}`}>
        <span className="status-dot" />
        {isDev ? t.projects.statusDev : t.projects.statusDone}
      </div>
      <div className="project-header">
        <img className="project-logo" src={project.image} alt={`${project.title} logo`} />
        <div className="project-title-box">
          <h3>{project.title}</h3>
          <span className="project-date">{project.date[lang]}</span>
        </div>
        <button className="play-btn" onClick={openVideo} aria-label={`${project.title} demo`}>
          <PlayIcon size={20} />
        </button>
      </div>
      <p className="project-description">{project.description[lang]}</p>
      <div className="project-role">{project.role[lang]}</div>
      <div className="project-links">
        {project.website && (
          <a className="store-btn website-btn" href={project.website} target="_blank" rel="noreferrer">
            <GlobeIcon size={17} /> <span>Website</span>
          </a>
        )}
        {project.appStore && (
          <a className="store-btn appstore-btn" href={project.appStore} target="_blank" rel="noreferrer">
            <AppleIcon size={17} /> <span>App Store</span>
          </a>
        )}
        {project.googlePlay && (
          <a className="store-btn googleplay-btn" href={project.googlePlay} target="_blank" rel="noreferrer">
            <AndroidIcon size={17} /> <span>Google Play</span>
          </a>
        )}
        {project.isPrivate ? (
          <span className="store-btn github-btn locked">
            <LockIcon size={16} /> <span>GitHub</span>
          </span>
        ) : (
          project.github && (
            <a className="store-btn github-btn" href={project.github} target="_blank" rel="noreferrer">
              <GithubIcon size={16} /> <span>GitHub</span>
            </a>
          )
        )}
      </div>
      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </article>
  );
}

export default function Projects({ t, lang }) {
  return (
    <section className="section section-alt" id="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} t={t} lang={lang} />
        ))}
      </div>
    </section>
  );
}
