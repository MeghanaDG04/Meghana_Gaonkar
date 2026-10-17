import FloatingPuzzleBackground from './components/FloatingPuzzleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SecretsProvider, useSecrets } from './hooks/useSecrets'
function Toast() { const { toast } = useSecrets(); return <div className="toast" role="status" aria-live="polite">{toast}</div> }
export default function App() {
  return (
    <SecretsProvider>
      <a className="skip" href="#about">Skip to content</a>
      <FloatingPuzzleBackground /><Navbar />
      <main><Hero /><About /><Skills /><Experience /><Projects /><Achievements /><Certifications /><Contact /></main>
      <Footer /><Toast />
    </SecretsProvider>
  )
}
