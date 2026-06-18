<template>
  <section
    v-for="(section, index) in sections"
    :key="section.title"
    class="px-4 py-14 sm:px-6 lg:px-8"
    :class="index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-page)]'"
  >
    <SectionHeader :title="section.title" :description="section.description" />
    <div
      class="mx-auto grid max-w-7xl gap-5"
      :class="section.layout === 'list' ? 'lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'"
    >
      <BaseCard v-for="item in section.items" :key="item.title" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageSection } from '../../types/content'
import BaseCard from './BaseCard.vue'
import SectionHeader from './SectionHeader.vue'

defineProps<{ sections: PageSection[] }>()
</script>
