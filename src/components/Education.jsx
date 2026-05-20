const education = [
  {
    title: 'B.Tech Information Technology',
    place: 'College of Engineering Guindy, Anna University',
    period: '2022 - 2026',
  },
  {
    title: 'Higher Secondary Certificate',
    place: 'Sri Venkateshwara Vidhyalayaa Higher Secondary School',
    period: '2021 - 2022',
    grade: '89%',
  },
  {
    title: 'Secondary School Leaving Certificate',
    place: 'Sri Venkateshwara Vidhyalayaa Higher Secondary School',
    grade: '90%',
    note: 'Completed foundational schooling with consistent academic performance.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-heading fade-in">
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline fade-in">
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
