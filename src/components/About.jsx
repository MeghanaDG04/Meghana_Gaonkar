import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PuzzlePiece from './PuzzlePiece'
import { aboutPieces, jokes } from '../data/portfolioData'
import { useSecrets } from '../hooks/useSecrets'
const HUES = [270, 190, 150, 300]
export default function About() {
  const [seen, setSeen] = useState([]); const [cur, setCur] = useState(0); const { find } = useSecrets(); const [joke, setJoke] = useState('')
  const pick = (i) => { setCur(i); setSeen((s) => (s.includes(i) ? s : [...s, i])) }
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <div>
          <h2>Assemble my story</h2>
          <p className="lead">I’m a Computer Science and Engineering graduate who enjoys turning ideas into working software, from REST APIs and databases to polished interfaces.</p>
          <ul className="plain">{aboutPieces.map((p) => <li key={p.id}><strong>{p.title}.</strong> {p.text}</li>)}</ul>
        </div>
        <div className="glass assemble">
          <div className="pieces" role="group" aria-label="Select a puzzle piece">
            {aboutPieces.map((p, i) => (
              <button key={p.id} className={'pc' + (cur === i ? ' on' : '')} aria-pressed={cur === i} onClick={() => pick(i)}>
                <PuzzlePiece size={96} hue={HUES[i]} glow={seen.includes(i)} fill={seen.includes(i)} /><span>{p.title}</span>
              </button>))}
          </div>
          <AnimatePresence mode="wait"><motion.p key={cur} className="reveal" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{aboutPieces[cur].text}</motion.p></AnimatePresence>
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={4} aria-valuenow={seen.length} aria-label="Pieces explored"><i style={{ width: seen.length * 25 + '%' }} /></div>
          <p className="small">{seen.length}/4 pieces explored</p>
          <button className="hidden-piece" aria-label="Hidden puzzle piece" onClick={() => { const j = jokes[Math.floor(Math.random() * jokes.length)]; setJoke(j); find('joke', 'Joke piece found!') }}><PuzzlePiece size={22} hue={150} /></button>
          {joke && <p className="small joke" role="status">{joke}</p>}
        </div>
      </div>
    </section>
  )
}
