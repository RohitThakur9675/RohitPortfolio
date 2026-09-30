import { useState } from 'react'
import Section from './Section'
import Socials from './Socials'
import { config } from '../data/portfolioData'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState('')

  // No backend: the form opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    setSending(true)
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
      const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)
      window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`
      form.reset()
      setSending(false)
      setToast('Opening your email app to send the message.')
      setTimeout(() => setToast(''), 4500)
    }, 500)
  }
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Useful">
      <div className="contact-grid">
        <div className="reveal">
          <p className="bio">Have an idea, project, or opportunity? Let's talk.</p>
          <Socials cards />
        </div>
        <form className="card reveal" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn primary" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
        </form>
      </div>
      <div className={`toast ${toast ? 'show' : ''}`} role="status">{toast}</div>
    </Section>
  )
}
