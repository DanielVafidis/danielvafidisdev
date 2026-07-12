import { useEffect, useState } from 'react'
import './App.scss'
import { getResolvedTheme, setTheme, type Theme } from './theme'

function App() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(() => getResolvedTheme())

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const onSystemThemeChange = () => setResolvedTheme(getResolvedTheme())

    mediaQuery.addEventListener('change', onSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', onSystemThemeChange)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    setResolvedTheme(nextTheme)
  }

  const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark'

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
        <p className="header-label">Product Engineer & Creative Technologist</p>
        <h1 className="name">Daniel Vafidis</h1>
        <p className="tagline">
          Steer the vision. Agents handle the grind.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          → Contact
        </button>
      </header>

      <main className="main">
        <section className="about" id="about">
          <p className="section-label">01 — About</p>
          <div className="about-content">
            <div className="bio">
              <p className="bio-text">
                Hi, I'm Daniel. Product engineer and creative technologist — I build
                <strong> AI-native systems</strong> and the <strong>agentic workflows</strong> that
                run them. Humans set direction and quality bars; agents research, implement,
                and iterate. Functional first, refined second.
              </p>
              <p className="bio-text">
                I believe in tight feedback loops, composable tooling, and workflows that
                get faster every iteration. When I'm not building, I'm testing new models
                and documenting what actually works.
              </p>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <p className="section-label">02 — Recent Work</p>

          <article className="card">
            <div className="card-header">
              <span className="card-index">001</span>
              <h3 className="card-title">Neterium Client Portal</h3>
            </div>
            <p className="card-description">
              Frontend for the client portal at a RegTech screening company —
              the cockpit where banks and fintechs tune their AML/sanctions stack
              and read live screening stats. Settings, analytics, operational clarity
              for watchlist infrastructure that runs at API speed.
            </p>
            <div className="card-tags">
              <span className="tag">Client portal</span>
              <span className="tag">Dashboard</span>
              <span className="tag">RegTech</span>
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <span className="card-index">002</span>
              <h3 className="card-title">Japanese Learning Platform</h3>
            </div>
            <p className="card-description">
              AI-driven build of a Japanese learning site — agents shipped the grind,
              humans steered curriculum and UX. From zero to shippable via tight agentic loops.
            </p>
            <div className="card-tags">
              <span className="tag">AI-driven development</span>
              <span className="tag">Agents</span>
              <span className="tag">EdTech</span>
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <span className="card-index">003</span>
              <h3 className="card-title">Client Agentic Workflows</h3>
            </div>
            <p className="card-description">
              Custom AI workflows that eat redundant client work. Automate the busywork,
              free the humans for decisions that matter.
            </p>
            <div className="card-tags">
              <span className="tag">Agentic workflows</span>
              <span className="tag">Automation</span>
              <span className="tag">AI ops</span>
            </div>
          </article>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">03 — Contact</p>
          <p className="contact-intro">
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
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} Daniel Vafidis
          </p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="mailto:hello@example.com" className="footer-link">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
