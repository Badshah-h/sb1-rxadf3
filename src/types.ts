export type Language = 'en' | 'ar'

export interface FormData {
  name: string
  email: string
  satisfaction: string
  feedback: string
}

export interface Translations {
  welcomeTitle: string
  welcomeDescription: string
  startSurvey: string
  step: string
  nameLabel: string
  emailLabel: string
  satisfactionLabel: string
  feedbackLabel: string
  selectOption: string
  verySatisfied: string
  satisfied: string
  neutral: string
  unsatisfied: string
  veryUnsatisfied: string
  thankYouTitle: string
  thankYouMessage: string
  previous: string
  next: string
}