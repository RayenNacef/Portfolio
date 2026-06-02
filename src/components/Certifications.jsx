import { useEffect, useState } from 'react'
import { certifications } from '../data'
import { ExternalLink } from './Icons'

function CertModal({ cert, onClose }) {
  const [imgFailed, setImgFailed] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isPdf = /\.pdf($|\?)/i.test(cert.file || '')

  return (
    <div className="cert-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="cert-modal__media">
          {cert.file && !imgFailed ? (
            isPdf ? (
              <iframe
                className="cert-modal__pdf"
                src={`${cert.file}#view=FitH`}
                title={cert.name}
              />
            ) : (
              <img src={cert.file} alt={cert.name} onError={() => setImgFailed(true)} />
            )
          ) : (
            <div className="cert-modal__placeholder">
              <span className="cert-modal__placeholder-icon">✦</span>
              <p>Certificate file not added yet</p>
              <code>public/certs/</code>
            </div>
          )}
        </div>

        <div className="cert-modal__info">
          <h3>{cert.name}</h3>
          <p>
            {cert.issuer} · {cert.year}
          </p>
          <div className="cert-modal__actions">
            {cert.file && (
              <a className="cert-modal__open" href={cert.file} target="_blank" rel="noreferrer">
                Open full certificate ↗
              </a>
            )}
            {cert.link && (
              <a className="cert-modal__verify" href={cert.link} target="_blank" rel="noreferrer">
                <ExternalLink /> Verify credential
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">05 — Credentials</span>
          <h2 className="section__title">Certifications</h2>
          <p className="section__sub">Click any certificate to view it.</p>
        </header>

        <div className="certs__grid">
          {certifications.map((c) => (
            <button
              className="cert reveal"
              key={c.name}
              onClick={() => setSelected(c)}
              aria-label={`View ${c.name} certificate`}
            >
              <div className="cert__icon">✦</div>
              <div className="cert__body">
                <h3 className="cert__name">{c.name}</h3>
                <p className="cert__issuer">{c.issuer}</p>
              </div>
              <div className="cert__meta">
                <span className="cert__year">{c.year}</span>
                <span className="cert__view">View ↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
