import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <h2>My journey through the pieces</h2>
        <ol className="timeline">
          {experience.map((e, i) => (
            <motion.li key={e.org} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .05 }}>
              <span className="dot" aria-hidden="true" />
              <time>{e.dates}</time><h3>{e.role} <span className="org">at {e.org}</span></h3><p>{e.text}</p>
            </motion.li>))}
        </ol>
      </div>
    </section>
  )
}
