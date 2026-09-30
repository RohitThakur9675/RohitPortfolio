export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <div className="head reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
