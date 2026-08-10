import Reveal from '../components/Reveal'

export default function About() {
  return <section id="about" className="section shell grid gap-12 border-t border-white/10 lg:grid-cols-[.55fr_1.45fr]">
    <Reveal><p className="kicker">02 — About me</p></Reveal>
    <Reveal delay={.08}>
      <div className="about-layout">
        <div className="portrait-frame"><img src="./profile.jpg" alt="Taleb Wissame" loading="lazy" /></div>
        <div>
      <h2 className="display-title font-display text-6xl leading-[.98] tracking-[-.06em] sm:text-8xl lg:text-9xl">Développer des solutions utiles, performantes et bien pensées.</h2>
      <div className="mt-8 space-y-5 text-lg leading-8 text-muted"><p>Passionnée par le développement logiciel et la conception d’applications, j’ai construit mon parcours autour de projets web, logiciels et collaboratifs.</p><p>Après une Licence Informatique à Avignon Université, je suis admise en Master 1 ILSEN. Je recherche une alternance pour approfondir mes compétences tout en contribuant à des projets concrets au sein d’une équipe.</p></div>
      <dl className="mt-12 grid gap-5 sm:grid-cols-3"><div className="fact"><dt>Parcours</dt><dd>Licence Informatique</dd></div><div className="fact"><dt>2026</dt><dd>Master 1 ILSEN</dd></div><div className="fact"><dt>Basée à</dt><dd>Avignon, France</dd></div></dl>
        </div>
      </div>
    </Reveal>
  </section>
}
