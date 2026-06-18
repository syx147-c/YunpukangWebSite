<template>
  <div class="mx-auto mb-8 max-w-3xl text-center md:mb-12">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">{{ eyebrow }}</p>
    <h2 class="mt-3 text-2xl font-bold leading-tight text-[var(--color-title)] md:text-4xl">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-[var(--color-muted)] md:text-lg">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>
