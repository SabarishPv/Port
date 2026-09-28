const education = [
  {
    title: 'B.Tech Information Technology',
    place: 'College of Engineering Guindy, Anna University, Chennai',
    period: '2022 - 2026',
    grade: 'CGPA: 7.0 / 10',
  },
  {
    title: 'HSC & SSLC',
    place: 'Sri Venkateshwara Vidhyalayaa Higher Secondary School',
    period: '2019 - 2022',
    grade: 'HSC: 89% | SSLC: 90%',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-heading">
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article key={item.title} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              {item.period ? <p className="timeline-meta">{item.period}</p> : null}
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              {item.grade ? <p className="timeline-note">{item.grade}</p> : null}
              {item.note ? <p className="timeline-note">{item.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
