import { useState } from 'react'
import { TechBadge } from './TechBadge'

const projects = [
  {
    title: 'MiniPulse',
    category: 'AI Slack Assistant for CRM Insights',
    summary:
      'A two-service Slack bot that answers natural-language questions about HubSpot CRM data through a Gemini tool-calling loop, so a rep can ask a question in Slack instead of digging through the CRM UI.',
    features: [
      'Two-service Slack bot that answers natural-language HubSpot CRM queries through a Gemini tool-calling loop',
      'Six read-only CRM tools behind a single HubSpot client',
      'HMAC-SHA256 Slack request verification and deduplication on every incoming event',
      'Guardrails, per-thread context, JSON logs with request tracing, 39 mocked tests, and a Dockerized deployment',
    ],
    technologies: ['Python', 'FastAPI', 'Gemini API', 'Slack API', 'HubSpot', 'Docker'],
    highlight: 'Gemini tool-calling loop over a live CRM',
    github: 'https://github.com/SabarishPv',
  },
  {
    title: 'RentEase',
    category: 'Full Stack Web App',
    summary:
      'A rental management platform that gives owners and tenants separate authenticated views for billing, payments, and complaints, with the data staying in sync across both sides in real time.',
    features: [
      'Role-based owner and tenant authentication with JWT, supporting multiple user flows and real-time data updates',
      'RESTful APIs for tenants, bills, payments, complaints, and notifications',
      'MongoDB schemas built with Mongoose for structured data handling across multiple modules',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Mongoose'],
    highlight: 'MERN stack app with multi-role workflows',
    github: 'https://github.com/SabarishPv/RentEaseMern',
  },
  {
    title: 'MoneyMate',
    category: 'Expense Tracking Web Application',
    summary:
      'A full-stack app for tracking and splitting group expenses, with a responsive dashboard that visualizes balances and history so nobody has to work out who owes what by hand.',
    features: [
      'Full-stack web application to track and split group expenses with automated calculations',
      'Responsive dashboard using HTML, CSS, and JavaScript to visualize expense splits and balances across devices',
      'User authentication, group management, and transaction handling using PHP and PostgreSQL',
      'Optimized SQL queries (SELECT, INSERT, UPDATE, DELETE) with joins and aggregations to generate user balance summaries',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PostgreSQL'],
    highlight: 'Real-world shared expense workflows',
    github: 'https://github.com/SabarishPv/MoneyMate',
  },
  {
    title: 'CoralCare',
    category: 'Coral Reef Health Classification using Deep Learning',
    summary:
      'A dual-stream CNN framework that classifies coral images as Healthy, Bleached, or Dead, built to support faster reef health surveys than manual visual inspection.',
    features: [
      'Dual-stream CNN-based framework to classify coral images into Healthy, Bleached, and Dead categories',
      'Preprocessing and augmentation techniques including normalization, resizing, and noise reduction',
      'Evaluated model performance using precision, recall, F1-score, and confusion matrix',
      'Applied Grad-CAM and LIME for explainable AI visualizations of model predictions',
    ],
    technologies: ['Python', 'Dual-Stream CNN', 'Grad-CAM', 'LIME'],
    highlight: 'Dual-stream CNN for coral reef health classification',
    github: 'https://github.com/SabarishPv',
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)
  const total = projects.length

  const goNext = () => setIndex((current) => (current + 1) % total)
  const goPrev = () => setIndex((current) => (current - 1 + total) % total)

  return (
    <section id="projects">
      <div className="section-heading">
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-title">Selected projects that show how I build.</h2>
      </div>

      <div className="project-viewport">
        <div
          className="project-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="project-card"
              aria-hidden={i !== index}
              style={{ pointerEvents: i === index ? 'auto' : 'none' }}
            >
              <div className="project-card-columns">
                <div className="project-card-col">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <span className="project-highlight">{project.highlight}</span>
                </div>

                <div className="project-card-col">
                  <ul className="project-points">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-card-bottom">
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  tabIndex={i === index ? 0 : -1}
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-slider-controls">
        <button type="button" className="slider-nav-btn" onClick={goPrev} aria-label="Previous project">
          Prev
        </button>

        <div className="slider-dots">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              className={`slider-dot${i === index ? ' active' : ''}`}
              aria-label={`Show ${project.title}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button type="button" className="slider-nav-btn" onClick={goNext} aria-label="Next project">
          Next
        </button>
      </div>
    </section>
  )
}
