const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'JWT', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Python and AI',
    items: ['Python', 'PyTorch', 'NumPy'],
  },
  {
    title: 'Tools',
    items: ['AWS', 'Git/GitHub', 'VS Code', 'Scikit-learn'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-heading fade-in">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">What I work with.</h2>
      </div>

      <div className="expertise-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="expertise-card fade-in">
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
