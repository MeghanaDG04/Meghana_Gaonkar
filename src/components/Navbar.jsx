import { useEffect, useState } from 'react'
import { Menu, X, Puzzle } from 'lucide-react'
import { nav } from '../data/portfolioData'
export default function Navbar() {
  const [active, setActive] = useState('home'); const [open, setOpen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) }); return () => io.disconnect()
  }, [])
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' }) }
  return (
    <header className="nav">
      <a href="#home" onClick={go('home')} className="brand" aria-label="Meghana Gaonkar, home"><Puzzle size={20} aria-hidden="true" /></a>
      <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="menu" aria-label="Primary" className={open ? 'open' : ''}>
        {nav.map((id) => <a key={id} href={'#' + id} onClick={go(id)} aria-current={active === id ? 'page' : undefined} className={active === id ? 'on' : ''}>{id[0].toUpperCase() + id.slice(1)}</a>)}
      </nav>
    </header>
  )
}
