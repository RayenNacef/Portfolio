import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">02 — Career</span>
          <h2 className="section__title">Experience</h2>
        </header>

        <div className="timeline">
          {experience.map((job, idx) => (
            <article className="timeline__item reveal" key={`${job.company}-${idx}`}>
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">
                  {job.company} · <span>{job.location}</span>
                </p>
                <ul className="timeline__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
