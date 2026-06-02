import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">04 — Toolbox</span>
          <h2 className="section__title">Technical Skills</h2>
        </header>

        <div className="skills__grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.group}>
              <h3 className="skill-card__title">{s.group}</h3>
              <div className="tag-row">
                {s.items.map((it) => (
                  <span className="tag tag--solid" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
