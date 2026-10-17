import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PuzzlePiece from './PuzzlePiece'
import ProjectModal from './ProjectModal'
import { projects } from '../data/portfolioData'
function Card({ p, onOpen }) {
  const tilt = (e) => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5
    e.currentTarget.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)` }
  const reset = (e) => { e.currentTarget.style.transform = '' }
  return (
    <article className={'proj ' + p.size} style={{ '--h': p.hue }} onMouseMove={tilt} onMouseLeave={reset}>
      <div className="art" aria-hidden="true"><PuzzlePiece size={p.size === 'feat' ? 170 : 110} hue={p.hue} glow fill /><PuzzlePiece size={70} hue={(p.hue + 60) % 360} className="art2" /></div>
      <div className="body">
        <h3>{p.name}</h3>{p.badge && <p className="badge">{p.badge}</p>}
        <p>{p.desc}</p>
        <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <button className="link" onClick={() => onOpen(p)} aria-haspopup="dialog">Explore Project<span className="sr"> — {p.name}</span></button>
      </div>
    </article>
  )
}
export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2>The puzzle gallery</h2>
        {/* <p className="lead">Five projects across Java, Spring MVC, Flutter and the MERN stack.</p> */}
        <div className="gallery">{projects.map((p) => <Card key={p.id} p={p} onOpen={setOpen} />)}</div>
      </div>
      <AnimatePresence>{open && <ProjectModal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  )
}
