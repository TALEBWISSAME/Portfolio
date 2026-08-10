import { ArrowUpRight } from 'lucide-react'
import ProjectShowcase from '../components/ProjectShowcase'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { useAppSettings } from '../context/AppSettingsContext'

export default function Projects() {
  const { copy } = useAppSettings()
  return <section id="work" className="section shell">
    <Reveal><p className="kicker">{copy.projects.kicker}</p><div className="section-heading"><h2>{copy.projects.title}</h2><p>{copy.projects.subtitle}</p></div></Reveal>
    <div className="mt-12">{projects.map((project, index) => <ProjectShowcase project={project} index={index} key={project.name} />)}</div>
    <a className="text-link mt-4" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer">{copy.projects.explore} <ArrowUpRight size={18} /></a>
  </section>
}
