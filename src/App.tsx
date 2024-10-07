import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import WelcomePage from './components/WelcomePage'
import FormStep from './components/FormStep'
import ThankYouPage from './components/ThankYouPage'
import ProgressBar from './components/ProgressBar'
import LanguageToggle from './components/LanguageToggle'
import { FormData, Language } from './types'
import { translations } from './translations'

const totalSteps = 3

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [language, setLanguage] = useState<Language>('en')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    satisfaction: '',
    feedback: '',
  })

  const t = translations[language]

  const handleNext = () => {
    if (currentStep < totalSteps + 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomePage onStart={handleNext} />
      case 1:
      case 2:
      case 3:
        return (
          <FormStep
            step={currentStep}
            formData={formData}
            onChange={handleFormChange}
          />
        )
      case 4:
        return <ThankYouPage />
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 ${language === 'ar' ? 'font-arabic' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        {currentStep > 0 && currentStep < totalSteps + 2 && (
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps + 1} />
        )}
        {renderStep()}
        {currentStep > 0 && currentStep < totalSteps + 1 && (
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="mr-2" size={20} />
              {t.previous}
            </button>
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {t.next}
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App