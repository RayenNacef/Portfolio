import { contacts, profile } from '../data'
import { Mail, Linkedin, Github } from './Icons'

export default function Footer() {
  const year = 2026 // update as needed
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{profile.name}</span>
        <div className="footer__socials">
          <a href={`mailto:${contacts.email}`} aria-label="Email"><Mail /></a>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={contacts.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        </div>
        <span className="footer__copy">© {year} · Built with React + Vite</span>
      </div>
    </footer>
  )
}
