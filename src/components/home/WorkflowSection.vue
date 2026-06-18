<template>
  <section class="relative overflow-hidden bg-[var(--color-page)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="absolute inset-0 medical-grid opacity-55"></div>
    <div class="relative mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Sample to Insight</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-[var(--color-title)] md:text-5xl">从样本到分子数据，再到可讨论的研究结论</h2>
        </div>
        <p class="text-base leading-8 text-[var(--color-muted)] md:text-lg">
          围绕代谢组学和临床质谱平台，将项目沟通、实验设计、样本检测、数据分析和转化讨论组织成清晰的服务路径。
        </p>
      </div>

      <!-- Tab selector -->
      <div
        class="relative mt-8 sm:mt-10"
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
        @focusin="pauseCarousel"
        @focusout="resumeCarousel"
      >
        <div ref="tabScroller" class="mobile-snap-track overflow-x-auto pb-2 pr-10 sm:pr-0">
          <div class="flex min-w-max gap-2 rounded-full border border-[var(--color-border)] bg-white p-2 shadow-sm" role="tablist" aria-label="业务场景轮播">
          <button
            v-for="(tab, index) in workflowTabs"
            :key="tab.title"
            ref="tabButtons"
            type="button"
            role="tab"
            class="min-h-12 shrink-0 rounded-full px-5 text-sm font-semibold transition sm:px-7"
            :class="activeTab === index ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-slate-200' : 'text-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)]'"
            :aria-selected="activeTab === index"
            @click="selectTab(index)"
          >
            {{ tab.title }}
          </button>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--color-page)] via-[var(--color-page)]/90 to-transparent sm:hidden" aria-hidden="true"></div>
      </div>

      <!-- Capability summary row -->
      <div class="mt-8 hidden gap-4 lg:grid lg:grid-cols-3">
        <div v-for="block in tabBlocks" :key="block.label" class="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">{{ block.label }}</p>
          <p class="mt-2 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">{{ block.value }}</p>
        </div>
      </div>

      <details class="group mt-6 rounded-2xl border border-[var(--color-border)] bg-white/90 shadow-sm lg:hidden">
        <summary class="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-semibold text-[var(--color-title)]">
          <span>本次合作如何形成数据证据</span>
          <span class="text-[var(--color-primary)] transition group-open:rotate-45" aria-hidden="true">＋</span>
        </summary>
        <div class="border-t border-[var(--color-border)] px-4 py-4">
          <p class="text-sm leading-6 text-[var(--color-muted)]">{{ mobileValueNarrative }}</p>
          <dl class="mt-4 grid gap-3">
            <div v-for="block in tabBlocks" :key="`mobile-${block.label}`" class="grid grid-cols-[76px_1fr] gap-3">
              <dt class="text-xs font-semibold text-[var(--color-primary)]">{{ block.label }}</dt>
              <dd class="text-xs leading-5 text-[var(--color-muted)]">{{ block.value }}</dd>
            </div>
          </dl>
        </div>
      </details>

      <!-- Pipeline flow: horizontal process line -->
      <div class="mt-8 lg:mt-10">
        <h3 class="mb-6 text-lg font-bold text-[var(--color-title)] md:text-xl">{{ currentHeadline }}</h3>

        <!-- Desktop: horizontal pipeline -->
        <div class="relative hidden lg:block">
          <!-- Main flow line -->
          <div class="absolute left-[8%] right-[8%] top-10 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-primary)]/30 to-[var(--color-primary)]/10"></div>
          <!-- Flow nodes -->
          <div class="grid grid-cols-4 gap-6">
            <div v-for="(step, index) in workflowSteps.slice(0, 4)" :key="step.title" class="relative flex flex-col items-center text-center">
              <!-- Node circle -->
              <div class="relative z-10 flex size-12 items-center justify-center rounded-full bg-white border-2 border-[var(--color-primary)] text-sm font-bold text-[var(--color-primary)] shadow-[0_0_0_6px_rgba(255,255,255,0.9)]">
                {{ index + 1 }}
              </div>
              <!-- Step content -->
              <div class="mt-4 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm w-full">
                <h4 class="text-sm font-bold text-[var(--color-title)]">{{ step.title }}</h4>
                <p class="mt-1.5 line-clamp-2 text-xs leading-5 text-[var(--color-muted)]">{{ step.description }}</p>
              </div>
            </div>
          </div>
          <!-- Progress arrow indicators between nodes -->
          <div class="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-10 flex items-center justify-between px-[calc((100%-4*48px)/8)] pointer-events-none">
            <span v-for="n in 3" :key="n" class="text-[var(--color-primary)]/30 text-lg">→</span>
          </div>
        </div>

        <!-- Mobile: vertical flow with connecting line -->
        <div class="relative lg:hidden">
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/15"></div>
          <div class="space-y-3">
            <div v-for="(step, index) in mobileWorkflowSteps" :key="step.title" class="relative flex gap-3 pl-12">
              <div class="absolute left-0 flex size-12 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-white text-sm font-bold text-[var(--color-primary)] shadow-[0_0_0_4px_rgba(255,255,255,0.9)]">
                {{ index + 1 }}
              </div>
              <div class="flex-1 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
                <h4 class="text-sm font-bold text-[var(--color-title)]">{{ step.title }}</h4>
                <p class="mt-1 text-xs leading-5 text-[var(--color-muted)]">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Remaining steps summary + "查看完整流程" link -->
        <div class="mt-6 hidden items-center gap-3 rounded-2xl border border-dashed border-[var(--color-border)] bg-white/70 px-5 py-3 lg:flex">
          <span class="text-xs text-[var(--color-muted)]">后续步骤：</span>
          <span v-for="step in workflowSteps.slice(4, 7)" :key="step.title" class="rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">{{ step.title }}</span>
          <RouterLink :to="currentTab.ctas[1]?.to ?? '/research-services'" class="ml-auto shrink-0 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-2)]">
            查看完整流程 →
          </RouterLink>
        </div>
        <div class="mt-4 flex min-h-11 items-center justify-between gap-3 rounded-xl border border-dashed border-[var(--color-border)] bg-white/70 px-4 lg:hidden">
          <span class="text-xs text-[var(--color-muted)]">完整七步项目路径</span>
          <RouterLink :to="currentTab.ctas[1]?.to ?? '/research-services'" class="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-2)]">
            查看完整流程 →
          </RouterLink>
        </div>
      </div>

      <!-- CTAs -->
      <div class="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
        <template v-for="(cta, index) in currentTab.ctas" :key="cta.label">
          <BaseButton v-if="index === 0" :cta="cta" variant="primary" />
          <component
            :is="cta.to ? RouterLink : 'button'"
            v-else
            :to="cta.to"
            :type="cta.to ? undefined : 'button'"
            :class="secondaryCtaClass"
            @click="handleSecondaryCta(cta)"
          >
            {{ cta.label }}
          </component>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { workflowSteps, workflowTabs } from '../../data/home'
import type { CTA } from '../../types/content'
import BaseButton from '../common/BaseButton.vue'
import { useContactModal } from '../../composables/useContactModal'

const activeTab = ref(0)
const tabScroller = ref<HTMLDivElement | null>(null)
const tabButtons = ref<HTMLButtonElement[]>([])
const isCarouselPaused = ref(false)
const carouselIntervalMs = 6000
let carouselTimer: ReturnType<typeof setInterval> | undefined
const currentTab = computed(() => workflowTabs[activeTab.value])
const currentHeadline = computed(() =>
  currentTab.value.title === '科研服务'
    ? '从样本检测到机制与标志物洞察'
    : currentTab.value.title === '临床质谱'
      ? '从检测方法到临床质谱合作路径'
      : currentTab.value.title === '健康管理'
        ? '从一次检测到长期健康趋势追踪'
        : '从科研发现到标志物验证与产品转化',
)
const tabBlocks = computed(() => [
  { label: '客户问题', value: currentTab.value.problem },
  { label: '云谱康能力', value: currentTab.value.capability },
  { label: '交付结果', value: currentTab.value.deliverable },
])
const mobileValueNarrative = computed(() =>
  `样本进入${currentTab.value.title}路径后，经过方案匹配、标准化检测、质控分析和结果解释，形成可用于科研讨论、临床验证或项目转化的数据证据。`,
)
const mobileWorkflowSteps = [
  { title: '项目输入', description: '明确研究问题、样本条件与预期交付。' },
  { title: '检测分析', description: '完成标准化检测、质量控制与多组学分析。' },
  { title: '洞察交付', description: '将数据转化为统计结果、通路解释与可讨论证据。' },
  { title: '后续转化', description: '支持科研深化、临床验证与产品转化讨论。' },
]
const { openContactModal } = useContactModal()
const secondaryCtaClass =
  'inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary-2)] hover:bg-[var(--color-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-2)] focus:ring-offset-2'

function selectTab(index: number) {
  activeTab.value = index
  scrollActiveTabIntoView(index)
  if (!isCarouselPaused.value) startCarousel()
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollActiveTabIntoView(index: number) {
  void nextTick(() => {
    const scroller = tabScroller.value
    const button = tabButtons.value[index]
    if (!scroller || !button) return

    const centeredLeft = button.offsetLeft - (scroller.clientWidth - button.offsetWidth) / 2
    const maxLeft = scroller.scrollWidth - scroller.clientWidth
    scroller.scrollTo({
      left: Math.min(maxLeft, Math.max(0, centeredLeft)),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  })
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
    const nextIndex = (activeTab.value + 1) % workflowTabs.length
    activeTab.value = nextIndex
    scrollActiveTabIntoView(nextIndex)
  }, carouselIntervalMs)
}

function pauseCarousel() {
  isCarouselPaused.value = true
  stopCarousel()
}

function resumeCarousel() {
  isCarouselPaused.value = false
  startCarousel()
}

function handleSecondaryCta(cta: CTA) {
  if (cta.action === 'contact') {
    openContactModal(cta.label)
  }
}

onMounted(startCarousel)
onBeforeUnmount(stopCarousel)
</script>
