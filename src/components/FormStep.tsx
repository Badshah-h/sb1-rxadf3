import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { FormData } from '../types'

interface FormStepProps {
  step: number
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
}

const FormStep: React.FC<FormStepProps> = ({ step, formData, onChange }) => {
  const { t } = useLanguage()

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label className="block mb-2">{t.nameLabel}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </>
        )
      case 2:
        return (
          <>
            <label className="block mb-2">{t.emailLabel}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </>
        )
      case 3:
        return (
          <>
            <label className="block mb-2">{t.satisfactionLabel}</label>
            <select
              value={formData.satisfaction}
              onChange={(e) => onChange('satisfaction', e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">{t.selectOption}</option>
              <option value="very-satisfied">{t.verySatisfied}</option>
              <option value="satisfied">{t.satisfied}</option>
              <option value="neutral">{t.neutral}</option>
              <option value="unsatisfied">{t.unsatisfied}</option>
              <option value="very-unsatisfied">{t.veryUnsatisfied}</option>
            </select>
            <label className="block mt-4 mb-2">{t.feedbackLabel}</label>
            <textarea
              value={formData.feedback}
              onChange={(e) => onChange('feedback', e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
            ></textarea>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {t.step} {step}
      </h2>
      {renderStepContent()}
    </div>
  )
}

export default FormStep