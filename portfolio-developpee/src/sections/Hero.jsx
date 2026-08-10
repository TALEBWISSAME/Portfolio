import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Download, Github, Mail } from 'lucide-react'
import useReducedMotion from '../hooks/useReducedMotion'
import { useAppSettings } from '../context/AppSettingsContext'

export default function Hero() {
  const [role, setRole] = useState(0)
  const reduced = useReducedMotion()
  const { copy, language } = useAppSettings()
  const roles = copy.hero.roles
  useEffect(() => {
    if (reduced) return undefined
    const timer = window.setInterval(() => setRole(value => (value + 1) % roles.length), 2600)
    return () => window.clearInterval(timer)
  }, [reduced, language, roles.length])

  useEffect(() => setRole(0), [language])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell relative z-10 py-20">
        <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="availability"><span /> {copy.hero.availability}</div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[.28em] text-muted">{copy.hero.field}</p>
          <h1 className="mt-5 font-display text-[clamp(4.1rem,12vw,10.8rem)] font-medium leading-[.78] tracking-[-.075em]">TALEB<br /><span className="text-outline">WISSAME</span></h1>
          <div className="mt-10 flex min-h-12 flex-wrap items-baseline gap-x-3 font-display text-2xl sm:text-4xl">
            <span>{copy.hero.build}</span>
            <AnimatePresence mode="wait"><motion.span key={role} className="text-accent" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .35 }}>{roles[role]}</motion.span></AnimatePresence>
          </div>
          <div className="hero-master mt-10 border-l border-accent pl-5 text-lg leading-8"><strong className="block">{copy.hero.master}</strong><span className="text-muted">{copy.hero.search}</span></div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work">{copy.hero.work} <ArrowDown size={18} /></a>
            <a className="button" href="./CV_TALEB_WISSAME.pdf" download><Download size={18} /> {copy.hero.cv}</a>
            <a className="button button-ghost" href="mailto:taleb.wissame2004@gmail.com"><Mail size={18} /> {copy.hero.contact}</a>
            <a className="icon-link" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </motion.div>
        <a className="absolute bottom-5 right-5 hidden items-center gap-2 text-xs uppercase tracking-[.18em] text-muted lg:flex" href="#work">{copy.hero.scroll} <ArrowDown size={15} /></a>
      </div>
    </section>
  )
}
