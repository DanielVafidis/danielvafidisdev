import './App.scss'

import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="app">
      <nav className="nav" aria-label="Primary">
        <span className="nav-brand">DANIEL VAFIDIS</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
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
              <h3 className="card-title">Project Alpha</h3>
            </div>
            <p className="card-description">
              A next-generation platform for collaborative design and development.
            </p>
            <div className="card-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Vite</span>
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <span className="card-index">002</span>
              <h3 className="card-title">Project Beta</h3>
            </div>
            <p className="card-description">
              Real-time analytics dashboard with data visualizations and insights.
            </p>
            <div className="card-tags">
              <span className="tag">D3.js</span>
              <span className="tag">WebSocket</span>
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <span className="card-index">003</span>
              <h3 className="card-title">Project Gamma</h3>
            </div>
            <p className="card-description">
              Mobile-first web application with offline capabilities and sync.
            </p>
            <div className="card-tags">
              <span className="tag">PWA</span>
              <span className="tag">Service Workers</span>
            </div>
          </article>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">03 — Contact</p>
          <div className="contact-header">
            <p className="contact-intro">
              Got an interesting project? I'm open to discussing new opportunities,
              creative ideas, or ways to collaborate.
            </p>
          </div>

          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                → Send Message
              </button>
            </form>

            <div className="contact-alternative">
              <p className="alternative-text">Prefer email?</p>
              <a href="mailto:hello@example.com" className="text-link">
                → hello@example.com
              </a>

              <div className="social-links">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} Daniel Vafidis
          </p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="mailto:hello@example.com" className="footer-link">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
