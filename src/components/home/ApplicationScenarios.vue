<template>
  <section class="bg-[var(--color-page)] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Applications</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-[var(--color-title)] md:text-5xl">围绕科研、临床与健康管理的应用场景</h2>
        </div>
        <p class="text-base leading-8 text-[var(--color-muted)] md:text-lg">
          用真实合作场景组织信息，让客户先判断"是否适合我的项目"，再进入送样指南、检测清单或咨询表单。
        </p>
      </div>

      <!-- Client type selector + detail panel -->
      <div
        class="mt-10 grid gap-6 lg:grid-cols-[0.54fr_1.46fr]"
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
        @focusin="pauseCarousel"
        @focusout="resumeCarousel"
      >
        <!-- Left: client type list -->
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          <button
            v-for="(group, index) in scenarioGroups"
            :key="group.title"
            type="button"
            class="rounded-2xl border px-5 py-4 text-left transition"
            :class="selectedScenario === index
              ? 'border-[var(--color-primary)] bg-white shadow-sm ring-1 ring-[var(--color-primary)]/20'
              : 'border-[var(--color-border)] bg-white hover:border-[var(--color-primary-2)] hover:shadow-sm'"
            :aria-pressed="selectedScenario === index"
            @click="selectScenario(index)"
          >
            <h3 class="text-base font-bold text-[var(--color-title)]">{{ group.title }}</h3>
            <p class="mt-1 line-clamp-2 text-xs leading-5 text-[var(--color-muted)]">{{ group.description }}</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span v-for="tag in group.tags.slice(0, 2)" :key="tag" class="rounded-full bg-[var(--color-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-primary)]">
                {{ tag }}
              </span>
              <span v-if="group.tags.length > 2" class="text-[11px] text-[var(--color-muted)] self-center">+{{ group.tags.length - 2 }}</span>
            </div>
          </button>
        </div>

        <!-- Right: selected scenario detail + resource center -->
        <div class="flex flex-col gap-6">
          <!-- Selected scenario detail -->
          <div class="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">场景详情</p>
                <h3 class="mt-2 text-xl font-bold text-[var(--color-title)]">{{ activeGroup.title }}</h3>
                <p class="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-muted)]">{{ activeGroup.detail }}</p>
              </div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="tag in activeGroup.tags" :key="tag" class="rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                {{ tag }}
              </span>
            </div>
            <RouterLink
              :to="activeGroup.to ?? '/'"
              class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-2)] transition"
            >
              进入{{ activeGroup.title }}服务
              <span class="text-base">→</span>
            </RouterLink>
          </div>

          <!-- Resource center (simplified) -->
          <div class="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">Resource Center</p>
            <h3 class="mt-2 text-lg font-bold text-[var(--color-title)]">常用资料与方案</h3>
            <div class="mt-4 grid gap-3">
              <div v-for="item in resourceCenter" :key="item.title" class="flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-soft)]/60 p-3">
                <div>
                  <h4 class="text-sm font-semibold text-[var(--color-title)]">{{ item.title }}</h4>
                  <p class="mt-0.5 line-clamp-1 text-xs leading-5 text-[var(--color-muted)]">{{ item.description }}</p>
                </div>
                <component
                  :is="item.cta.to ? RouterLink : 'button'"
                  :to="item.cta.to"
                  :type="item.cta.to ? undefined : 'button'"
                  class="shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-white transition"
                  @click="handleResourceCta(item.cta)"
                >
                  {{ item.cta.label }}
                </component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { resourceCenter, scenarioGroups } from '../../data/home'
import type { CTA } from '../../types/content'
import { useContactModal } from '../../composables/useContactModal'

const selectedScenario = ref(0)
const isCarouselPaused = ref(false)
const carouselIntervalMs = 6000
let carouselTimer: ReturnType<typeof setInterval> | undefined
const activeGroup = computed(() => scenarioGroups[selectedScenario.value])

const { openContactModal } = useContactModal()

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function stopCarousel() {
  if (carouselTimer !== undefined) {
    window.clearInterval(carouselTimer)
    carouselTimer = undefined
  }
}

function startCarousel() {
  stopCarousel()
  if (prefersReducedMotion()) return

  carouselTimer = window.setInterval(() => {
    selectedScenario.value = (selectedScenario.value + 1) % scenarioGroups.length
  }, carouselIntervalMs)
}

function selectScenario(index: number) {
  selectedScenario.value = index
  if (!isCarouselPaused.value) startCarousel()
}

function pauseCarousel() {
  isCarouselPaused.value = true
  stopCarousel()
}

function resumeCarousel() {
  isCarouselPaused.value = false
  startCarousel()
}

function handleResourceCta(cta: CTA) {
  if (cta.action === 'contact') {
    openContactModal(cta.label)
  }
}

onMounted(startCarousel)
onBeforeUnmount(stopCarousel)
</script>
