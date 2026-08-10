import Reveal from '../components/Reveal'
import { useAppSettings } from '../context/AppSettingsContext'

export default function About() {
  const { copy } = useAppSettings()
  return <section id="about" className="section shell grid gap-12 border-t border-white/10 lg:grid-cols-[.55fr_1.45fr]">
    <Reveal><p className="kicker">{copy.about.kicker}</p></Reveal>
    <Reveal delay={.08}>
      <div className="about-layout">
        <div className="portrait-frame"><img src="./profile.jpg" alt="Taleb Wissame" loading="lazy" /></div>
        <div>
      <h2 className="display-title font-display text-6xl leading-[.98] tracking-[-.06em] sm:text-8xl lg:text-9xl">{copy.about.title}</h2>
      <div className="mt-8 space-y-5 text-lg leading-8 text-muted"><p>{copy.about.p1}</p><p>{copy.about.p2}</p></div>
      <dl className="mt-12 grid gap-5 sm:grid-cols-3"><div className="fact"><dt>{copy.about.path}</dt><dd>{copy.about.degree}</dd></div><div className="fact"><dt>2026</dt><dd>{copy.about.masterYear}</dd></div><div className="fact"><dt>{copy.about.based}</dt><dd>{copy.about.location}</dd></div></dl>
        </div>
      </div>
    </Reveal>
  </section>
}
