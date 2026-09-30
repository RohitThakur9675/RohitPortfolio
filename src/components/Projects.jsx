import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects, linkProps } from '../data/portfolioData'

export default function Projects() {
  const [sel, setSel] = useState(null)
  useEffect(() => {
    if (!sel) return
    const onKey = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [sel])

  const blocks = sel && [
    ['Overview', sel.description], ['Problem', sel.problem], ['Solution', sel.solution],
    ['Key Features', sel.features], ['Technology Stack', sel.stack],
    ...(sel.planned ? [['Planned (not built yet)', sel.planned]] : []),
    ['Challenges', sel.challenges], ['What I Learned', sel.learned],
    ...(sel.result ? [['Result', sel.result]] : []),
  ]
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured Projects">
      <div className="pgrid">{projects.map((p) => <ProjectCard key={p.id} p={p} onOpen={setSel} />)}</div>
      {sel && (
        <div className="modal" onClick={() => setSel(null)}>
          <div className="dialog" role="dialog" aria-modal="true" aria-label={`${sel.name} case study`} onClick={(e) => e.stopPropagation()}>
            <button className="ico x" autoFocus aria-label="Close case study" onClick={() => setSel(null)}><FaTimes /></button>
            <h3>{sel.name}</h3>
            {blocks.map(([t, c]) => (
              <div className="blk" key={t}>
                <h4>{t}</h4>
                {typeof c === 'string' ? <p>{c}</p> : (
                  <ul className={t === 'Technology Stack' ? 'chips' : 'list'}>{c.map((i) => <li key={i}>{i}</li>)}</ul>
                )}
              </div>
            ))}
            <div className="cta">
              <a className="btn primary sm" {...linkProps(sel.github)}>GitHub</a>
              <a className="btn sm" {...linkProps(sel.live)}>Live Demo</a>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
