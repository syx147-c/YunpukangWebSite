<template>
  <div class="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-sm">
    <div class="flex gap-2 overflow-x-auto pb-2">
      <button
        v-for="(item, index) in items"
        :key="item.title"
        type="button"
        class="min-h-11 shrink-0 rounded-xl px-4 text-sm font-semibold transition"
        :class="index === active ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-soft)] text-[var(--color-muted)] hover:bg-cyan-50 hover:text-[var(--color-primary)]'"
        @click="active = index"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="mt-5 rounded-[20px] bg-[var(--color-soft)] p-5">
      <h3 class="text-lg font-semibold text-[var(--color-title)]">{{ items[active]?.title }}</h3>
      <p class="mt-3 text-sm leading-6 text-[var(--color-muted)]">{{ items[active]?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CardItem } from '../../types/content'

defineProps<{ items: CardItem[] }>()
const active = ref(0)
</script>
