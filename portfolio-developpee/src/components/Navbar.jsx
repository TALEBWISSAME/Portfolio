import { useEffect, useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { useAppSettings } from '../context/AppSettingsContext'

const links = [['work', 'work'], ['about', 'about'], ['skills', 'skills'], ['journey', 'journey'], ['contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, theme, toggleTheme, copy } = useAppSettings()

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
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navigation principale">
          {links.map(([key, id]) => <a className="nav-link" key={id} href={`#${id}`}>{copy.nav[key]}</a>)}
          <div className="language-switch" aria-label="Choisir la langue">{['fr', 'en', 'ar'].map(item => <button className={language === item ? 'active' : ''} onClick={() => setLanguage(item)} key={item}>{item.toUpperCase()}</button>)}</div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={copy.nav.theme}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <a className="button button-compact" href="./CV_TALEB_WISSAME.pdf" download><Download size={16} /> {copy.nav.cv}</a>
        </nav>
        <button className="grid size-11 place-items-center rounded-full border border-white/15 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={copy.nav.menu}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mx-5 mb-4 flex flex-col rounded-2xl border border-white/10 bg-panel p-5 lg:hidden" aria-label="Navigation mobile">
        {links.map(([key, id]) => <a className="py-3 text-lg" key={id} href={`#${id}`} onClick={() => setOpen(false)}>{copy.nav[key]}</a>)}
        <div className="my-3 flex items-center justify-between gap-3"><div className="language-switch">{['fr', 'en', 'ar'].map(item => <button className={language === item ? 'active' : ''} onClick={() => setLanguage(item)} key={item}>{item.toUpperCase()}</button>)}</div><button className="theme-toggle" onClick={toggleTheme} aria-label={copy.nav.theme}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button></div>
        <a className="button mt-3 justify-center" href="./CV_TALEB_WISSAME.pdf" download><Download size={17} /> {copy.nav.cv}</a>
      </nav>}
    </header>
  )
}
