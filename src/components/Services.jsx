import { FaLaptopCode, FaRobot, FaServer, FaCogs } from 'react-icons/fa'
import Section from './Section'
import { services, why } from '../data/portfolioData'

const icons = [FaLaptopCode, FaRobot, FaServer, FaCogs]

export default function Services() {
  return (
    <>
      <Section id="services" eyebrow="Services" title="What I Can Build">
        <div className="grid4">
          {services.map(([t, d], i) => {
            const Icon = icons[i]
            return <div className="card reveal" key={t}><Icon className="sic" aria-hidden="true" /><h3>{t}</h3><p>{d}</p></div>
          })}
        </div>
      </Section>
      <Section title="Why Work With Me">
        <div className="grid3">
          {why.map(([t, d]) => <div className="card reveal" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </Section>
    </>
  )
}
