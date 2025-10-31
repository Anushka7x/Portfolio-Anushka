import React from "react";
import portraitImg from "./assets/avatar.jpg";
import projectgif from "./assets/Crispe - Chris Phillips-c4a26e89.gif";
import heroImg from "./assets/avtar2.jpg";
// résumé file (ensure the file exists at this path in your build/public)
const resumeUrl = new URL("./assets/Anushka_dubey_AD.pdf", import.meta.url).href;

const Tag = ({ children }) => <span className="tag">{children}</span>;
const Bullet = ({ children }) => (
  <li className="bullet">
    <span className="star" aria-hidden>★</span>
    <span>{children}</span>
  </li>
);

export default function App() {
  return (
    <>
      <Hero />
      <main className="sheet" id="about">
        <div className="container">
          <Intro />
          <Divider />
          <Skills />
          <Projects />
          <Experience />
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <header className="hero" aria-label="intro banner">
      <div className="hero-wrap container">
        <div className="portfolio-stack" aria-hidden>
          <span>PORTFOLIO</span>
          <span className="outline">ANUSHKA</span>
          <span className="outline thin">DUBEY</span>
        </div>

        <div className="hero-meta">
          <div>GITHUB: <a href="https://github.com/Anushka7x">/anushka</a></div>
          <div>LINKEDIN: <a href="https://www.linkedin.com/in/anushka-dubey-19a80a226/">/in/anushka-dubey</a></div>
        </div>

        <div className="tinted-block right-card">
          <img src={heroImg} alt="" className="tinted-img" aria-hidden="true" />
          <div className="tinted-caption caption-desktop-only">
            <strong>Frontend Developer — React, Next.js, TypeScript</strong><br />
            <span>Component-driven UIs • SSR • performance optimization • AI-assisted workflows</span>
          </div>
        </div>

        <a href="#about" className="scroll-dot" aria-label="Scroll to about">
          Scroll<br />down
        </a>
      </div>
    </header>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <section className="intro">
      <div className="left">
        <h2 className="intro-hello">
          Hello,<br /> I’m <span className="accent">Anushka Dubey</span>!
        </h2>

        <p className="intro-copy">
          Frontend Developer with 2+ years of experience building responsive, scalable web applications using
          <strong> React.js</strong>, <strong>TypeScript</strong>, and modern front-end tooling. I specialize in
          component-driven UI development, REST API integration, and performance optimization (lazy loading,
          code-splitting, memoization). I have delivered client-facing projects in Agile teams and collaborated
          closely with designers and backend engineers to ship production-ready features. I also use AI-assisted
          development tools such as GitHub Copilot to speed up repetitive tasks and maintain clean code delivery.
        </p>

        <div className="intro-cta">
          <a
            className="button ghost"
            href={resumeUrl}
            download="Anushka_dubey_AD.pdf"
            rel="noreferrer"
          >
            Download Résumé
          </a>
        </div>
      </div>

      <div className="right">
        <div className="portrait-wrap">
          <div className="portrait has-art">
            <img src={portraitImg} alt="Anushka Dubey" className="portrait-img" />
          </div>

          <div className="pill top">2+ years experience</div>
          <div className="pill bottom">Frontend Developer</div>

          <div className="contact-card">
            <h3>Contact</h3>
            <ul>
              <li>Pune, Maharashtra</li>
              <li><a href="mailto:anushkadubey202@gmail.com">anushkadubey202@gmail.com</a></li>
              <li><a href="tel:+917999172774">+91 7999172774</a></li>
              <li><a href="https://anushka7x.github.io/Portfolio-Anushka/" target="_blank" rel="noreferrer">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/anushka-dubey-19a80a226/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden>
      <span>RESUME</span><span>RESUME</span><span>RESUME</span>
    </div>
  );
}

/* --------------- SECTIONS --------------- */
/* ---------------- TECHNICAL SKILLS ---------------- */
function Skills() {
  return (
    <article className="panel skills-panel">
      <h3 className="panel-title">Technical skills</h3>

      <div className="skills">
        <div>
          <h4>Frontend</h4>
          <div className="tags">
            <Tag>React.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>JavaScript (ES6+)</Tag>
            <Tag>HTML5</Tag>
            <Tag>CSS3 / SCSS</Tag>
          </div>
        </div>

        <div>
          <h4>Styling & UI</h4>
          <div className="tags">
            <Tag>Tailwind CSS</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>Responsive Layouts</Tag>
            <Tag>Design Systems</Tag>
          </div>
        </div>

        <div>
          <h4>State & Data</h4>
          <div className="tags">
            <Tag>Redux Toolkit</Tag>
            <Tag>Context API</Tag>
            <Tag>RTK Query</Tag>
            <Tag>Fetch / Axios</Tag>
          </div>
        </div>

        <div>
          <h4>Performance & Architecture</h4>
          <div className="tags">
            <Tag>SSR</Tag>
            <Tag>Code Splitting</Tag>
            <Tag>Lazy Loading</Tag>
            <Tag>Memoization</Tag>
          </div>
        </div>

        <div>
          <h4>Tools & Other</h4>
          <div className="tags">
            <Tag>Git / GitHub</Tag>
            <Tag>Jira</Tag>
            <Tag>Postman</Tag>
            <Tag>Jenkins</Tag>
            <Tag>VS Code</Tag>
          </div>
        </div>

        <div>
          <h4>AI & Productivity</h4>
          <div className="tags">
            <Tag>GitHub Copilot</Tag>
            <Tag>Figma AI plugins</Tag>
            <Tag>OpenAI API (experimental)</Tag>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    {
      title: "Web UI Component Library",
      period: "2024—2025",
      role: "Frontend",
      img: "/assets/component-library.gif",
      alt: "Component library preview",
      brief:
        "Reusable layout, button and form components built with React & SCSS to maintain design consistency across internal projects.",
      stack: ["React", "SCSS"],
      link: null
    },
    {
      title: "E-commerce Web Frontend",
      period: "2024",
      role: "React / Next.js",
      img: "/assets/ecommerce.gif",
      alt: "E-commerce frontend preview",
      brief:
        "Next.js app with dynamic product routing, cart logic, sorting and API integration; responsive UI and reusable components.",
      stack: ["Next.js", "React", "CSS"],
      link: null
    },
    {
      title: "AI Form Helper (Internal Hackathon)",
      period: "2024",
      role: "Frontend",
      img: "/assets/ai-form-helper.gif",
      alt: "AI Form Helper preview",
      brief:
        "AI utility using React + OpenAI API to auto-fill form fields and generate validation hints for faster demos and testing.",
      stack: ["React", "OpenAI API"],
      link: null
    },
    {
      title: "AI Code Review Assistant (Mini Project)",
      period: "2024",
      role: "Frontend",
      img: "/assets/ai-code-review.gif",
      alt: "AI code review assistant preview",
      brief:
        "Browser-based tool using OpenAI API + CodeMirror to analyze JS/React code and provide refactoring suggestions.",
      stack: ["JavaScript", "OpenAI API"],
      link: null
    },
    {
      title: "Personal Portfolio Website",
      period: "2023",
      role: "Frontend",
      img: "/assets/portfolio-preview.gif",
      alt: "Portfolio preview",
      brief:
        "Personal portfolio built with React to showcase frontend projects, responsive layouts and component-driven structure.",
      stack: ["React", "CSS3"],
      link: "https://anushka7x.github.io/Portfolio-Anushka/"
    }
  ];

  return (
    <article className="panel projects" id="projects">
      <h3 className="panel-title">Projects</h3>

      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="proj-media">
              <img src={projectgif} alt={p.alt} loading="lazy" />
            </div>

            <header className="proj-header">
              <h4 className="proj-title">{p.title}</h4>
              <div className="proj-meta">{p.role} · {p.period}</div>
            </header>

            <p className="proj-brief">{p.brief}</p>

            <div className="tags">
              {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>

            <div className="proj-links">
              {p.link ? (
                <a className="link-btn live-btn" href={p.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              ) : (
                <span className="link-btn live-btn disabled" aria-disabled="true" title="Coming soon">
                  View Project
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}


/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <section className="experience">
      <article className="xp-card">
        <h3 className="xp-title">Experience</h3>
        <ul className="xp-list">
          <li>
            <div className="xp-year">May 2025 — Sept 2025</div>
            <div className="xp-body">
              <div className="xp-role">Software Developer — Frontend (Contract) — Bhalekar.ai</div>
              <div className="xp-meta">React.js · Next.js · TypeScript · Redux Toolkit · Tailwind CSS</div>
              <ul className="xp-bullets">
                <Bullet>Developed reusable components and dashboard UIs using React and TypeScript.</Bullet>
                <Bullet>Integrated REST APIs with async handling, error boundaries, and retry logic.</Bullet>
                <Bullet>Improved UI performance by ~35% using lazy loading, dynamic imports, and memoization.</Bullet>
                <Bullet>Converted Figma designs to scalable React interfaces for consulting, marine and export clients.</Bullet>
                <Bullet>Used GitHub Copilot to optimize repetitive UI logic and speed development.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">Aug 2023 — May 2025</div>
            <div className="xp-body">
              <div className="xp-role">Software Engineer — Frontend — Expleo Group</div>
              <div className="xp-meta">React · JavaScript · Redux Toolkit · REST · Bootstrap</div>
              <ul className="xp-bullets">
                <Bullet>Built frontend modules for enterprise dashboards and internal tools.</Bullet>
                <Bullet>Implemented pagination, table rendering, dropdown filtering, and reusable components.</Bullet>
                <Bullet>Improved state management and reduced UI bugs through better validation and structure.</Bullet>
                <Bullet>Collaborated with product, QA and backend teams to deliver sprint-based features.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">2023</div>
            <div className="xp-body">
              <div className="xp-role">Intern</div>
              <div className="xp-meta">Bootstrap · PHP · HTML · CSS · JavaScript</div>
              <ul className="xp-bullets">
                <Bullet>Delivered landing pages and dashboards for small businesses.</Bullet>
                <Bullet>Owned design handoff to deployment on Netlify/Vercel.</Bullet>
              </ul>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>© {new Date().getFullYear()} Anushka Dubey — Portfolio</p>
      </div>
    </footer>
  );
}
