import Socials from './Socials'
import { config, techBadges, stats } from '../data/portfolioData'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="badge"><i />AVAILABLE FOR OPPORTUNITIES</span>
            <h1>
              <span className="hi">Hi, I'm Rohit Thakur</span>
              <span className="grad">Full Stack Developer</span>
            </h1>
            <p className="sub">Building modern web applications, AI-powered solutions and real-world digital products.</p>
            <p className="lead">I build scalable and user-focused applications using modern frontend and backend technologies, with a growing focus on AI integration and automation.</p>
            <div className="cta">
              <a className="btn primary" href="#projects">View My Work</a>
              <a className="btn" href={config.resume} download>Download Resume</a>
              <a className="link" href="#contact">Let's Connect →</a>
            </div>
            <ul className="chips" aria-label="Core technologies">{techBadges.map((t) => <li key={t}>{t}</li>)}</ul>
            <Socials />
          </div>
          <div className="photo">
            <span className="glow" /><span className="ring r1" /><span className="ring r2" />
            <span className="orbit"><i /></span>
            <img src={config.photo} alt="Portrait of Rohit Thakur" width="460" height="460" fetchpriority="high" />
          </div>
        </div>
        <a className="scroll" href="#about">SCROLL TO EXPLORE ↓</a>
      </section>
      <section className="stats" aria-label="Highlights">
        <div className="wrap grid4">
          {stats.map(([t, d]) => (
            <div className="card reveal" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>
    </>
  )
}
