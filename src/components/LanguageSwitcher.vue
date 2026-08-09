<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import flagRu from '@/assets/icons/flag-ru.svg'
import flagEn from '@/assets/icons/flag-en.svg'
import languageArrow from '@/assets/icons/language-arrow.svg'

const { locale } = useI18n()

const isRussian = computed(() => locale.value === 'ru')

function setLocale(value: 'ru' | 'en'): void {
  locale.value = value
  localStorage.setItem('locale', value)
  document.documentElement.lang = value
}
</script>

<template>
  <div class="language-switcher" role="group" aria-label="Выбор языка">
    <button
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': isRussian }"
      type="button"
      :aria-pressed="isRussian"
      @click="setLocale('ru')"
    >
      <img class="language-switcher__flag" :src="flagRu" alt="" aria-hidden="true" />

      <span>RUS</span>
    </button>

    <img
      class="language-switcher__arrow"
      :class="{ 'language-switcher__arrow--reverse': !isRussian }"
      :src="languageArrow"
      alt=""
      aria-hidden="true"
    />

    <button
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': !isRussian }"
      type="button"
      :aria-pressed="!isRussian"
      @click="setLocale('en')"
    >
      <img class="language-switcher__flag" :src="flagEn" alt="" aria-hidden="true" />

      <span>ENG</span>
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.language-switcher__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 66px;
  height: 32px;
  padding: 10px;

  border: 0;
  border-radius: 10px;

  background: transparent;
  color: #4a4a4a;

  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 110%;

  cursor: pointer;
}

.language-switcher__button--active {
  background: #dae2da;
}

.language-switcher__flag {
  display: block;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.language-switcher__arrow {
  display: block;
  width: 5px;
  height: 19px;
  flex-shrink: 0;

  transition: transform 160ms ease;
}

.language-switcher__arrow--reverse {
  transform: scaleX(-1);
}
</style>
