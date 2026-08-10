import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { journey } from '../data/experience'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Journey() {
  const reduced = useReducedMotion()
  return <section id="journey" className="section shell border-t border-white/10">
    <Reveal><p className="kicker">04 — My Journey</p><div className="section-heading"><h2>Learning, building, progressing.</h2></div></Reveal>
    <div className="relative mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-6">
      <div className="absolute left-2 top-0 h-full w-px bg-white/10 md:left-0 md:top-2 md:h-px md:w-full" />
      <motion.div className="absolute left-2 top-0 h-full w-px origin-top bg-accent md:left-0 md:top-2 md:h-px md:w-full md:origin-left" initial={reduced ? false : { scaleY: 0 }} whileInView={reduced ? {} : { scaleY: 1 }} viewport={{ once: true, amount: .3 }} transition={{ duration: 1.4 }} />
      {journey.map((item, index) => <Reveal key={`${item.year}-${item.title}`} delay={index * .06} className="relative pl-10 md:pl-0 md:pt-10"><span className="absolute left-0 top-0 size-4 rounded-full border-4 border-ink bg-accent md:top-0"/><strong className="font-mono text-base font-semibold text-accent">{item.year}</strong><h3 className="mt-3 font-display text-2xl font-medium leading-snug lg:text-3xl">{item.title}</h3><p className="mt-3 text-base leading-7 text-muted">{item.detail}</p></Reveal>)}
    </div>
  </section>
}
