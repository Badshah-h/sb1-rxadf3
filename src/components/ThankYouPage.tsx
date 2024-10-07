import React from 'react'
import { ThumbsUp } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const ThankYouPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="text-center">
      <ThumbsUp className="mx-auto mb-4" size={48} />
      <h1 className="text-2xl font-bold mb-4">{t.thankYouTitle}</h1>
      <p>{t.thankYouMessage}</p>
    </div>
  )
}

export default ThankYouPage