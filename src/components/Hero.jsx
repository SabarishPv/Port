const focusAreas = ['Full-stack web apps', 'REST APIs', 'LLM tool-calling systems', 'FastAPI backends']
const resumeHref = '/resume.pdf'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">Sabarish PV</h1>
          <p className="hero-lead">
            B.Tech Information Technology graduate from College of Engineering Guindy,
            Anna University. I build full-stack applications, RESTful APIs, and LLM-based
            systems with Python, JavaScript, and SQL/NoSQL databases.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-pills">
            {focusAreas.map((item) => (
              <span key={item} className="hero-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-head">
            <div>
              <p className="hero-panel-kicker">Based in Chennai, India</p>
              <h2 className="hero-panel-title">Seeking backend, full-stack, or AI engineering roles</h2>
              <p className="hero-panel-copy">
                Focused on clean architecture, thorough testing, and shipping applications
                that hold up in production.
              </p>
            </div>
          </div>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hero-resume-link"
          >
            View Resume
          </a>

          <div className="hero-links">
            <a
              href="https://github.com/SabarishPv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hero-link-button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sabarish-pv-2bbb29277/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hero-link-button"
            >
              LinkedIn
            </a>
            <a href="mailto:sabarishpv1112@gmail.com" className="btn-secondary hero-link-button">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
