const certifications = [
  { title: 'Data Analysis and Tableau', place: 'Coding Ninjas' },
  { title: 'Full Stack Web Development', place: 'Coding Ninjas' },
]

const activities = [
  {
    title: 'Coordinator, NSO',
    place: 'College of Engineering Guindy',
    note: 'Organized and led student activities and initiatives.',
  },
  {
    title: 'Coordinator and Performer, Stunners Variety Team',
    place: 'College of Engineering Guindy',
  },
]

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="section-heading">
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">Certifications and activities.</h2>
      </div>

      <div className="credentials-grid">
        <article className="info-card">
          <h3>Certifications &amp; Training</h3>
          <ul className="plain-list">
            {certifications.map((item) => (
              <li key={item.title}>
                {item.title}, {item.place}
              </li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <h3>Leadership &amp; Activities</h3>
          <ul className="plain-list">
            {activities.map((item) => (
              <li key={item.title}>
                {item.title}, {item.place}
                {item.note ? `. ${item.note}` : ''}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
