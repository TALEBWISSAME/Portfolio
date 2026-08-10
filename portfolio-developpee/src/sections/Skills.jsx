import Reveal from '../components/Reveal'
import { skillGroups } from '../data/skills'
import { Braces, BrainCircuit, Code2, Database, ServerCog, Wrench } from 'lucide-react'
import { useAppSettings } from '../context/AppSettingsContext'

const icons = {
  Languages: Braces,
  Frontend: Code2,
  Backend: ServerCog,
  Database,
  Tools: Wrench,
  Concepts: BrainCircuit,
}

export default function Skills() {
  const { copy } = useAppSettings()
  return <section id="skills" className="section shell border-t border-white/10">
    <Reveal><p className="kicker">{copy.skills.kicker}</p><div className="section-heading"><h2>{copy.skills.title}</h2><p>{copy.skills.subtitle}</p></div></Reveal>
    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => {
      const Icon = icons[group.title]
      return <Reveal key={group.title} delay={index * .065} className="h-full">
        <article className="skill-card group">
          <div className="skill-card-glow" />
          <div className="relative z-10 flex items-start justify-between">
            <span className="skill-icon"><Icon size={25} strokeWidth={1.7} /></span>
            <span className="font-mono text-xs tracking-[.2em] text-white/25">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="relative z-10 mt-14">
            <h3 className="skill-title font-display text-4xl font-medium tracking-[-.05em] sm:text-5xl">{copy.skills.groups[group.title]}</h3>
            <div className="mt-7 flex flex-wrap gap-2">{group.items.map(item => <span className="skill-pill" key={item}>{item}</span>)}</div>
          </div>
          <div className="skill-card-line" />
        </article>
      </Reveal>
    })}</div>
  </section>
}
