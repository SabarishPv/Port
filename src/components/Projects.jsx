import { TechBadge } from './TechBadge'

const projects = [
  {
    title: 'RentEase',
    category: 'Full Stack Web App',
    summary:
      'Rental management platform for owners and tenants with billing, payments, complaints, and role-based access.',
    features: [
      'Owner and tenant authentication flows',
      'REST APIs for bills, complaints, and payments',
      'MongoDB schema design with Mongoose',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Mongoose'],
    highlight: 'MERN stack app with multi-role workflows',
    github: 'https://github.com/SabarishPv/RentEaseMern',
  },
  {
    title: 'MoneyMate',
    category: 'Finance Utility',
    summary:
      'Expense tracking and group split calculator that helps users manage shared costs with clear history and reports.',
    features: [
      'Expense splitting logic for groups',
      'Transaction history and dashboard views',
      'PostgreSQL-backed persistence with PHP backend',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'PostgreSQL'],
    highlight: 'Focused on real-world shared expense workflows',
    github: 'https://github.com/SabarishPv/MoneyMate',
  },
  {
    title: 'CoralCare',
    category: 'AI and Deep Learning',
    summary:
      'Multi-class coral reef health classification using deep learning to identify Healthy, Bleached, and Dead coral images.',
    features: [
      'Developed a dual-stream CNN-based framework to classify coral images into Healthy, Bleached and Dead categories',
      'Performed preprocessing and augmentation techniques including normalization, resizing, and noise reduction',
      'Evaluated model performance using precision, recall, F1-score, confusion matrix and explainable AI visualizations',
    ],
    technologies: ['Python', 'CNN', 'Deep Learning', 'Explainable AI', 'Scikit-learn'],
    highlight: 'Dual-stream CNN for coral reef health classification',
    github: 'https://github.com/SabarishPv',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-heading fade-in">
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-title">Selected projects that show how I build.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card fade-in">
            <p className="project-category">{project.category}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-summary">{project.summary}</p>

            <ul className="project-points">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>

            <div className="project-footer">
              <span className="project-highlight">{project.highlight}</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
