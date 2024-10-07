import React from 'react'
import { Globe } from 'lucide-react'
import { Language } from '../types'

interface LanguageToggleProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <Globe size={20} />
      <span className="sr-only">Toggle Language</span>
    </button>
  )
}

export default LanguageToggle