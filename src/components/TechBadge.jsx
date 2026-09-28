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
      JavaScript: 'JS',
      HTML: 'H',
      CSS: 'C',
      'HTML/CSS': 'HC',
      'REST APIs': 'API',
      'JWT Auth': 'JWT',
      Mongoose: 'MG',
      'Git/GitHub': 'Git',
      Git: 'Git',
      GitHub: 'GH',
      'VS Code': 'VS',
      PHP: 'PHP',
      FastAPI: 'FA',
      'Gemini API': 'AI',
      'Slack API': 'SL',
      HubSpot: 'HS',
      Docker: 'DK',
      'Dual-Stream CNN': 'CNN',
      'Grad-CAM': 'GC',
      LIME: 'LM',
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
