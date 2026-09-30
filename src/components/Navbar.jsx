import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa'
import { config, nav, linkProps } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach((n) => {
      const el = document.getElementById(n.toLowerCase())
      if (el) io.observe(el)
    })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const links = nav.map((n) => (
    <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'on' : ''}
       aria-current={active === n.toLowerCase() ? 'true' : undefined} onClick={() => setOpen(false)}>{n}</a>
  ))
  const socials = (
    <>
      <a className="ico" aria-label="GitHub" {...linkProps(config.github)}><FaGithub /></a>
      <a className="ico" aria-label="LinkedIn" {...linkProps(config.linkedin)}><FaLinkedinIn /></a>
    </>
  )
  return (
    <header className={`nav ${scrolled || open ? 'sc' : ''}`}>
      <div className="wrap">
        <a href="#home" className="brand" aria-label="Rohit Thakur, home"><span className="logo">RT</span>Rohit Thakur</a>
        <nav className="links" aria-label="Primary">{links}</nav>
        <div className="acts">
          <span className="hide-m acts">{socials}</span>
          <a className="btn primary sm hide-m" href={config.resume} download>Resume</a>
          <button className="ico burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`mm ${open ? 'open' : ''}`}>
        {links}
        <div className="acts mm-acts">{socials}<a className="btn primary sm" href={config.resume} download>Resume</a></div>
      </div>
    </header>
  )
}
