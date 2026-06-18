<template>
  <component
    :is="item.to ? RouterLink : 'div'"
    :to="item.to"
    class="group card-lift flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
  >
    <div v-if="item.meta" class="mb-4 inline-flex w-fit rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
      {{ item.meta }}
    </div>
    <h3 class="text-lg font-bold text-[var(--color-title)]">{{ item.title }}</h3>
    <p class="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">{{ item.description }}</p>
    <div v-if="item.cta || item.to" class="mt-auto pt-5 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-2)]">
      {{ item.cta ?? '查看详情' }} →
    </div>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { CardItem } from '../../types/content'

defineProps<{ item: CardItem }>()
</script>
