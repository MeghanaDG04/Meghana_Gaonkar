import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData'
export default function Certifications() {
  return (
    <section id="certifications" className="section short">
      <div className="wrap">
        <h2>Certifications</h2>
        <ul className="certs">{certifications.map((c) => (
          <li key={c.name}><span><strong>{c.name}</strong> — {c.issuer}, {c.year}</span>
            {/* {/^https?:\/\//.test(c.url) ? <a href={c.url} target="_blank" rel="noreferrer" aria-label={`View ${c.name} certificate`}><ExternalLink size={16} /></a> : <em className="small">certificate link: to be configured</em>} */}
          </li>))}
        </ul>
      </div>
    </section>
  )
}
