import { useEffect, useState } from 'react'
import { profile, contacts, stats } from '../data'
import { Mail, Linkedin, Github, Download } from './Icons'

const roles = [
  'AI Engineer',
  'LLM & RAG Specialist',
  'ML Research Engineer',
  'MLOps Practitioner',
]

function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? speed / 2 : speed

    if (!deleting && text === word) {
      delay = pause
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
      return
    }

    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1),
      )
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="hero__avatar">
      <div className="hero__avatar-ring" />
      {failed ? (
        <div className="hero__avatar-fallback">RN</div>
      ) : (
        <img
          src={profile.avatar}
          alt={profile.name}
          onError={() => setFailed(true)}
          loading="eager"
        />
      )}
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="grid-overlay" />
      </div>

      <div className="hero__inner container">
        <div className="hero__text reveal">
          <p className="hero__eyebrow">Hello, I’m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            <span className="hero__role-typed">{typed}</span>
            <span className="hero__cursor">|</span>
          </h2>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={profile.resume} download>
              <Download /> Download Résumé
            </a>
            <a
              className="btn btn--ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in touch
            </a>
          </div>

          <div className="hero__socials">
            <a href={`mailto:${contacts.email}`} aria-label="Email" title={contacts.email}>
              <Mail />
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin />
            </a>
            <a href={contacts.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <Github />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <Avatar />
        </div>
      </div>

      <div className="hero__stats container reveal">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
