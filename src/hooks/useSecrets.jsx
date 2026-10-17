import { createContext, useContext, useState, useCallback, useEffect } from 'react'
const Ctx = createContext(null)
export const TOTAL = 3
export function SecretsProvider({ children }) {
  const [found, setFound] = useState([])
  const [toast, setToast] = useState('')
  const say = useCallback((m) => { setToast(m); setTimeout(() => setToast(''), 3500) }, [])
  const find = useCallback((id, msg) => {
    setFound((f) => { if (f.includes(id)) { return f } const n = [...f, id]
      setTimeout(() => say(n.length === TOTAL ? 'You found all the pieces!' : msg), 0); return n })
  }, [say])
  useEffect(() => { // Press "P" for a playful spin
    const h = (e) => { if (e.key.toLowerCase() !== 'p' || e.metaKey || e.ctrlKey || e.altKey) return
      if (/input|textarea/i.test(e.target.tagName)) return
      document.body.classList.add('spin'); setTimeout(() => document.body.classList.remove('spin'), 1400)
      find('key', 'Shortcut found: pieces shuffled.') }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [find])
  return <Ctx.Provider value={{ found, find, toast }}>{children}</Ctx.Provider>
}
export const useSecrets = () => useContext(Ctx)
