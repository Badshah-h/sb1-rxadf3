import React from 'react'
import { Smile } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface WelcomePageProps {
  onStart: () => void
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  const { t } = useLanguage()

  return (
    <div className="text-center">
      <Smile className="mx-auto mb-4" size={48} />
      <h1 className="text-2xl font-bold mb-4">{t.welcomeTitle}</h1>
      <p className="mb-6">{t.welcomeDescription}</p>
      <button
        onClick={onStart}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {t.startSurvey}
      </button>
    </div>
  )
}

export default WelcomePage