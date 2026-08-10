import Reveal from '../components/Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return <section id="skills" className="section shell border-t border-white/10">
    <Reveal><p className="kicker">03 — Tech stack</p><div className="section-heading"><h2>Technologies I work with</h2><p>Un socle technique construit à travers ma formation et mes projets.</p></div></Reveal>
    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => <Reveal key={group.title} delay={index * .04} className="bg-ink"><div className="h-full p-7 sm:p-9"><h3 className="font-display text-xl">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span className="tag tag-hover" key={item}>{item}</span>)}</div></div></Reveal>)}</div>
  </section>
}
