const strengths = [
  'Full-stack development across React, Node.js/Express, FastAPI, and PHP',
  'Python and LLM tool-calling systems, including a Gemini-backed Slack CRM assistant',
  'RESTful API design and relational/NoSQL schema design with PostgreSQL and MongoDB',
  'Focus on clean architecture and thorough testing rather than quick, untested code',
]

const highlights = [
  { value: 'CEG', label: 'Anna University' },
  { value: '7.0', label: 'CGPA / 10' },
  { value: 'NSO', label: 'Coordinator' },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-layout">
        <div className="about-card">
          <h3>About Me</h3>
          <p className="section-copy">
            I&apos;m a B.Tech Information Technology graduate with hands-on experience building
            full-stack applications, RESTful APIs, and LLM-based systems. I focus on clean
            architecture and thorough testing, and I&apos;m looking for backend, full-stack,
            or AI engineering roles.
          </p>

          <ul className="about-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="highlight-row">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <div className="highlight-value">{item.value}</div>
              <div className="highlight-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
