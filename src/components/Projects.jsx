import { useMemo, useState } from 'react'
import { projects } from '../data'
import { Github } from './Icons'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">03 — Work</span>
          <h2 className="section__title">Selected Projects</h2>
        </header>

        <div className="projects__filters reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* `key` includes the filter so cards remount and replay the entrance
            animation on every filter change — no IntersectionObserver needed. */}
        <div className="projects__grid">
          {visible.map((p, i) => (
            <article
              className="project"
              key={`${filter}-${p.name}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="project__top">
                <span className="project__badge">{p.category}</span>
                <span className="project__period">{p.period}</span>
              </div>

              <h3 className="project__name">{p.name}</h3>
              <p className="project__field">{p.field}</p>

              <ul className="project__points">
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>

              <div className="project__keywords">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                className="project__repo"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${p.name} repository on GitHub`}
              >
                <Github /> View Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
