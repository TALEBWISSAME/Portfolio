import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useAppSettings } from '../context/AppSettingsContext'

export default function Contact() {
  const { copy } = useAppSettings()
  return <section id="contact" className="section shell border-t border-white/10">
    <Reveal>
      <p className="kicker">{copy.contact.kicker}</p>
      <h2 className="mt-10 font-display text-[clamp(4rem,11vw,10rem)] font-medium leading-[.82] tracking-[-.07em]">{copy.contact.line1}<br/><span className="text-outline">{copy.contact.line2}</span><br/>{copy.contact.line3}</h2>
      <p className="mt-12 max-w-2xl text-lg leading-8 text-muted">{copy.contact.text}</p>
      <div className="mt-9 flex flex-wrap gap-3"><a className="button button-primary" href="mailto:taleb.wissame2004@gmail.com"><Mail size={18}/> {copy.contact.email}</a><a className="button" href="tel:+33748383430"><Phone size={18}/> {copy.contact.phone}</a><a className="button" href="https://github.com/TALEBWISSAME" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a className="button" href="https://fr.linkedin.com/in/wissame-taleb-7aa60b415" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a><a className="button button-ghost" href="./CV_TALEB_WISSAME.pdf" download><Download size={18}/> {copy.contact.cv}</a></div>
      <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2"><a className="text-muted hover:text-white" href="mailto:taleb.wissame2004@gmail.com">taleb.wissame2004@gmail.com</a><a className="text-muted hover:text-white" href="tel:+33748383430">07 48 38 34 30</a></div>
    </Reveal>
  </section>
}
