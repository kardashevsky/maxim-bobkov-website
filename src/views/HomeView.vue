<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ProjectCard from '@/components/ProjectCard.vue'

interface Project {
  id: number
  slug: string
  titleKey: string
  descriptionKey?: string
  altKey: string
  image: string
}

const { t } = useI18n()

const cvUrl = `${import.meta.env.BASE_URL}maxim-bobkov-cv.pdf`

const projects: Project[] = [
  {
    id: 1,
    slug: 'glaspro',
    titleKey: 'projects.glaspro.title',
    descriptionKey: 'projects.glaspro.description',
    altKey: 'projects.glaspro.alt',
    image: new URL('../assets/project-glaspro.webp', import.meta.url).href,
  },
  {
    id: 2,
    slug: 'numi',
    titleKey: 'projects.numi.title',
    descriptionKey: 'projects.numi.description',
    altKey: 'projects.numi.alt',
    image: new URL('../assets/project-numi.webp', import.meta.url).href,
  },
  {
    id: 3,
    slug: 'graphics',
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
            <a class="button" :href="cvUrl" target="_blank" rel="noopener noreferrer">
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
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :slug="project.slug"
          :title-key="project.titleKey"
          :description-key="project.descriptionKey"
          :alt-key="project.altKey"
          :image="project.image"
        />
      </section>
    </div>

    <button class="scroll-top" type="button" @click="scrollToTop">
      <span aria-hidden="true">↑</span>
      {{ t('actions.scrollTop') }}
    </button>
  </main>
</template>
