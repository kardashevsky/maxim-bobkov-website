<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { config } from '@/config'

import cvIcon from '@/assets/icons/cv.svg'
import telegramIcon from '@/assets/icons/telegram.svg'
import mailIcon from '@/assets/icons/mail.svg'

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

const { t, locale } = useI18n()

const cvUrl = computed(() => (locale.value === 'ru' ? config.links.cv.ru : config.links.cv.en))

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
              <img class="button__icon" :src="cvIcon" alt="" aria-hidden="true" />
              {{ t('contacts.cv') }}
            </a>

            <a
              class="button"
              :href="config.links.telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="button__icon" :src="telegramIcon" alt="" aria-hidden="true" />
              {{ t('contacts.telegram') }}
            </a>

            <a class="button" :href="config.links.email">
              <img class="button__icon" :src="mailIcon" alt="" aria-hidden="true" />
              {{ t('contacts.mail') }}
            </a>
          </nav>

          <p class="mobile-message">
            {{ t('home.mobileNotice') }}
          </p>

          <LanguageSwitcher class="profile__language" />
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

<style scoped>
.profile__language {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}

/* Mobile */
@media (max-width: 700px) {
  .mobile-message {
    display: block;
    max-width: 620px;
    margin: 88px auto 0;

    color: var(--accent);

    text-align: center;

    font-size: clamp(22px, 6.4vw, 34px);
    font-weight: 500;
    line-height: 1.26;
  }

  .profile__language {
    justify-content: center;
    width: 100%;
    margin-top: 30px;
  }

  :deep(.language-switcher) {
    justify-content: center;
  }
}
</style>
