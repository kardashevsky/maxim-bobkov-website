<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()

const cvUrl = `${import.meta.env.BASE_URL}maxim-bobkov-cv.pdf`
</script>

<template>
  <header class="project-header">
    <RouterLink class="project-header__home" :to="{ name: 'home' }">
      {{ t('actions.backHome') }}
    </RouterLink>

    <nav class="project-header__contacts" :aria-label="t('accessibility.contacts')">
      <a class="project-header__contact" :href="cvUrl" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">▣</span>
        {{ t('contacts.cv') }}
      </a>

      <a
        class="project-header__contact"
        href="https://t.me/maksimskt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">➤</span>
        {{ t('contacts.telegram') }}
      </a>

      <a class="project-header__contact" href="mailto:maksim.you11@gmail.com">
        <span aria-hidden="true">✉</span>
        {{ t('contacts.mail') }}
      </a>
    </nav>

    <LanguageSwitcher />
  </header>
</template>

<style scoped>
.project-header {
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  width: 100%;
  min-height: 122px;
  padding: 28px 60px;

  background: #ffffff;
  border: 2px solid rgba(63, 63, 63, 0.2);
  border-radius: 20px;
}

.project-header__home {
  justify-self: start;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 62px;
  padding: 10px 22px;

  border: 2px solid #585858;
  border-radius: 16px;

  color: #585858;
  text-decoration: none;

  font-size: 30px;
  font-weight: 500;
  line-height: 110%;
}

.project-header__contacts {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.project-header__contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 62px;
  padding: 10px 24px;

  border-radius: 16px;

  background: #dae2da;
  color: #4a4a4a;
  text-decoration: none;

  font-size: 30px;
  font-weight: 500;
  line-height: 110%;
}

.project-header :deep(.language-switcher) {
  justify-self: end;
}

@media (max-width: 1200px) {
  .project-header {
    grid-template-columns: auto 1fr auto;
    gap: 24px;
    padding-inline: 32px;
  }

  .project-header__contacts {
    gap: 12px;
  }

  .project-header__home,
  .project-header__contact {
    min-height: 52px;
    font-size: 22px;
  }
}

@media (max-width: 900px) {
  .project-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project-header__contacts {
    order: 3;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .project-header {
    padding: 20px;
    border-radius: 16px;
  }

  .project-header__contacts {
    display: none;
  }

  .project-header__home {
    min-height: 44px;
    padding-inline: 16px;
    border-radius: 12px;
    font-size: 18px;
  }
}
</style>
