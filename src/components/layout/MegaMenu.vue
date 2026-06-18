<template>
  <div
    class="absolute left-0 right-0 top-full z-50 hidden border-t border-[var(--color-border)] bg-white text-[var(--color-title)] shadow-2xl shadow-slate-200/80 lg:block"
    @mouseenter="$emit('enter')"
    @mouseleave="$emit('leave')"
  >
    <div class="mx-auto grid max-w-7xl grid-cols-[240px_1fr_360px] gap-0 px-6 py-6">
      <!-- Left column -->
      <div class="border-r border-slate-200 pr-4">
        <!-- Categorized menu: show only secondary titles -->
        <template v-if="group.categories?.length">
          <button
            v-for="cat in group.categories"
            :key="cat.label"
            type="button"
            class="block w-full rounded-md px-4 py-3 text-left text-sm font-semibold transition"
            :class="cat.label === activeCategory.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:text-[var(--color-title)]'"
            @mouseenter="onCategoryHover(cat)"
            @focus="onCategoryHover(cat)"
          >
            {{ cat.label }}
          </button>
        </template>
        <!-- Flat menu: show all items (existing behavior) -->
        <template v-else>
          <template v-for="item in group.items" :key="item.label">
            <a
              v-if="isExternalUrl(item.path)"
              :href="item.path"
              target="_blank"
              rel="noopener noreferrer"
              class="block rounded-md px-4 py-3 text-sm font-semibold transition"
              :class="item.label === activeItem.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:text-[var(--color-title)]'"
              @mouseenter="$emit('select', item.label)"
              @focus="$emit('select', item.label)"
            >
              {{ item.label }}
            </a>
            <RouterLink
              v-else
              :to="item.path"
              class="block rounded-md px-4 py-3 text-sm font-semibold transition"
              :class="item.label === activeItem.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:text-[var(--color-title)]'"
              @mouseenter="$emit('select', item.label)"
              @focus="$emit('select', item.label)"
              @click="$emit('navigate')"
            >
              {{ item.label }}
            </RouterLink>
          </template>
        </template>
      </div>

      <!-- Middle column: categorized menu -->
      <div v-if="group.categories?.length" class="px-7 py-2">
        <p class="text-sm font-semibold text-[var(--color-primary)]">{{ activeCategory.label }}</p>
        <div class="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
          <div v-for="item in activeCategory.items" :key="item.label" class="min-w-0">
            <component
              :is="isExternalUrl(item.path) ? 'a' : RouterLink"
              :href="isExternalUrl(item.path) ? item.path : undefined"
              :target="isExternalUrl(item.path) ? '_blank' : undefined"
              :rel="isExternalUrl(item.path) ? 'noopener noreferrer' : undefined"
              :to="isExternalUrl(item.path) ? undefined : item.path"
              class="block rounded-md px-3 py-2 text-sm font-semibold transition"
              :class="hoveredLabel === item.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-title)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)]'"
              @mouseenter="onItemHover(item)"
              @focus="onItemHover(item)"
              @click="!isExternalUrl(item.path) && $emit('navigate')"
            >
              {{ item.label }}
            </component>
            <div v-if="item.children?.length" class="mt-1 space-y-1 border-l border-slate-200 pl-3">
              <div v-for="child in item.children" :key="`${item.label}-${child.label}`">
                <component
                  :is="isExternalUrl(child.path) ? 'a' : RouterLink"
                  :href="isExternalUrl(child.path) ? child.path : undefined"
                  :target="isExternalUrl(child.path) ? '_blank' : undefined"
                  :rel="isExternalUrl(child.path) ? 'noopener noreferrer' : undefined"
                  :to="isExternalUrl(child.path) ? undefined : child.path"
                  class="block rounded-md px-3 py-1.5 text-xs font-semibold transition"
                  :class="hoveredLabel === child.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:text-[var(--color-title)]'"
                  @mouseenter="onItemHover(child)"
                  @focus="onItemHover(child)"
                  @click="!isExternalUrl(child.path) && $emit('navigate')"
                >
                  {{ child.label }}
                </component>
                <div v-if="child.children?.length" class="mt-1 grid grid-cols-1 gap-1 pl-3">
                  <component
                    v-for="grandchild in child.children"
                    :key="`${item.label}-${child.label}-${grandchild.label}`"
                    :is="isExternalUrl(grandchild.path) ? 'a' : RouterLink"
                    :href="isExternalUrl(grandchild.path) ? grandchild.path : undefined"
                    :target="isExternalUrl(grandchild.path) ? '_blank' : undefined"
                    :rel="isExternalUrl(grandchild.path) ? 'noopener noreferrer' : undefined"
                    :to="isExternalUrl(grandchild.path) ? undefined : grandchild.path"
                    class="block rounded-md px-3 py-1.5 text-xs transition"
                    :class="hoveredLabel === grandchild.label ? 'bg-[var(--color-soft)] text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-primary)]'"
                    @mouseenter="onItemHover(grandchild)"
                    @focus="onItemHover(grandchild)"
                    @click="!isExternalUrl(grandchild.path) && $emit('navigate')"
                  >
                    {{ grandchild.label }}
                  </component>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 border-t border-slate-100 pt-4">
          <h2 class="text-lg font-bold text-[var(--color-title)]">{{ displayItem.title }}</h2>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">{{ displayItem.description }}</p>
          <div class="mt-4">
            <BaseButton :cta="displayItem.cta" variant="ghost" @navigate="$emit('navigate')" />
          </div>
        </div>
      </div>

      <!-- Middle column: flat menu -->
      <div v-else class="px-7 py-2">
        <p class="text-sm font-semibold text-[var(--color-primary)]">{{ group.label }}</p>
        <span
          v-if="activeItem.badge"
          class="mt-3 inline-block rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]"
        >
          {{ activeItem.badge }}
        </span>
        <h2 class="mt-2 text-2xl font-bold text-[var(--color-title)]">{{ activeItem.title }}</h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">{{ activeItem.description }}</p>
        <div class="mt-7">
          <template v-if="isExternalUrl(activeItem.path)">
            <a
              :href="activeItem.path"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-soft)]"
            >
              {{ activeItem.cta.label }}
              <span aria-hidden="true">↗</span>
            </a>
          </template>
          <BaseButton v-else :cta="activeItem.cta" variant="ghost" @navigate="$emit('navigate')" />
        </div>
      </div>

      <!-- Right column: Visual panel (unchanged) -->
      <div class="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-5">
        <div class="molecule-line-art spectrum-soft min-h-56 rounded-[18px] border border-[var(--color-border)] bg-white p-5">
          <div class="relative z-10">
            <p class="text-sm font-semibold text-[var(--color-primary)]">{{ group.visual.theme }}</p>
            <h3 class="mt-3 text-xl font-bold text-[var(--color-title)]">{{ group.visual.title }}</h3>
            <p class="mt-4 text-sm leading-6 text-[var(--color-muted)]">{{ group.visual.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { MegaMenuCategory, MegaMenuGroup, MegaMenuItem } from '../../types/content'
import BaseButton from '../common/BaseButton.vue'

const props = defineProps<{
  group: MegaMenuGroup
  selectedLabel: string
}>()

const emit = defineEmits<{
  select: [label: string]
  enter: []
  leave: []
  navigate: []
}>()

// ---- external URL detection ----

function isExternalUrl(path: string): boolean {
  return /^https?:\/\//.test(path)
}

// ---- categorized menu logic ----

const hoveredLabel = ref('')

const activeCategory = computed(() => {
  if (!props.group.categories?.length) {
    return { label: '', items: [] as MegaMenuItem[] }
  }
  const cats = props.group.categories
  // Match selectedLabel to a category, or find which category contains the item
  const direct = cats.find((c) => c.label === props.selectedLabel)
  if (direct) return direct
  const parent = cats.find((c) => findMegaItem(c.items, props.selectedLabel))
  return parent ?? cats[0]
})

const displayItem = computed(() => {
  const items = activeCategory.value.items
  if (!items.length) return { title: '', description: '', cta: { label: '' } } as MegaMenuItem
  if (hoveredLabel.value) {
    return findMegaItem(items, hoveredLabel.value) ?? items[0]
  }
  return items[0]
})

function onCategoryHover(cat: MegaMenuCategory) {
  emit('select', cat.label)
  hoveredLabel.value = ''
}

function onItemHover(item: MegaMenuItem) {
  emit('select', item.label)
  hoveredLabel.value = item.label
}

function findMegaItem(items: MegaMenuItem[], label: string): MegaMenuItem | undefined {
  for (const item of items) {
    if (item.label === label) return item
    const child = item.children ? findMegaItem(item.children, label) : undefined
    if (child) return child
  }
  return undefined
}

// ---- flat menu logic (unchanged) ----

const activeItem = computed(() => {
  return props.group.items.find((item) => item.label === props.selectedLabel) ?? props.group.items[0]
})
</script>
