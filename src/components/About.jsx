import { profile, education } from '../data'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__kicker">01 — About</span>
          <h2 className="section__title">Who I am</h2>
        </header>

        <div className="about__grid">
          <div className="about__lead reveal">
            <p>{profile.summary}</p>
            <p>
              I enjoy taking ideas from research into production — building data
              pipelines, fine-tuning and optimizing large language models, designing
              retrieval-augmented systems, and shipping them with solid MLOps
              foundations. My background spans cloud-scale ML infrastructure and
              resource-constrained embedded AI.
            </p>
          </div>

          <div className="about__edu reveal">
            <h3 className="about__edu-title">Education</h3>
            {education.map((e) => (
              <div className="edu-item" key={e.degree}>
                <span className="edu-item__period">{e.period}</span>
                <div>
                  <p className="edu-item__degree">{e.degree}</p>
                  <p className="edu-item__school">{e.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
