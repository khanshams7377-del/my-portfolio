import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Binary,
  BookOpen,
  Braces,
  Code2,
  GitBranch,
  Menu,
  PanelsTopLeft,
  Terminal,
  Workflow,
  X,
} from 'lucide-react'
import './App.css'

const profileUrl = 'https://github.com/khanshams7377-del'

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

const skillGroups = [
  {
    title: 'Programming',
    icon: Braces,
    skills: ['C', 'C++', 'Python', 'Java'],
  },
  {
    title: 'Web development',
    icon: PanelsTopLeft,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    title: 'Problem solving',
    icon: Binary,
    skills: ['Data Structures', 'Algorithms', 'LeetCode'],
  },
]

function SectionHeading({ eyebrow, title, number, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{number}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-aside">{children}</div>}
    </div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell page-width flex items-center justify-between" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Md Shams Ahmad Khan, home">
          <span className="wordmark-mark">SK</span>
          <span>Shams Khan</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(([label, section]) => (
            <a href={`#${section}`} key={section} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-github" href={profileUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-layout page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />CSE STUDENT <span className="eyebrow-divider">/</span> BENGALURU</p>
          <h1>Md Shams<br /><span>Ahmad Khan</span></h1>
          <p className="hero-role">BTech Computer Science Engineering Student</p>
          <p className="hero-intro">
            I’m a Computer Science Engineering student focused on building practical programming skills, developing projects, solving problems, and documenting my learning journey through GitHub.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="button button-quiet" href={profileUrl} target="_blank" rel="noreferrer"><GitBranch size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} aria-hidden="true" /> Scroll to explore</a>
        </div>
        <div className="hero-art" aria-label="Decorative code editor showing a JavaScript introduction" role="img">
          <div className="editor-window">
            <div className="editor-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span><Code2 size={13} aria-hidden="true" /> about.js</span>
              <span className="editor-status">JavaScript</span>
            </div>
            <div className="editor-body">
              <div className="code-line"><span className="line-number">01</span><span><b>const</b> developer = {'{'}</span></div>
              <div className="code-line"><span className="line-number">02</span><span className="indent"><em>name</em>: <strong>'Shams Khan'</strong>,</span></div>
              <div className="code-line"><span className="line-number">03</span><span className="indent"><em>studying</em>: <strong>'Computer Science'</strong>,</span></div>
              <div className="code-line"><span className="line-number">04</span><span className="indent"><em>learning</em>: [</span></div>
              <div className="code-line"><span className="line-number">05</span><span className="indent deeper"><strong>'programming'</strong>,</span></div>
              <div className="code-line"><span className="line-number">06</span><span className="indent deeper"><strong>'web development'</strong>,</span></div>
              <div className="code-line"><span className="line-number">07</span><span className="indent deeper"><strong>'problem solving'</strong>,</span></div>
              <div className="code-line"><span className="line-number">08</span><span className="indent">],</span></div>
              <div className="code-line"><span className="line-number">09</span><span className="indent"><em>buildsWith</em>: <strong>'curiosity'</strong></span></div>
              <div className="code-line"><span className="line-number">10</span><span>{'}'}</span></div>
              <div className="code-line code-comment"><span className="line-number">11</span><span>// learning by building, one step at a time</span></div>
              <div className="editor-cursor" aria-hidden="true" />
            </div>
            <div className="editor-footer"><span><span className="status-dot" /> Ready to learn</span><span>UTF-8&nbsp; · &nbsp;LF</span></div>
          </div>
          <div className="art-note"><span>01</span><span>A work in progress,<br />by design.</span><ArrowDownRight size={20} aria-hidden="true" /></div>
          <div className="hero-stamp" aria-hidden="true"><Terminal size={17} /><span>LEARN<br />BUILD<br />REPEAT</span></div>
        </div>
      </div>
      <div className="hero-index page-width" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>01 — 08</span></div>
    </section>
  )
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="page-width">
        <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Learning by making." />
        <div className="about-grid">
          <p className="about-lead">I’m a CSE student at REVA University, Bengaluru, learning how ideas become useful software.</p>
          <div className="about-detail">
            <p>I enjoy working through programming fundamentals, exploring web development, and solving problems one step at a time. Building small projects helps me connect concepts with practice.</p>
            <p>I’m developing my skills in Git and GitHub along the way, using them to keep my work organized and make my learning visible. There’s always something new to improve, and that’s part of the process.</p>
            <a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">See what I’m working on <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="about-principles" aria-label="Current learning approach">
            <div><span>01</span><Code2 size={18} aria-hidden="true" /><p>Learn by building</p></div>
            <div><span>02</span><Binary size={18} aria-hidden="true" /><p>Practice problem solving</p></div>
            <div><span>03</span><Workflow size={18} aria-hidden="true" /><p>Improve with each project</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="page-width">
        <SectionHeading number="02" eyebrow="TOOLS & TECHNOLOGIES" title="A growing toolkit.">
          <p>Skills I’m learning and using in coursework, practice, and personal projects.</p>
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <article className="skill-group" key={title}>
              <div className="skill-group-top"><span className="skill-icon"><Icon size={19} aria-hidden="true" /></span><span className="skill-index">0{index + 1}</span></div>
              <h3>{title}</h3>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    number: '01',
    category: 'C PROGRAMMING',
    title: 'Line Editor',
    description: 'A command-line line editor written in C. A practical exercise in handling text input and organizing lines in a simple editing workflow.',
    details: ['Insert lines', 'Delete lines', 'Display lines'],
    technologies: ['C', 'Arrays', 'Strings', 'Functions'],
    href: 'https://github.com/khanshams7377-del/Line-Editor',
    prominent: true,
    icon: Terminal,
  },
  {
    number: '02',
    category: 'PROBLEM-SOLVING PRACTICE',
    title: 'LeetCode Solutions',
    description: 'A GitHub repository documenting my LeetCode practice and problem-solving work as I learn data structures and algorithms.',
    details: [],
    technologies: ['LeetCode', 'Problem solving', 'GitHub'],
    href: 'https://github.com/khanshams7377-del/Leetcode-Solutions',
    prominent: true,
    icon: Binary,
  },
]

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className={`project-card${project.prominent ? ' project-prominent' : ''}`}>
      <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><Icon size={22} aria-hidden="true" /></div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {project.details.length > 0 && <ul className="project-details">{project.details.map((detail) => <li key={detail}><span />{detail}</li>)}</ul>}
      <div className="project-tags" aria-label="Technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} aria-hidden="true" /></a>
    </article>
  )
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="page-width">
        <SectionHeading number="03" eyebrow="SELECTED WORK & PRACTICE" title="Built while learning.">
          <p>Small, hands-on work that helps me put programming concepts into practice.</p>
        </SectionHeading>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          <article className="workflow-project">
            <div className="workflow-icon"><Workflow size={22} aria-hidden="true" /></div>
            <div className="workflow-copy"><p className="project-category">LEARNING & WORKFLOW</p><h3>GitHub-Integrated Portfolio Building</h3><p>A learning journey connecting Git, GitHub, collaborative coding, LinkedIn, LeetCode, and development projects. The focus is on building good habits and documenting progress, not a commercial product.</p></div>
            <div className="workflow-action"><span>Ongoing learning</span><a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Explore Shams Khan’s GitHub profile"><ArrowUpRight size={18} /></a></div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="content-section education-section" id="education">
      <div className="page-width">
        <SectionHeading number="04" eyebrow="EDUCATION" title="Where I’m learning." />
        <article className="education-row">
          <div className="education-icon"><BookOpen size={20} aria-hidden="true" /></div>
          <div className="education-copy"><p className="project-category">UNDERGRADUATE STUDIES</p><h3>BTech — Computer Science Engineering</h3><p>REVA University <span>·</span> Bengaluru</p></div>
          <span className="education-note">Currently learning</span>
        </article>
      </div>
    </section>
  )
}

function ProofOfWork() {
  return (
    <section className="content-section proof-section" id="proof-of-work">
      <div className="page-width proof-layout">
        <div className="proof-intro">
          <SectionHeading number="05" eyebrow="PROOF OF WORK" title="Follow the process." />
          <p>Explore my coding practice and development work. I use these spaces to document what I’m learning and building.</p>
        </div>
        <div className="proof-links">
          <a href={profileUrl} target="_blank" rel="noreferrer"><span className="proof-brand"><GitBranch size={21} aria-hidden="true" /></span><span><small>CODE & PROJECTS</small><strong>GitHub</strong><em>Browse my repositories</em></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="https://leetcode.com/" target="_blank" rel="noreferrer"><span className="proof-brand proof-leetcode"><Binary size={21} aria-hidden="true" /></span><span><small>CODING PRACTICE</small><strong>LeetCode</strong><em>Visit the LeetCode platform</em></span><ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-width contact-layout">
        <div><p className="eyebrow"><span>06</span> GET IN TOUCH</p><h2>Let’s connect<br /><span>through the work.</span></h2><p className="contact-copy">For now, GitHub is the best place to find me and follow what I’m building.</p></div>
        <a className="contact-link" href={profileUrl} target="_blank" rel="noreferrer"><span><GitBranch size={19} aria-hidden="true" /> github.com/khanshams7377-del</span><ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner"><a className="wordmark" href="#home"><span className="wordmark-mark">SK</span><span>Shams Khan</span></a><p>Learning, building, and getting better.</p><a className="back-to-top" href="#home">Back to top <ArrowRight size={14} aria-hidden="true" /></a></div>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ProofOfWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
