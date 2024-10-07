import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { translations } from '../translations'

export const useLanguage = () => {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  return { t, language }
}