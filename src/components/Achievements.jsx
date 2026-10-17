import PuzzlePiece from './PuzzlePiece'
import { achievements } from '../data/portfolioData'
export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <h2>Collect the milestones</h2>
        <ul className="wall">{achievements.map(([t, d], i) => (
          <li key={t} className={i < 3 ? 'top' : ''}><PuzzlePiece size={44} hue={[270, 190, 150][i % 3]} glow={i < 3} fill /><div><h3>{t}</h3><p>{d}</p></div></li>))}</ul>
      </div>
    </section>
  )
}
