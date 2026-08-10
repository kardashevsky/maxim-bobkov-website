<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

interface Props {
  slug: string
  titleKey: string
  descriptionKey?: string
  altKey: string
  image: string
}

defineProps<Props>()

const { t } = useI18n()
</script>

<template>
  <article class="project-card">
    <div class="project-card__media">
      <img class="project-card__image" :src="image" :alt="t(altKey)" />
    </div>

    <div class="project-card__content">
      <div class="project-card__text">
        <h2 class="project-card__title">
          {{ t(titleKey) }}
        </h2>

        <p v-if="descriptionKey" class="project-card__description">
          {{ t(descriptionKey) }}
        </p>
      </div>

      <RouterLink
        class="project-card__button"
        :to="{
          name: 'project',
          params: { slug },
        }"
      >
        {{ t('actions.openCase') }}
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  box-sizing: border-box;

  width: 100%;
  max-width: 870px;
  padding: 43px 42px 44px;

  background: #ffffff;
  border: 2px solid rgba(63, 63, 63, 0.2);
  border-radius: 50px;
}

.project-card__media {
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  aspect-ratio: 782 / 528;
  padding: 10px;

  overflow: hidden;

  background: #f6f5fa;
  border: 3px solid rgba(28, 132, 255, 0.3);
  border-radius: 20px;
}

.project-card__image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 10px;
}

.project-card__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 651px;

  gap: 40px;

  margin: 40px auto 0;
}

.project-card__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  gap: 20px;
}

.project-card__title {
  width: 100%;
  margin: 0;

  font-size: 30px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 0;

  color: #2d2d2d;
}

.project-card__description {
  width: 100%;
  margin: 0;

  font-size: 20px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0;

  color: #585858;
}

.project-card__button {
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 215px;
  height: 47px;

  padding: 9px 30px 10px;

  background: rgba(68, 108, 92, 0.2);
  border-radius: 10px;

  color: #4a4a4a;
  text-decoration: none;

  font-size: 25px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0;

  cursor: pointer;

  transition: background-color 160ms ease;
}

.project-card__button:hover {
  background: rgba(68, 108, 92, 0.3);
}

.project-card__button:focus-visible {
  outline: 2px solid #446c5c;
  outline-offset: 3px;
}

/* Laptop */

@media (max-width: 1440px) {
  .project-card {
    border-radius: 40px;
  }

  .project-card__content {
    max-width: 100%;
    padding-inline: 30px;
  }
}

/* Tablet */

@media (max-width: 1024px) {
  .project-card {
    padding: 30px;
    border-radius: 32px;
  }

  .project-card__media {
    padding: 8px;

    border-width: 2px;
    border-radius: 16px;
  }

  .project-card__content {
    gap: 30px;

    margin-top: 30px;
    padding-inline: 20px;
  }

  .project-card__text {
    gap: 16px;
  }

  .project-card__title {
    font-size: 26px;
  }

  .project-card__description {
    font-size: 18px;
  }

  .project-card__button {
    min-width: 190px;
    height: 44px;

    font-size: 22px;
  }
}

/* Mobile */

@media (max-width: 768px) {
  .project-card {
    display: none;
  }
}
</style>
