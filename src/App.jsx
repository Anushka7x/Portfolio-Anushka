import React from "react";
import portraitImg from "./assets/avatar.jpg";
import projectgif from "./assets/Crispe - Chris Phillips-c4a26e89.gif";
import heroImg from "./assets/avtar2.jpg";

// résumé file — ensure correct path
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
          <strong> React.js</strong>, <strong>Next.js</strong>, and modern front-end tooling. I specialize in
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

/* ---------------- DIVIDER ---------------- */
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
            <Tag>Axios / Fetch</Tag>
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
            <Tag>ChatGPT</Tag>
            <Tag>OpenAI API</Tag>
            <Tag>Codeium</Tag>
            <Tag>Cursor</Tag>
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
      title: "Nursery E-commerce UI",
      period: "2024",
      role: "Frontend Developer — Expleo (Personal Project)",
      img: "/assets/Nursery-8cb9c0b0.gif",
      alt: "Nursery E-commerce UI preview",
      brief:
        "E-commerce prototype for a plant nursery featuring product cards, filter sorting, and category navigation. Focused on responsive layout and modular CSS.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Nursery/"
    },
    {
      title: "Street Animal Care",
      period: "2024",
      role: "Frontend Developer — Expleo (Personal Project)",
      img: "/assets/petcare-d5eb60b1.gif",
      alt: "Street Animal Care website preview",
      brief:
        "Donation/help portal for stray animals with intuitive CTAs, volunteer form, and real-time donation tracker using vanilla JS.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/pet-care/"
    },
    {
      title: "Travel Explorer Site",
      period: "2024",
      role: "Frontend Developer — Expleo (Personal Project)",
      img: "/assets/travel-8cbeb3a1.gif",
      alt: "Travel Explorer site preview",
      brief:
        "Responsive travel agency landing page with dynamic destination sections, search filters, and call-to-action elements.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Travel/"
    },
    {
      title: "Bhalekar Consulting (Official)",
      period: "2025",
      role: "Software Developer (Contract) — Bhalekar.ai",
      img: "/assets/bhalekar-e3946baa.gif",
      alt: "Bhalekar Consulting website preview",
      brief:
        "Corporate consulting website built during contract tenure. Implemented responsive pages and optimized React components using Bootstrap, JS, and CSS.",
      stack: ["Bootstrap", "JavaScript", "CSS3"],
      link: "https://bhalekar.ai/"
    },
    {
      title: "Nimbus Marine (Singapore)",
      period: "2025",
      role: "Frontend Developer — Bhalekar.ai",
      img: "/assets/Nimbus-bff71fe5.gif",
      alt: "Nimbus Marine site preview",
      brief:
        "Developed hiring and service platform for a Singapore-based marine firm. Delivered modular UI, image optimization, and performance tuning.",
      stack: ["Bootstrap", "JavaScript", "CSS3"],
      link: null
    },
    {
      title: "AusExport Portal (Ongoing)",
      period: "2025",
      role: "React / Next.js Developer — Bhalekar.ai",
      img: "/assets/Crispe - Chris Phillips-c4a26e89.gif",
      alt: "AusExport portal preview",
      brief:
        "Business export management system using React, Next.js, and Tailwind for an Australian client. Currently building dashboard components and SSR architecture.",
      stack: ["Next.js", "React", "Tailwind"],
      link: null,
      badge: "Currently Working"
    }
  ];

  return (
    <article className="panel projects" id="projects">
      <h3 className="panel-title">Projects</h3>

      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="proj-media">
              <img src={p.img || projectgif} alt={p.alt} loading="lazy" />
              {p.badge && <span className="badge">{p.badge}</span>}
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
              <div className="xp-role">Software Developer — Bhalekar.ai (Contract)</div>
              <div className="xp-meta">React.js · Next.js · TypeScript · Redux Toolkit · Tailwind CSS</div>
              <ul className="xp-bullets">
                <Bullet>Developed reusable components and dashboard UIs using React and TypeScript.</Bullet>
                <Bullet>Integrated REST APIs with async handling, error boundaries, and retry logic.</Bullet>
                <Bullet>Improved UI performance by ~35% through lazy loading, memoization, and optimized images.</Bullet>
                <Bullet>Collaborated with design and product team to deliver client-facing projects (Nimbus Marine, AusExport).</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">Aug 2023 — May 2025</div>
            <div className="xp-body">
              <div className="xp-role">Software Engineer — Expleo Group</div>
              <div className="xp-meta">React · Redux Toolkit · REST · Jenkins · Bootstrap</div>
              <ul className="xp-bullets">
                <Bullet>Built React modules and integrated REST APIs for internal dashboards and client systems.</Bullet>
                <Bullet>Enhanced UI performance and reduced re-renders with memoization and lazy loading.</Bullet>
                <Bullet>Automated CI/CD with Jenkins and maintained version control using Git.</Bullet>
                <Bullet>Collaborated with cross-functional teams in Agile sprints for delivery and QA sign-off.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">2023</div>
            <div className="xp-body">
              <div className="xp-role">Frontend Intern</div>
              <div className="xp-meta">Bootstrap · PHP · HTML · CSS · JavaScript</div>
              <ul className="xp-bullets">
                <Bullet>Delivered landing pages and dashboards for small business clients.</Bullet>
                <Bullet>Handled complete cycle: design → development → deployment on Netlify/Vercel.</Bullet>
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
