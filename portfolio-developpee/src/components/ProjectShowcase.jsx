import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'

export default function ProjectShowcase({ project, index }) {
  const reverse = index % 2 === 1
  return (
    <Reveal>
      <article className="grid items-center gap-10 border-t border-white/10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="project-visual group">
            <img src={project.image} alt={`Illustration du projet ${project.name}`} loading="lazy" />
          </div>
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
            {project.status && <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">{project.status}</span>}
          </div>
          <h3 className="project-title font-display text-6xl font-medium leading-[.9] tracking-[-.055em] sm:text-7xl lg:text-8xl">{project.name}</h3>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
          <div className="mt-9 flex flex-wrap gap-4">
            {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer"><Github size={18} /> {project.githubLabel || 'GitHub'} <ExternalLink size={14} /></a>}
            {project.additionalLinks?.map(link => <a className="text-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}><Github size={18} /> {link.label} <ExternalLink size={14} /></a>)}
            {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Voir le site <ExternalLink size={14} /></a>}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
