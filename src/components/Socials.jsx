import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { config, isSet } from '../data/portfolioData'

const short = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

// Shows only the contact details that are filled in (portfolioData.js).
export default function Socials({ cards }) {
  const { email, phone, github, linkedin } = config
  const items = [
    ['Email', FaEnvelope, isSet(email) && `mailto:${email}`, email],
    ['Phone', FaPhoneAlt, isSet(phone) && `tel:${phone.replace(/\s/g, '')}`, phone],
    ['GitHub', FaGithub, isSet(github) && github, isSet(github) && short(github)],
    ['LinkedIn', FaLinkedinIn, isSet(linkedin) && linkedin, isSet(linkedin) && short(linkedin)],
  ].filter(([label, , href]) => href && (cards || label !== 'Phone'))
  return (
    <ul className={cards ? 'ccards' : 'socs'}>
      {items.map(([label, Icon, href, value]) => (
        <li key={label}>
          <a className={cards ? 'ccard' : 'soc'} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
            <Icon aria-hidden="true" />
            {cards ? <span><small>{label}</small>{value}</span> : label}
          </a>
        </li>
      ))}
    </ul>
  )
}
