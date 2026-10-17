const PATH = 'M10 10H40C40 0 60 0 60 10H90V40C100 40 100 60 90 60V90H60C60 100 40 100 40 90H10V60C0 60 0 40 10 40Z'
export default function PuzzlePiece({ size = 80, hue = 270, glow = false, fill = false, className = '', style, children }) {
  const c = `hsl(${hue} 100% 70%)`
  return (
    <svg viewBox="-5 -5 110 110" width={size} height={size} className={className} style={{ filter: glow ? `drop-shadow(0 0 8px ${c})` : undefined, ...style }} aria-hidden="true" focusable="false">
      <path d={PATH} fill={fill ? `hsl(${hue} 90% 60% / .14)` : 'none'} stroke={c} strokeWidth="1.6" />
      {children}
    </svg>
  )
}
