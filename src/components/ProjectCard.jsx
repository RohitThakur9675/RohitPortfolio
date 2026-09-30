import { isSet, linkProps } from '../data/portfolioData'

export default function ProjectCard({ p, onOpen }) {
  const Shot = isSet(p.live) ? 'a' : 'div'
  return (
    <article className="card pcard reveal">
      <Shot className="shot" style={{ background: p.gradient }} {...(isSet(p.live) ? { href: p.live, target: '_blank', rel: 'noreferrer', 'aria-label': `Open ${p.name} live demo` } : {})}>
        {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" /> : <span aria-hidden="true">{p.short}</span>}
      </Shot>
      <div className="pbody">
        <h3>{isSet(p.live) ? <a className="tlink" {...linkProps(p.live)}>{p.name}</a> : p.name}</h3>
        <p>{p.description}</p>
        <p className="prob"><b>Problem solved:</b> {p.problem}</p>
        <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        <ul className="list">{p.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="cta">
          <button className="btn primary sm" onClick={() => onOpen(p)}>View Case Study</button>
          <a className="btn sm" {...linkProps(p.github)}>GitHub</a>
          <a className="btn sm" {...linkProps(p.live)}>Live Demo</a>
        </div>
      </div>
    </article>
  )
}
