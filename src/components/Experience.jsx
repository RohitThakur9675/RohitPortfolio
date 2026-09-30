import Section from './Section'
import { journey } from '../data/portfolioData'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Path so far" title="My Journey">
      <ol className="tl">
        {journey.map(([t, d]) => (
          <li key={t} className="card reveal"><h3>{t}</h3><p>{d}</p></li>
        ))}
      </ol>
    </Section>
  )
}
