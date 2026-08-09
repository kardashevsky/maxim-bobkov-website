<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

interface Project {
  id: number
  titleKey: string
  descriptionKey?: string
  altKey: string
  image: string
}

const { t } = useI18n()

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.glaspro.title',
    descriptionKey: 'projects.glaspro.description',
    altKey: 'projects.glaspro.alt',
    image: new URL('../assets/project-glaspro.webp', import.meta.url).href,
  },
  {
    id: 2,
    titleKey: 'projects.numi.title',
    descriptionKey: 'projects.numi.description',
    altKey: 'projects.numi.alt',
    image: new URL('../assets/project-numi.webp', import.meta.url).href,
  },
  {
    id: 3,
    titleKey: 'projects.graphics.title',
    altKey: 'projects.graphics.alt',
    image: new URL('../assets/project-graphics.webp', import.meta.url).href,
  },
]

function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <main class="portfolio">
    <div class="portfolio__layout">
      <aside class="profile">
        <img class="profile__avatar" src="../assets/avatar.webp" :alt="t('home.avatarAlt')" />

        <div class="profile__content">
          <h1 class="profile__name">
            {{ t('home.name') }}
          </h1>

          <div class="profile__details">
            <p>{{ t('home.location') }}</p>
            <p>{{ t('home.profession') }}</p>
          </div>

          <nav class="profile__contacts" :aria-label="t('accessibility.contacts')">
            <a class="button" href="/maxim-bobkov-cv.pdf" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">▣</span>
              {{ t('contacts.cv') }}
            </a>

            <a
              class="button"
              href="https://t.me/maksimskt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">➤</span>
              {{ t('contacts.telegram') }}
            </a>

            <a class="button" href="mailto:maksim.you11@gmail.com">
              <span aria-hidden="true">✉</span>
              {{ t('contacts.mail') }}
            </a>
          </nav>

          <p class="mobile-message">
            {{ t('home.mobileNotice') }}
          </p>

          <LanguageSwitcher />
        </div>
      </aside>

      <section class="projects" :aria-label="t('accessibility.projects')">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-card__image-wrapper">
            <img class="project-card__image" :src="project.image" :alt="t(project.altKey)" />
          </div>

          <div class="project-card__content">
            <h2 class="project-card__title">
              {{ t(project.titleKey) }}
            </h2>

            <p v-if="project.descriptionKey" class="project-card__description">
              {{ t(project.descriptionKey) }}
            </p>

            <button class="project-card__button" type="button">
              {{ t('actions.openCase') }}
            </button>
          </div>
        </article>
      </section>
    </div>

    <button class="scroll-top" type="button" @click="scrollToTop">
      <span aria-hidden="true">↑</span>
      {{ t('actions.scrollTop') }}
    </button>
  </main>
</template>
