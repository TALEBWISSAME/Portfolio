import { ArrowUpRight } from 'lucide-react'
import ProjectShowcase from '../components/ProjectShowcase'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return <section id="work" className="section shell">
    <Reveal><p className="kicker">01 — Selected Work</p><div className="section-heading"><h2>Projects built with purpose.</h2><p>Une sélection vérifiée de mes projets publics en développement logiciel, web, données et applications collaboratives.</p></div></Reveal>
    <div className="mt-12">{projects.map((project, index) => <ProjectShowcase project={project} index={index} key={project.name} />)}</div>
    <a className="text-link mt-4" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer">Explore more projects on GitHub <ArrowUpRight size={18} /></a>
  </section>
}
