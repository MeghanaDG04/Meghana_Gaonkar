import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import PuzzlePiece from './PuzzlePiece'
const P = [ // x%, y%, size, hue, depth, glow, delay
  [6,8,150,270,.03,0,0],[82,6,110,190,.05,1,2],[70,28,190,270,.02,0,4],[12,38,90,150,.06,1,1],
  [90,52,130,190,.03,0,3],[30,64,170,270,.02,0,5],[75,78,100,270,.05,1,2],[8,88,120,190,.04,0,6],[52,92,80,150,.06,1,1]]
const CODE = [['{ }',18,22],['</>',60,15],['=>',44,48],['[ ]',88,70],['();',24,78],['&&',66,60]]
export default function FloatingPuzzleBackground() {
  const ref = useRef(null); const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce || matchMedia('(max-width:760px)').matches) return
    let raf; const move = (e) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      ref.current?.style.setProperty('--mx', (e.clientX - innerWidth / 2) + ''); ref.current?.style.setProperty('--my', (e.clientY - innerHeight / 2) + '') }) }
    addEventListener('pointermove', move); return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [reduce])
  return (
    <div className="bg" ref={ref} aria-hidden="true">
      <div className="grid-bg" />
      <svg className="paths" width="100%" height="100%" preserveAspectRatio="none"><path d="M0 200 C300 100 500 500 900 300 S1400 600 2000 400" /><path d="M200 900 C500 600 900 1000 1500 700" /></svg>
      {P.map(([x, y, s, h, d, g, dl], i) => (
        <div key={i} className={'bp' + (i > 4 ? ' hide-sm' : '')} style={{ left: x + '%', top: y + '%', '--d': d, animationDelay: -dl + 's', animationDuration: 14 + i * 2 + 's' }}>
          <PuzzlePiece size={s} hue={h} glow={!!g} fill={!g} className={i % 4 === 0 ? 'snap' : ''} style={{ transform: `rotate(${i * 37}deg)` }} />
        </div>))}
      {CODE.map(([t, x, y], i) => <span key={t} className="code hide-sm" style={{ left: x + '%', top: y + '%', animationDelay: -i * 2 + 's' }}>{t}</span>)}
    </div>
  )
}
