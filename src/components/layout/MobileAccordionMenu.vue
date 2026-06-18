<template>
  <div class="space-y-1">
    <div
      v-for="item in items"
      :key="item.label"
      :class="nested ? 'rounded-xl bg-white/60' : 'rounded-2xl border border-[var(--color-border)] bg-white'"
    >
      <div class="flex items-center justify-between">
        <a
          v-if="isExternalUrl(item.path)"
          :href="item.path"
          target="_blank"
          rel="noopener noreferrer"
          class="min-h-11 flex-1 px-4 py-3 font-semibold text-[var(--color-title)]"
          :class="nested ? 'text-sm' : 'text-base'"
        >
          {{ item.label }}
        </a>
        <RouterLink
          v-else
          :to="item.path"
          class="min-h-11 flex-1 px-4 py-3 font-semibold text-[var(--color-title)]"
          :class="nested ? 'text-sm' : 'text-base'"
          @click="$emit('navigate')"
        >
          {{ item.label }}
        </RouterLink>
        <button
          v-if="item.children?.length"
          type="button"
          class="min-h-11 px-4 text-[var(--color-muted)]"
          :class="nested ? 'text-xs' : 'text-sm'"
          :aria-expanded="openLabel === item.label"
          @click="toggle(item.label)"
        >
          {{ openLabel === item.label ? '收起' : '展开' }}
        </button>
      </div>
      <Transition name="accordion">
        <div
          v-if="item.children?.length && openLabel === item.label"
          class="space-y-1 border-t border-[var(--color-border)] bg-[var(--color-soft)] px-3 py-2"
        >
          <MobileAccordionMenu :items="item.children" nested @navigate="$emit('navigate')" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { NavChild, NavItem } from '../../types/content'

defineOptions({ name: 'MobileAccordionMenu' })

withDefaults(defineProps<{ items: Array<NavItem | NavChild>; nested?: boolean }>(), {
  nested: false,
})
defineEmits<{ navigate: [] }>()

const openLabel = ref('')

function isExternalUrl(path: string): boolean {
  return /^https?:\/\//.test(path)
}

function toggle(label: string) {
  openLabel.value = openLabel.value === label ? '' : label
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
