import { Mail, Linkedin, Github, Download } from 'lucide-react'
import PuzzlePiece from './PuzzlePiece'
import { profile } from '../data/portfolioData'
import { useSecrets, TOTAL } from '../hooks/useSecrets'
export default function Contact() {
  const { found } = useSecrets()
  return (
    <section id="contact" className="section contact">
      <div className="wrap center">
        <div className="assembled" aria-hidden="true">{[0, 1, 2, 3].map((i) => <PuzzlePiece key={i} size={90} hue={[270, 190, 150, 300][i]} glow fill className={'a' + i} />)}</div>
        <h2 className="display sm">FOUND ALL THE PIECES?<br />LET'S BUILD SOMETHING.</h2>
        <div className="btns c">
          <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /> {profile.email}</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
          <a className="btn" href={profile.resume} download><Download size={16} aria-hidden="true" /> Resume</a>
        </div>
        {/* <p className="small">Optional secrets found: {found.length}/{TOTAL}</p> */}
      </div>
    </section>
  )
}
