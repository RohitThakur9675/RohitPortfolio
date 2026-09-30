import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { config, isSet, linkProps } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div>
          <a href="#home" className="brand"><span className="logo">RT</span>Rohit Thakur</a>
          <p>Full Stack Developer building modern web applications and AI-powered solutions.</p>
        </div>
        <nav className="flinks" aria-label="Footer">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
        </nav>
        <div className="acts">
          <a className="ico" aria-label="GitHub" {...linkProps(config.github)}><FaGithub /></a>
          <a className="ico" aria-label="LinkedIn" {...linkProps(config.linkedin)}><FaLinkedinIn /></a>
          {isSet(config.email) && <a className="ico" aria-label="Email" href={`mailto:${config.email}`}><FaEnvelope /></a>}
        </div>
      </div>
      <p className="wrap copy">© 2026 Rohit Thakur. All rights reserved.</p>
    </footer>
  )
}
