import Section from './Section'
import { config, about } from '../data/portfolioData'

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="about-grid">
        <aside className="card idcard reveal">
          <img src={config.photo} alt="" width="96" height="96" loading="lazy" />
          <h3>Rohit Thakur</h3>
          <p>Full Stack Developer</p>
          <ul>{about.facts.map(([k, v]) => <li key={k}><span>{k}</span>{v}</li>)}</ul>
        </aside>
        <div className="reveal">
          {about.bio.map((p) => <p key={p} className="bio">{p}</p>)}
          <blockquote>{about.philosophy}</blockquote>
          <h3 className="mini">Current focus</h3>
          <ul className="chips">{about.focus.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
