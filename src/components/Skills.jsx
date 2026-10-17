import { useState } from 'react'
import { skillGroups, related } from '../data/portfolioData'
export default function Skills() {
  const [a, setA] = useState(null)
  const rel = a ? [a.item, ...(related[a.item] || [])] : []
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2>My developer toolkit</h2>
        <p className="lead">Hover or focus a technology to see what it connects to.</p>
        <div className="map" onMouseLeave={() => setA(null)}>
          {skillGroups.map((g) => (
            <div className="grp" key={g.name}>
              <h3>{g.name}</h3>
              <div className="chips">{g.items.map((item) => (
                <button key={item} className={'chip' + (a ? (rel.includes(item) ? ' lit' : ' dim') : '')}
                  onMouseEnter={() => setA({ item, note: g.note, g: g.name })} onFocus={() => setA({ item, note: g.note, g: g.name })} onBlur={() => setA(null)}>{item}</button>))}</div>
            </div>))}
        </div>
        <p className="note" aria-live="polite">{a ? `${a.item} — ${a.note}${related[a.item] ? ' Related: ' + related[a.item].join(', ') + '.' : ''}` : ' '}</p>
      </div>
    </section>
  )
}
