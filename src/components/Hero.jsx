const focusAreas = ['MERN apps', 'Python workflows', 'REST APIs', 'AWS foundations']
const resumeHref = '/resume.pdf'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">Sabarish PV</h1>
          <p className="hero-lead">
            Final-year Information Technology student at College of Engineering Guindy,
            Anna University. I work across React, Node.js, Python, databases, and applied
            AI projects.
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
              <h2 className="hero-panel-title">Open to internships and developer roles</h2>
              <p className="hero-panel-copy">
                Focused on shipping practical web apps, learning fast, and contributing to
                strong engineering teams.
              </p>
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1zbuiywW40GvxUgseCl41wvaHQhzh3eY0/view?usp=sharing"
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
