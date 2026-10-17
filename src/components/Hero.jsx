import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { useSecrets } from '../hooks/useSecrets'
const line = (t, d) => <span className="mask"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: d, ease: [.2, .8, .2, 1] }}>{t}</motion.span></span>
export default function Hero() {
  const { find } = useSecrets()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' })
  return (
    <section id="home" className="section hero">
      <div className="wrap">
        <h1 className="display">{line('EVERY DEVELOPER IS A PUZZLE.', .1)}{line("LET'S SOLVE MINE.", .35)}</h1>
        <p className="name">{profile.name} <button className="sym" aria-label="Curly braces symbol" onClick={() => find('sym', 'Secret: “{ }” — every great piece starts with an opening brace.')}>{'{ }'}</button></p>
        <p className="role">{profile.role}</p>
        <p className="tag">{profile.tagline}</p>
        <p className="lead">{profile.intro}</p>
        <div className="btns">
          <button className="btn primary" onClick={() => go('about')}>START THE PUZZLE <ArrowDown size={16} aria-hidden="true" /></button>
          <button className="btn" onClick={() => go('projects')}>EXPLORE PROJECTS</button>
          <a className="btn" href={profile.resume} download><Download size={16} aria-hidden="true" />RESUME</a>
        </div>
      </div>
    </section>
  )
}
