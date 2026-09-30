import Section from './Section'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills">
      <div className="grid3">
        {Object.entries(skills).map(([cat, items]) => (
          <div className="card reveal" key={cat}>
            <h3>{cat}</h3>
            <ul className="chips">{items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
