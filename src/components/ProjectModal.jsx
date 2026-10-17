import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import PuzzlePiece from './PuzzlePiece'
const valid = (u) => /^https?:\/\//.test(u)
export default function ProjectModal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => { const prev = document.activeElement; ref.current?.focus()
    const k = (e) => e.key === 'Escape' && onClose(); addEventListener('keydown', k)
    return () => { removeEventListener('keydown', k); prev?.focus() } }, [onClose])
  return (
    <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="mt" onClick={(e) => e.stopPropagation()} initial={{ scale: .9, rotate: -2, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: .95, opacity: 0 }}>
        <button ref={ref} className="close" onClick={onClose} aria-label="Close project details"><X /></button>
        <PuzzlePiece size={90} hue={p.hue} glow fill />
        <h3 id="mt">{p.name}</h3>
        {p.badge && <p className="badge">{p.badge}</p>}
        <p>{p.desc}</p>
        <ul className="plain">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="btns">
          {valid(p.github) ? <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a> : <span className="btn off">GitHub link: to be configured</span>}
          {/* {valid(p.live) ? <a className="btn" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Live demo</a> : <span className="btn off">Live demo: to be configured</span>} */}
        </div>
      </motion.div>
    </motion.div>
  )
}
