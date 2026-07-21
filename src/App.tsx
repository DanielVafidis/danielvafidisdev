import { useState } from 'react'

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

const work = [
  {
    index: '001',
    title: 'Neterium Client Portal',
    description:
      'Production frontend for a RegTech AML/sanctions screening platform used by banks and fintechs. Owned the client portal — configuration, live screening analytics, and operational views that make high-throughput watchlist infrastructure legible to compliance and ops teams. Built with the security and access-control instincts regulated environments demand.',
    tags: ['React', 'TypeScript', 'RegTech', 'Application Security'],
  },
  {
    index: '002',
    title: 'Japanese Learning Platform',
    description:
      'End-to-end product build of an AI-native language learning platform on a modern TypeScript stack. Orchestrated multi-agent development loops for curriculum tooling, UX, and feature delivery — humans set direction and quality bars; agents shipped the implementation surface area at product speed.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Agentic AI'],
  },
  {
    index: '003',
    title: 'Client Agentic Workflows',
    description:
      'Designed and shipped custom agentic workflows that absorb repetitive client operations — research, drafting, triage, and handoff. Tool-using agents wired for real process steps, including MCP where tools need a clean contract. Reduced manual cycle time so teams spend attention on judgment calls instead of process choreography.',
    tags: ['MCP', 'Agentic AI', 'Node.js', 'Automation'],
  },
]

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'MCP',
  'Agentic AI',
  'GraphQL',
  'Directus',
  'Keycloak',
  'Application Security',
]

function App() {
  const [theme, setTheme] = useState<Theme>(readTheme)
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  const toggleTheme = () => {
    localStorage.setItem('theme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <div className="app">
      <nav className="nav" aria-label="Primary">
        <span className="nav-brand">DANIEL VAFIDIS</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
          >
            {nextTheme.toUpperCase()}
          </button>
        </div>
      </nav>

      <header className="header">
        <p className="label">Product Engineer · AI-Native Systems</p>
        <h1 className="name">Daniel Vafidis</h1>
        <p className="tagline">
          I build production AI products and the agentic workflows that keep them
          shipping — clear direction for humans, high leverage for machines.
        </p>
        <a className="cta" href="#contact">
          → Contact
        </a>
      </header>

      <main className="main">
        <section className="section" id="about">
          <p className="label">01 — About</p>
          <p className="prose">
            Product engineer focused on <strong>AI-native systems</strong> —
            products that treat models and agents as first-class infrastructure,
            not bolt-ons. I take vague product intent and turn it into
            shippable interfaces, workflows, and feedback loops.
          </p>
          <p className="prose">
            Recent work spans regulated fintech UX, education products, and
            client-facing automation. Strengths: front-end systems that stay
            coherent under complexity, agentic process design, and tight
            iterate-ship cycles — full-stack when the product needs it (React /
            Next, Node, GraphQL, Directus, Keycloak), with enough application
            security instinct that regulated environments don&apos;t scare me.
            Functional first, refined until it holds up in production.
          </p>
          <p className="prose">
            Languages: French and Greek (native), English (fluent), Italian and
            Dutch (some), Japanese (in progress).
          </p>
          <div className="card-tags focus-tags">
            {skills.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <p className="label">02 — Selected Work</p>

          {work.map((item) => (
            <article className="card" key={item.index}>
              <div className="card-header">
                <span className="card-index">{item.index}</span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-description">{item.description}</p>
              <div className="card-tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section contact" id="contact">
          <p className="label">03 — Contact</p>
          <p className="prose contact-intro">
            Open to remote or hybrid full-time product engineering roles, AI
            systems work, and collaborations where agents and humans need a
            clear operating model. Happy to talk scope, constraints, and
            timelines. Based in Belgium (CET) — async-friendly, deep-work
            oriented.
          </p>
          <div className="contact-links">
            <a href="mailto:daniel.vafidis@gmail.com" className="text-link">
              → daniel.vafidis@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="copyright">© {new Date().getFullYear()} Daniel Vafidis</p>
        <a href="mailto:daniel.vafidis@gmail.com" className="footer-link">
          Email
        </a>
      </footer>
    </div>
  )
}

export default App
