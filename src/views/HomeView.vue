<script setup lang="ts">
interface Project {
  id: number
  title: string
  description?: string
  image: string
  alt: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ГласПро',
    description:
      'Сервис с ИИ-ассистентом для записи и анализа встреч и планерок. Бот записывает и делает резюме содержимого встречи',
    image: new URL('../assets/project-glaspro.webp', import.meta.url).href,
    alt: 'Интерфейс сервиса ГласПро',
  },
  {
    id: 2,
    title: 'NUMI',
    description:
      'Мобильное приложение — финансовый помощник и аналитик доходов и расходов. Планирование бюджета, целей и накоплений',
    image: new URL('../assets/project-numi.webp', import.meta.url).href,
    alt: 'Мобильное приложение NUMI',
  },
  {
    id: 3,
    title: 'Лендинги, презентации, креативы',
    image: new URL('../assets/project-graphics.webp', import.meta.url).href,
    alt: 'Подборка лендингов, презентаций и креативов',
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
        <img class="profile__avatar" src="../assets/avatar.webp" alt="Максим Бобков" />

        <div class="profile__content">
          <h1 class="profile__name">Максим Бобков</h1>

          <div class="profile__details">
            <p>Краснодар, 26 лет</p>
            <p>UX/UI дизайнер</p>
          </div>

          <nav class="profile__contacts" aria-label="Контакты">
            <a class="button" href="/maxim-bobkov-cv.pdf" target="_blank">
              <span aria-hidden="true">▣</span>
              CV
            </a>

            <a
              class="button"
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">➤</span>
              Telegram
            </a>

            <a class="button" href="mailto:mail@example.com">
              <span aria-hidden="true">✉</span>
              Mail
            </a>
          </nav>

          <div class="mobile-message">
            Привет! Мобильная версия пока в разработке, пожалуйста, посмотри портфолио через браузер
            на ПК :)
          </div>

          <div class="language-switcher" aria-label="Выбор языка">
            <button class="language-switcher__button language-switcher__button--active">
              🇷🇺 RUS
            </button>

            <span>/</span>

            <button class="language-switcher__button" disabled>🇬🇧 EN</button>
          </div>
        </div>
      </aside>

      <section class="projects" aria-label="Проекты">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-card__image-wrapper">
            <img class="project-card__image" :src="project.image" :alt="project.alt" />
          </div>

          <div class="project-card__content">
            <h2 class="project-card__title">{{ project.title }}</h2>

            <p v-if="project.description" class="project-card__description">
              {{ project.description }}
            </p>

            <button class="project-card__button" type="button">Открыть кейс</button>
          </div>
        </article>
      </section>
    </div>

    <button class="scroll-top" type="button" @click="scrollToTop">
      <span aria-hidden="true">↑</span>
      Наверх
    </button>
  </main>
</template>
