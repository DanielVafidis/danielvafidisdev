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
      'Frontend for the client portal at a RegTech screening company — the cockpit where banks and fintechs tune their AML/sanctions stack and read live screening stats. Settings, analytics, operational clarity for watchlist infrastructure that runs at API speed.',
    tags: ['Client portal', 'Dashboard', 'RegTech'],
  },
  {
    index: '002',
    title: 'Japanese Learning Platform',
    description:
      'AI-driven build of a Japanese learning site — agents shipped the grind, humans steered curriculum and UX. From zero to shippable via tight agentic loops.',
    tags: ['AI-driven development', 'Agents', 'EdTech'],
  },
  {
    index: '003',
    title: 'Client Agentic Workflows',
    description:
      'Custom AI workflows that eat redundant client work. Automate the busywork, free the humans for decisions that matter.',
    tags: ['Agentic workflows', 'Automation', 'AI ops'],
  },
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
        <p className="label">Product Engineer & Creative Technologist</p>
        <h1 className="name">Daniel Vafidis</h1>
        <p className="tagline">Steer the vision. Agents handle the grind.</p>
        <a className="cta" href="#contact">
          → Contact
        </a>
      </header>

      <main className="main">
        <section className="section" id="about">
          <p className="label">01 — About</p>
          <p className="prose">
            Hi, I'm Daniel. Product engineer and creative technologist — I build
            <strong> AI-native systems</strong> and the <strong>agentic workflows</strong> that
            run them. Humans set direction and quality bars; agents research, implement,
            and iterate. Functional first, refined second.
          </p>
          <p className="prose">
            I believe in tight feedback loops, composable tooling, and workflows that
            get faster every iteration. When I'm not building, I'm testing new models
            and documenting what actually works.
          </p>
        </section>

        <section className="section" id="work">
          <p className="label">02 — Recent Work</p>

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
            Got an interesting project? I'm open to discussing new opportunities,
            creative ideas, or ways to collaborate.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com" className="text-link">
              → Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              → LinkedIn
            </a>
            <a
              href="https://twitter.com/yourhandle"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              → Twitter
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="copyright">© {new Date().getFullYear()} Daniel Vafidis</p>
        <a href="mailto:hello@example.com" className="footer-link">
          Email
        </a>
      </footer>
    </div>
  )
}

export default App
