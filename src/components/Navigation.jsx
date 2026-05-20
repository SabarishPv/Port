const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation({ scrolled }) {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-brand" aria-label="Go to top">
        <span className="brand-mark">SP</span>
        <span className="brand-copy">Sabarish PV</span>
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Let&apos;s Talk
      </a>
    </nav>
  )
}
