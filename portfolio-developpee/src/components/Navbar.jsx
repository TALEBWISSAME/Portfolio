import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const links = [['Work', 'work'], ['About', 'about'], ['Skills', 'skills'], ['Journey', 'journey'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-ink/75 backdrop-blur-xl' : ''}`}>
      <div className="shell flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">WISSAME<span className="text-accent">.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {links.map(([label, id]) => <a className="nav-link" key={id} href={`#${id}`}>{label}</a>)}
          <a className="button button-compact" href="./CV_TALEB_WISSAME.pdf" download><Download size={16} /> Download CV</a>
        </nav>
        <button className="grid size-11 place-items-center rounded-full border border-white/15 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mx-5 mb-4 flex flex-col rounded-2xl border border-white/10 bg-panel p-5 md:hidden" aria-label="Navigation mobile">
        {links.map(([label, id]) => <a className="py-3 text-lg" key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button mt-3 justify-center" href="./CV_TALEB_WISSAME.pdf" download><Download size={17} /> Download CV</a>
      </nav>}
    </header>
  )
}
