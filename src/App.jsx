import React from "react";
import portraitImg from "./assets/avatar.jpg";
import  projectgif  from "./assets/Crispe - Chris Phillips-c4a26e89.gif";
import heroImg from "./assets/avtar2.jpg"
// your illustrated photo
const resumeUrl = new URL("./assets/Anushka Dubey Resume 2 years.pdf", import.meta.url).href;

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
        {/* Big background words */}
        <div className="portfolio-stack" aria-hidden>
          <span>PORTFOLIO</span>
          <span className="outline">ANUSHKA</span>
          <span className="outline thin">DUBEY</span>
        </div>

        {/* Top-left meta */}
        <div className="hero-meta">
          <div>GITHUB: <a href="https://github.com/Anushka7x">/anushka</a></div>
          <div>LINKEDIN: <a href="https://www.linkedin.com/in/anushka-dubey-19a80a226/">/in/anushka-dubey</a></div>
        </div>

        {/* Right hero tile */}
{/* Right hero tile */}
<div className="tinted-block right-card">
  {/* blurred bg image */}
  <img src={heroImg} alt="" className="tinted-img" aria-hidden="true" />

  {/* caption (desktop only if you want) */}
  <div className="tinted-caption caption-desktop-only">
    <strong>Building fast, responsive UIs with React &amp; Next.js.</strong><br/>
    <span>SSR • code-splitting • a11y • Core Web Vitals 95+</span>
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
  I’m a Frontend Developer & Designer who loves turning Figma ideas into production-ready
  experiences. I work primarily with <strong>React</strong> and <strong>Next.js</strong>, pairing solid
  engineering (SSR, code-splitting, TypeScript, accessibility) with product thinking—clean
  layouts, purposeful motion, and reusable design systems. I care about Core Web Vitals,
  semantic HTML, and scalable CSS, and I’m comfortable collaborating end-to-end:
  wireframes → components → reviews → ship. Over the last 2+ years I’ve built responsive
  interfaces, optimized performance, and created component libraries that keep teams fast
  and consistent.
</p>


        <div className="intro-cta">
<a
  className="button ghost"
  href={resumeUrl}
  download="Anushka Dubey Resume 2 years.pdf"
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
              <li><a href="mailto:anushkaaddubeyy@gmail.com">anushkaaddubeyy@gmail.com</a></li>
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

/* --------------- SECTIONS --------------- */
/* ---------------- TECHNICAL SKILLS ---------------- */
function Skills() {
  return (
    <article className="panel skills-panel">
      <h3 className="panel-title">Technical skills</h3>

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
            <Tag>Tailwind</Tag>
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

        {/* NEW: AI tools for coding */}
        <div>
          <h4>AI tools for coding</h4>
          <div className="tags">
            <Tag>GitHub Copilot</Tag>
            <Tag>Copilot Chat</Tag>
            <Tag>ChatGPT</Tag>
            <Tag>Codeium</Tag>
            <Tag>Cursor</Tag>
            <Tag>Tabnine</Tag>
            <Tag>OpenAI API</Tag>
          </div>
        </div>

        <div className="tags wide">
          <Tag>SSR</Tag>
          <Tag>Code Splitting</Tag>
          <Tag>Lazy Loading</Tag>
          <Tag>Secure Coding</Tag>
        </div>
      </div>
    </article>
  );
}

/* ---------------- PROJECTS (from your live links) ---------------- */
function Projects() {
  const projects = [
    {
      title: "Nursery E-commerce UI",
      period: "2024",
      role: "Frontend",
      img: "/assets/Nursery-8cb9c0b0.gif", // put file in public/assets/
      alt: "Nursery E-commerce UI preview",
      brief:
        "Plant nursery landing with product cards, filters, and category navigation.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Nursery/"
    },
    {
      title: "Street Animal Care",
      period: "2024",
      role: "Frontend",
      img: "/assets/petcare-d5eb60b1.gif",
      alt: "Street Animal Care website preview",
      brief:
        "Donation/help portal for stray animals with clear CTA and user stories.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/pet-care/"
    },
    {
      title: "Travel Explorer Site",
      period: "2024",
      role: "Frontend",
      img: "/assets/travel-8cbeb3a1.gif",
      alt: "Travel Explorer site preview",
      brief:
        "Responsive travel agency site with destination cards, filters and CTAs.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://anushka7x.github.io/Travel/"
    },
    {
      title: "Bhalekar Consulting (Official)",
      period: "2025",
      role: "Frontend",
      img: "/assets/bhalekar-e3946baa.gif",
      alt: "Bhalekar Consulting website preview",
      brief:
        "Corporate website for a consulting firm using Bootstrap, JS & CSS.",
      stack: ["Bootstrap", "JavaScript", "CSS3"],
      link: "https://bhalekar.ai/"
    },
    {
      title: "Nimbus Marine (Singapore)",
      period: "2025",
      role: "Frontend",
      img: "/assets/Nimbus-bff71fe5.gif",
      alt: "Nimbus Marine site preview",
      brief:
        "Elegant site for a marine services firm with clean typography and sections.",
      stack: ["Bootstrap", "JavaScript", "CSS3"],
      link: null // add live URL when available
    },
    {
      title: "AusExport Portal (Ongoing)",
      period: "2025",
      role: "React / Next.js",
      img: "/assets/Crispe - Chris Phillips-c4a26e89.gif",
      alt: "AusExport portal preview",
      brief:
        "Business export system in React, Next.js & Tailwind for an Australian client.",
      stack: ["Next.js", "React", "Tailwind"],
      link: null,
      badge: " Currently Working"
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


/* ---------------- EXPERIENCE (more details) ---------------- */
function Experience() {
  return (
    <section className="experience">
      <article className="xp-card">
        <h3 className="xp-title">Experience</h3>
        <ul className="xp-list">
          <li>
            <div className="xp-year">2025—Present</div>
            <div className="xp-body">
              <div className="xp-role">Software Developer — Bhalekar.ai</div>
              <div className="xp-meta">React · Next.js · SSR · Redux Toolkit</div>
              <ul className="xp-bullets">
                <Bullet>Lead UI for Nimbus Marine hiring platform; shared component library built.</Bullet>
                <Bullet>Performance tuning (code splitting, image optimization, memoization) → ~40% faster TTI.</Bullet>
                <Bullet>Set up PR templates, lint + Prettier + CI checks to keep code quality consistent.</Bullet>
                <Bullet>Collaborated with design & PM; delivered fortnightly increments using Jira.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">2023—2025</div>
            <div className="xp-body">
              <div className="xp-role">Software Engineer — Expleo Group</div>
              <div className="xp-meta">React · Redux · Jenkins · REST</div>
              <ul className="xp-bullets">
                <Bullet>Developed responsive React modules with Redux Toolkit & RTK Query.</Bullet>
                <Bullet>Integrated REST APIs; improved error states and retry logic.</Bullet>
                <Bullet>Automated CI/CD with Jenkins; reduced deployment failures noticeably.</Bullet>
                <Bullet>Worked in Agile sprints; refined stories, wrote unit tests.</Bullet>
              </ul>
            </div>
          </li>

          <li>
            <div className="xp-year">2023—2023</div>
            <div className="xp-body">
              <div className="xp-role">Intern</div>
              <div className="xp-meta">Bootstrap · PHP · HTML · CSS · JavaScript </div>
              <ul className="xp-bullets">
                <Bullet>Delivered landing pages and dashboards for small businesses.</Bullet>
                <Bullet>Owned end-to-end: design handoff → deployment on Netlify/Vercel.</Bullet>
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
