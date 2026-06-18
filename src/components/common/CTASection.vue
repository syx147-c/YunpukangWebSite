<template>
  <section class="relative overflow-hidden bg-[var(--color-page)] px-4 py-20 text-[var(--color-title)] sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-6xl rounded-[24px] border border-[var(--color-border)] bg-white px-6 py-14 text-center shadow-sm sm:px-10 lg:px-16">
      <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Start a Project</p>
      <h2 class="mt-4 text-3xl font-bold leading-tight md:text-5xl">{{ title }}</h2>
      <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] md:text-lg">{{ description }}</p>
      <div class="mx-auto mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2" data-cta-group>
        <BaseButton
          v-for="(action, index) in actions"
          :key="action.label"
          :cta="action"
          :variant="activeIndex === index ? 'primary' : 'ghost'"
          @activate="activeIndex = index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { CTA } from '../../types/content'
import BaseButton from './BaseButton.vue'

const props = defineProps<{
  title: string
  description: string
  actions: CTA[]
}>()

const activeIndex = ref(0)
let rotationTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  rotationTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.actions.length
  }, 3600)
})

onUnmounted(() => {
  clearInterval(rotationTimer)
})
</script>
