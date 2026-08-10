import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Download, Github, Mail } from 'lucide-react'
import useReducedMotion from '../hooks/useReducedMotion'

const roles = ['Web Applications', 'Software', 'Useful digital experiences']

export default function Hero() {
  const [role, setRole] = useState(0)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return undefined
    const timer = window.setInterval(() => setRole(value => (value + 1) % roles.length), 2600)
    return () => window.clearInterval(timer)
  }, [reduced])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell relative z-10 py-20">
        <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="availability"><span /> Available for apprenticeship opportunities</div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[.28em] text-muted">Software Engineering · Web · AI</p>
          <h1 className="mt-5 font-display text-[clamp(4.1rem,12vw,10.8rem)] font-medium leading-[.78] tracking-[-.075em]">TALEB<br /><span className="text-outline">WISSAME</span></h1>
          <div className="mt-10 flex min-h-12 flex-wrap items-baseline gap-x-3 font-display text-2xl sm:text-4xl">
            <span>I build</span>
            <AnimatePresence mode="wait"><motion.span key={role} className="text-accent" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .35 }}>{roles[role]}</motion.span></AnimatePresence>
          </div>
          <div className="mt-10 border-l border-accent pl-5 text-lg leading-8"><strong className="block">Admise en Master 1 ILSEN</strong><span className="text-muted">Recherche d’alternance 2026–2027</span></div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work">View my work <ArrowDown size={18} /></a>
            <a className="button" href="./CV_TALEB_WISSAME.pdf" download><Download size={18} /> Download CV</a>
            <a className="button button-ghost" href="mailto:taleb.wissame2004@gmail.com"><Mail size={18} /> Contact me</a>
            <a className="icon-link" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </motion.div>
        <a className="absolute bottom-5 right-5 hidden items-center gap-2 text-xs uppercase tracking-[.18em] text-muted lg:flex" href="#work">Scroll to explore <ArrowDown size={15} /></a>
      </div>
    </section>
  )
}
