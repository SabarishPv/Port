export function TechBadge({ tech }) {
  const getTechIcon = (techName) => {
    const iconMap = {
      'React.js': 'R',
      'Node.js': 'N',
      'Express.js': 'E',
      MongoDB: 'M',
      PostgreSQL: 'P',
      MySQL: 'S',
      Python: 'Py',
      PyTorch: 'PT',
      JavaScript: 'JS',
      'HTML/CSS': 'HC',
      'REST APIs': 'API',
      'JWT Auth': 'JWT',
      Mongoose: 'MG',
      AWS: 'AWS',
      'Git/GitHub': 'Git',
      'VS Code': 'VS',
      NumPy: 'NP',
      'Scikit-learn': 'SK',
      CNN: 'CNN',
      PHP: 'PHP',
    }

    return iconMap[techName] || techName.slice(0, 2).toUpperCase()
  }

  return (
    <span className="tech-badge">
      <span className="tech-icon">{getTechIcon(tech)}</span>
      <span className="tech-name">{tech}</span>
    </span>
  )
}
