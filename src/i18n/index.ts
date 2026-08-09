import { createI18n } from 'vue-i18n'

import ru from './locales/ru'
import en from './locales/en'

type Locale = 'ru' | 'en'

const savedLocale = localStorage.getItem('locale')
const locale: Locale = savedLocale === 'en' ? 'en' : 'ru'

document.documentElement.lang = locale

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'ru',

  messages: {
    ru,
    en,
  },
})
