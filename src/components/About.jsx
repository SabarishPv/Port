const strengths = [
  'End-to-end MERN development from UI to API integration',
  'Comfortable with Python and deep learning workflows for applied AI projects',
  'Experience leading student initiatives and collaborating in teams',
  'Strong interest in practical product building and scalable application design',
]

const highlights = [
  { value: 'CEG', label: 'Anna University' },
  { value: 'NSO', label: 'Coordinator role' },
  { value: 'AWS', label: 'Academy graduate' },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-layout">
        <div className="about-card fade-in">
          <h3>About Me</h3>
          <p className="section-copy">
            I&apos;m a final-year IT student with a strong interest in full stack development,
            backend systems, and AI-assisted problem solving. I like projects that combine
            thoughtful UX with real functionality.
          </p>

          <ul className="about-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="highlight-row fade-in">
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
