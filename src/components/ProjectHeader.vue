<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

import cvIcon from '@/assets/icons/cv.svg'
import telegramIcon from '@/assets/icons/telegram.svg'
import mailIcon from '@/assets/icons/mail.svg'

const { t } = useI18n()

const cvUrl = `${import.meta.env.BASE_URL}maxim-bobkov-cv.pdf`
</script>

<template>
  <header class="project-header">
    <div class="project-header__start">
      <RouterLink class="project-header__home" :to="{ name: 'home' }">
        {{ t('actions.backHome') }}
      </RouterLink>
    </div>

    <nav class="project-header__center" :aria-label="t('accessibility.contacts')">
      <a class="project-header__contact" :href="cvUrl" target="_blank" rel="noopener noreferrer">
        <img class="project-header__contact-icon" :src="cvIcon" alt="" aria-hidden="true" />

        {{ t('contacts.cv') }}
      </a>

      <a
        class="project-header__contact"
        href="https://t.me/maksimskt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="project-header__contact-icon" :src="telegramIcon" alt="" aria-hidden="true" />

        {{ t('contacts.telegram') }}
      </a>

      <a class="project-header__contact" href="mailto:maksim.you11@gmail.com">
        <img class="project-header__contact-icon" :src="mailIcon" alt="" aria-hidden="true" />

        {{ t('contacts.mail') }}
      </a>
    </nav>

    <div class="project-header__end">
      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped>
.project-header {
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  width: min(calc(100% - 48px), 1320px);
  height: 80px;

  margin: 40px auto 0;
  padding: 20px 40px;

  background: rgba(255, 255, 255, 0.8);

  border: 1px solid #dae2de;
  border-radius: 10px;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.project-header__start {
  display: flex;
  justify-content: flex-start;
}

.project-header__center {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
}

.project-header__end {
  display: flex;
  justify-content: flex-end;
}

/* На главную */

.project-header__home {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 10px 15px;

  background: #ffffff;

  border: 1px solid #585858;
  border-radius: 10px;

  color: #585858;
  text-decoration: none;

  font-size: 18px;
  font-weight: 500;
  line-height: 110%;

  white-space: nowrap;
}

/* Контакты */

.project-header__contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 10px 15px;
  gap: 5px;

  background: rgba(68, 108, 92, 0.2);

  border-radius: 10px;

  color: #4a4a4a;
  text-decoration: none;

  font-size: 18px;
  font-weight: 500;
  line-height: 110%;

  white-space: nowrap;
}

.project-header__contact-icon {
  width: 18px;
  height: 18px;

  flex: 0 0 18px;
}

/* Laptop */

@media (max-width: 1100px) {
  .project-header {
    padding-inline: 24px;
  }

  .project-header__center {
    gap: 10px;
  }

  .project-header__contact {
    padding-inline: 12px;
  }
}

/* Mobile */

@media (max-width: 700px) {
  .project-header {
    grid-template-columns: 1fr auto;

    width: calc(100% - 32px);
    height: auto;
    min-height: 64px;

    margin-top: 16px;
    padding: 12px 16px;
  }

  .project-header__center {
    display: none;
  }

  .project-header__home {
    height: 36px;
    padding: 8px 12px;

    font-size: 16px;
  }
}
</style>
