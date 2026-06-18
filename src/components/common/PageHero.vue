<template>
  <section class="science-field relative isolate overflow-hidden border-b border-[var(--color-border)] pt-28 text-[var(--color-title)] md:pt-32">
    <div class="absolute inset-0 -z-10 medical-grid opacity-50"></div>
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">{{ hero.eyebrow }}</p>
        <h1 class="mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{{ hero.title }}</h1>
        <p class="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] md:text-lg">{{ hero.description }}</p>
        <div v-if="hero.ctas?.length" class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BaseButton v-for="cta in hero.ctas" :key="cta.label" :cta="cta" />
        </div>
      </div>
      <div class="subtle-panel hidden min-h-72 p-6 md:block">
        <div class="spectrum-soft molecule-line-art h-full rounded-[22px] border border-[var(--color-border)] bg-white p-6">
          <div class="grid h-full grid-cols-3 gap-3">
            <span v-for="index in 9" :key="index" class="rounded-2xl bg-[var(--color-soft)]"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageHero } from '../../types/content'
import BaseButton from './BaseButton.vue'

defineProps<{ hero: PageHero }>()
</script>
