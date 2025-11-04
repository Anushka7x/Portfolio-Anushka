// ✅ FULL UPDATED App.jsx – FINAL VERSION

import React from "react";
import portraitImg from "./assets/avatar.jpg";
import heroImg from "./assets/avtar2.jpg";
import projectgif from "./assets/Crispe - Chris Phillips-c4a26e89.gif";

// Resume file
const resumeUrl = new URL("./assets/Anushka Dubey Resume 2 years.pdf", import.meta.url).href;

// Reusable Components
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
          <img src={heroImg} alt="Hero" className="tinted-img" aria-hidden="true" />
          <div className="tinted-caption caption-desktop-only">
            <strong>Building fast, scalable UIs using React & Next.js.</strong>
            <br />
            <span>SSR • Performance • Reusable Components • Core Web Vitals 95+</span>
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
          I’m a Frontend Developer with 2+ years of experience building responsive, scalable web applications using
          <strong> React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>.
          I focus on component-driven development, API integration, and UI performance optimization through techniques
          like lazy loading, SSR, and modular architecture. I enjoy turning Figma designs into production-ready UIs and
          have hands-on experience using AI tools (GitHub Copilot, ChatGPT) to speed up development.
        </p>

        <div className="intro-cta">
          <a className="button ghost" href={resumeUrl} download="Anushka_Dubey_Resume.pdf">
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

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <article className="panel skills-panel">
      <h3 className="panel-title">Technical Skills</h3>
      <div className="skills">
        <div>
          <h4>Languages</h4>
          <div className="tags">
            <Tag>JavaScript (ES6+)</Tag>
            <Tag>TypeScript</Tag>
            <Tag>HTML5</Tag>
            <Tag>CSS3</Tag>
          </div>
        </div>

        <div>
          <h4>Frameworks & Libraries</h4>
          <div className="tags">
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
            <Tag>Redux Toolkit</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>Tailwind CSS</Tag>
          </div>
        </div>

        <div>
          <h4>Tools</h4>
          <div className="tags">
            <Tag>Git</Tag>
            <Tag>GitHub</Tag>
            <Tag>Jira</Tag>
            <Tag>Jenkins</Tag>
            <Tag>Postman</Tag>
          </div>
        </div>

        <div>
          <h4>AI Tools</h4>
          <div className="tags">
            <Tag>GitHub Copilot</Tag>
            <Tag>ChatGPT</Tag>
            <Tag>Codeium</Tag>
            <Tag>Cursor</Tag>
            <Tag>OpenAI API</Tag>
          </div>
        </div>

        <div className="tags wide">
          <Tag>SSR</Tag>
          <Tag>Lazy Loading</Tag>
          <Tag>Code Splitting</Tag>
          <Tag>Secure Coding</Tag>
        </div>
      </div>
    </article>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    // ✅ Contract Projects – Bhalekar.ai
    {
      title: "AusExport Portal",
      period: "2025",
      role: "Frontend (Contract · Bhalekar.ai)",
      img: projectgif,
      alt: "AusExport Portal preview",
      brief: "Built a B2B export management platform using React, Next.js & Tailwind. Implemented dashboards, API integrations, and SSR with reusable components.",
      stack: ["Next.js", "React", "Tailwind"],
      link: null
    },
    {
      title: "Nimbus Marine Platform",
      period: "2025",
      role: "Frontend (Contract · Bhalekar.ai)",
      img: "/assets/Nimbus-bff71fe5.gif",
      alt: "Nimbus Marine hiring platform preview",
      brief: "Developed marine services & hiring platform using React & Bootstrap. Implemented modular UI, improved load performance and form handling.",
      stack: ["React", "Bootstrap", "CSS3"],
      link: null
    },

    // ✅ Expleo / Internal
    {
      title: "Web UI Component Library",
      period: "2024",
      role: "Frontend (Expleo)",
      img: projectgif,
      alt: "Web UI Component Library",
      brief: "Built reusable buttons, forms, and layout components using React & SCSS to standardize UI across multiple Expleo projects.",
      stack: ["React", "SCSS"],
      link: null
    },
    {
      title: "AI Form Helper",
      period: "2024",
      role: "Internal Hackathon (Expleo)",
      img: projectgif,
      alt: "AI Form Helper demo",
      brief: "React + OpenAI tool that auto-fills form data and generates validation hints to speed up QA and internal testing.",
      stack: ["React", "OpenAI API"],
      link: null
    },
    {
      title: "AI Code Review Assistant",
      period: "2024",
      role: "Personal / Expleo Mini Project",
      img: projectgif,
      alt: "AI Code Review Assistant preview",
      brief: "Browser-based code review assistant using OpenAI + CodeMirror to analyze JS/React code and suggest improvements.",
      stack: ["JavaScript", "OpenAI API"],
      link: null
    },

    // ✅ Personal Projects
    {
      title: "Portfolio Website",
      period: "2023",
      role: "Personal Project",
      img: "/assets/portfolio.gif",
      alt: "Portfolio preview",
      brief: "Personal portfolio built with React.js & CSS3 to showcase frontend projects and responsive layouts.",
      stack: ["React", "CSS3"],
      link: "https://anushka7x.github.io/Portfolio-Anushka/"
    },
    {
      title: "Nursery E-commerce UI",
      period: "2024",
      role: "Personal Project",
      img: "/assets/Nursery-8cb9c0b0.gif",
      alt: "Nursery E-commerce UI",
      brief: "Plant nursery landing with product grids, filters, and minimal cart UI using HTML/CSS/JS.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Nursery/"
    },
    {
      title: "Travel Explorer",
      period: "2024",
      role: "Personal Project",
      img: "/assets/travel-8cbeb3a1.gif",
      alt: "Travel website preview",
      brief: "Responsive travel agency site with destination cards, filtering and scroll animations.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Travel/"
    },
    {
      title: "Street Animal Care",
      period: "2024",
      role: "Personal Project",
      img: "/assets/petcare-d5eb60b1.gif",
      alt: "Street Animal Care preview",
      brief: "Donation portal for stray animals with contact form, call-to-action buttons, and clean UI.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/pet-care/"
    }
  ];

  return (
    <article className="panel projects" id="projects">
      <h3 className="panel-title">Projects</h3>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="proj-media">
              <img src={p.img} alt={p.alt} loading="lazy" />
            </div>
            <header className="proj-header">
              <h4 className="proj-title">{p.title}</h4>
              <div className="proj-meta">{p.role} · {p.period}</div>
            </header>
            <p className="proj-brief">{p.brief}</p>
            <div className="tags">
              {p.stack.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="proj-links">
              {p.link ? (
                <a className="link-btn live-btn" href={p.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              ) : (
                <span className="link-btn live-btn disabled" aria-disabled="true">No Live Link</span>
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
              <div className="xp-role">Software Developer (Contract) — Bhalekar.ai</div>
              <div className="xp-meta">React · Next.js · Redux Toolkit · Tailwind · API Integration</div>
              <ul className="xp-bullets">
                <Bullet>Developed AusExport Portal using Next.js and Tailwind; built dashboards, authentication, and export workflows.</Bullet>
                <Bullet>Built Nimbus Marine service & hiring platform with React and Bootstrap; improved UI load time by 30% using image optimization and lazy loading.</Bullet>
                <Bullet>Converted Figma designs into scalable React components with reusable UI architecture.</Bullet>
                <Bullet>Enhanced performance using memoization, dynamic imports, and proper state management.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">Aug 2023 — May 2025</div>
            <div className="xp-body">
              <div className="xp-role">Software Engineer — Expleo Group</div>
              <div className="xp-meta">React · Redux Toolkit · REST APIs · Bootstrap</div>
              <ul className="xp-bullets">
                <Bullet>Developed internal dashboards and reusable components using React, Redux Toolkit, and Bootstrap.</Bullet>
                <Bullet>Built Web UI Component Library to standardize UI development and speed up future feature delivery.</Bullet>
                <Bullet>Created AI Form Helper and AI Code Review Assistant using OpenAI API for internal productivity.</Bullet>
                <Bullet>Improved UI responsiveness and performance across legacy modules with code refactoring and lazy-loading strategies.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">2023</div>
            <div className="xp-body">
              <div className="xp-role">Frontend Intern</div>
              <div className="xp-meta">Bootstrap · PHP · HTML · CSS · JavaScript</div>
              <ul className="xp-bullets">
                <Bullet>Delivered responsive websites and dashboards for small businesses.</Bullet>
                <Bullet>Handled end-to-end — UI design, frontend development, and deployment to Netlify/Vercel.</Bullet>
              </ul>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>© {new Date().getFullYear()} Anushka Dubey — Portfolio</p>
      </div>
    </footer>
  );
}
