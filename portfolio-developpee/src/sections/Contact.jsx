import { Download, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  return <section id="contact" className="section shell border-t border-white/10">
    <Reveal>
      <p className="kicker">05 — Contact</p>
      <h2 className="mt-10 font-display text-[clamp(4rem,11vw,10rem)] font-medium leading-[.82] tracking-[-.07em]">LET&apos;S BUILD<br/><span className="text-outline">SOMETHING</span><br/>TOGETHER.</h2>
      <p className="mt-12 max-w-2xl text-lg leading-8 text-muted">Je recherche actuellement une alternance en développement logiciel pour 2026–2027.</p>
      <div className="mt-9 flex flex-wrap gap-3"><a className="button button-primary" href="mailto:taleb.wissame2004@gmail.com"><Mail size={18}/> Email me</a><a className="button" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a className="button" href="https://fr.linkedin.com/in/wissame-taleb-7aa60b415" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a><a className="button button-ghost" href="./CV_TALEB_WISSAME.pdf" download><Download size={18}/> Download CV</a></div>
      <a className="mt-8 inline-block text-muted hover:text-white" href="mailto:taleb.wissame2004@gmail.com">taleb.wissame2004@gmail.com</a>
    </Reveal>
  </section>
}
