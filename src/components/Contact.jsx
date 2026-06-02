import { useState } from 'react'
import { contacts, profile } from '../data'
import { Mail, Linkedin, Github, Phone, Download } from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">06 — Say hi</span>
          <h2 className="section__title">Let’s work together</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <p className="contact__lead">
              I’m open to AI / ML engineering roles and collaborations. The quickest way
              to reach me is email — or use the form and it’ll open your mail client.
            </p>

            <button className="contact__email" onClick={copyEmail} title="Click to copy">
              <Mail /> <span>{contacts.email}</span>
              <em className="contact__copy">{copied ? 'Copied ✓' : 'Copy'}</em>
            </button>

            <a className="contact__row" href={`tel:${contacts.phone.replace(/\s/g, '')}`}>
              <Phone /> <span>{contacts.phone}</span>
            </a>

            <div className="contact__socials">
              <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="contact__social">
                <Linkedin /> LinkedIn
              </a>
              <a href={contacts.github} target="_blank" rel="noreferrer" className="contact__social">
                <Github /> GitHub
              </a>
              <a href={profile.resume} download className="contact__social">
                <Download /> Résumé
              </a>
            </div>
          </div>

          <form className="contact__form reveal" onSubmit={submit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Tell me about the opportunity…"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary">
              <Mail /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
