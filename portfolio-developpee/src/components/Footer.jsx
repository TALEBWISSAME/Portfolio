import { useAppSettings } from '../context/AppSettingsContext'

export default function Footer() {
  const { copy } = useAppSettings()
  return <footer className="shell relative z-10 flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><span>Taleb Wissame © 2026</span><span>{copy.footer}</span></footer>
}
