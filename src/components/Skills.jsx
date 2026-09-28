const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React.js', 'Responsive Web Design'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express.js', 'PHP'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL'],
  },
  {
    title: 'AI / APIs',
    items: ['Tool Calling', 'REST APIs'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Claude Code', 'Codex'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">What I work with.</h2>
      </div>

      <div className="expertise-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="expertise-card">
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
