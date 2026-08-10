import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const AppSettingsContext = createContext(null)

export function AppSettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'fr')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark'),
    copy: translations[language],
  }), [language, theme])

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export function useAppSettings() {
  return useContext(AppSettingsContext)
}
