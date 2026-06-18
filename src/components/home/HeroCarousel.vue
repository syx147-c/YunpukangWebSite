<template>
  <section class="science-field relative isolate overflow-hidden border-b border-[var(--color-border)] pt-[72px] text-[var(--color-ink)]">
    <div class="absolute inset-x-0 top-[72px] h-px bg-[var(--color-border)]"></div>
    <!-- Subtle molecular dot pattern -->
    <div class="hero-dot-field absolute inset-0 z-0 opacity-40" aria-hidden="true"></div>
    <div
      class="relative min-h-[620px] sm:min-h-[640px] md:min-h-[660px] lg:min-h-[720px]"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      @touchstart.passive="paused = true"
    >
      <Transition name="slide-fade" mode="out-in">
        <div :key="active" class="absolute inset-0">
          <video
            v-if="slide.video"
            class="hero-bg-video absolute inset-0 z-0 h-full w-full object-cover"
            :class="`hero-bg-video-${slide.theme}`"
            :src="slide.video"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            aria-hidden="true"
          ></video>
          <div class="hero-video-overlay absolute inset-0 z-0" :class="`hero-video-overlay-${slide.theme}`"></div>
          <!-- Text readability backdrop -->
          <div class="absolute inset-0 z-[1] bg-gradient-to-r from-white/26 via-white/12 to-transparent md:from-white/24 md:via-white/10 lg:to-transparent"></div>
          <div class="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-4 pb-24 pt-12 sm:min-h-[640px] sm:px-6 md:min-h-[660px] md:pt-14 lg:min-h-[720px] lg:px-8 lg:pt-16">
            <div class="max-w-[760px]">
              <h1 class="max-w-[12.8em] text-[2.35rem] font-bold leading-[1.06] text-[var(--color-ink)] text-balance [text-shadow:0_1px_6px_rgba(255,255,255,0.96),0_2px_12px_rgba(255,255,255,0.9)] sm:text-5xl md:text-[3.35rem] lg:text-6xl xl:text-7xl">
                {{ slide.title }}
              </h1>
              <p class="mt-5 max-w-[720px] text-base leading-8 text-[var(--color-body)] md:text-lg lg:text-xl line-clamp-3 [text-shadow:0_1px_6px_rgba(255,255,255,0.9),0_2px_8px_rgba(255,255,255,0.82)]">{{ slide.description }}</p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <component
                  v-for="(cta, index) in slide.ctas"
                  :key="cta.label"
                  :is="cta.to ? RouterLink : 'button'"
                  :to="cta.to"
                  :type="cta.to ? undefined : 'button'"
                  :class="index === 0 ? heroPrimaryButtonClass : heroOutlineButtonClass"
                  @click="handleCtaClick(cta)"
                >
                  <span class="relative z-10">{{ cta.label }}</span>
                </component>
              </div>
              <div class="mt-10 grid max-w-[760px] gap-3 sm:grid-cols-3 md:gap-4">
                <div v-for="item in heroSignals" :key="item.label" class="rounded-xl border border-[var(--color-border)] bg-white/95 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-5">
                  <strong class="block text-xl font-bold leading-none text-[var(--color-primary)]">{{ item.value }}</strong>
                  <span class="mt-3 block text-xs leading-5 text-[var(--color-body)] md:text-sm">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <div class="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
        <button
          v-for="(_, index) in heroSlides"
          :key="index"
          type="button"
          class="rounded-full transition-all duration-300"
          :class="index === active ? 'w-9 h-2.5 bg-[var(--color-primary)] shadow-md shadow-[rgba(10,77,99,0.28)] ring-2 ring-[var(--color-primary)]/20 scale-110' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[var(--color-primary-2)]/70 hover:scale-110'"
          :aria-label="`切换到第 ${index + 1} 张`"
          @click="go(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { heroSlides } from '../../data/home'
import type { CTA } from '../../types/content'
import { useContactModal } from '../../composables/useContactModal'

const active = ref(0)
const paused = ref(false)
const { openContactModal } = useContactModal()
let timer: ReturnType<typeof setTimeout> | undefined

const slide = computed(() => heroSlides[active.value])
const heroSignals = [
  { value: 'LC-MS/MS', label: '临床质谱与多组学平台' },
  { value: 'QC', label: '标准化质控与项目流程' },
  { value: '转化', label: '科研、临床与健康管理连接' },
]
const heroOutlineButtonClass =
  'inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary-2)] hover:bg-[var(--color-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-2)] focus:ring-offset-2'
const heroPrimaryButtonClass =
  'inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(21,94,117,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-2)] hover:shadow-[rgba(21,94,117,0.18)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-2)] focus:ring-offset-2'

function next() {
  active.value = (active.value + 1) % heroSlides.length
}

function pauseBriefly() {
  paused.value = true
  window.setTimeout(() => {
    paused.value = false
  }, 4500)
}

function go(index: number) {
  active.value = index
  pauseBriefly()
}

function handleCtaClick(cta: CTA) {
  if (cta.action === 'contact') {
    openContactModal(cta.label)
  }
}

function scheduleNext() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    if (!paused.value) {
      next()
    }
    scheduleNext()
  }, 6000)
}

watch(active, () => {
  paused.value = true
  window.setTimeout(() => {
    paused.value = false
  }, 1200)
})

onMounted(() => scheduleNext())
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(18px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}

.hero-bg-video {
  opacity: 0.96;
}

.hero-bg-video-platform {
  opacity: 0.98;
  /* c.mp4 — deep navy/blue, moderately dark; light brightness lift for clean brand feel */
  filter: brightness(1.18) saturate(1.04);
}

.hero-bg-video-research {
  opacity: 0.94;
  /* d.mp4 — vibrant green cellular/molecular; preserve original color, subtle brightness only */
  filter: brightness(1.06) contrast(1.04);
}

.hero-bg-video-translation {
  opacity: 0.92;
  /* g.mp4 — dark teal/blue, lower resolution; brighten and add subtle contrast */
  filter: brightness(1.28) contrast(1.06) saturate(0.96);
}

.hero-video-overlay {
  background:
    /* Depth-darkening — balanced between original richness and readability */
    linear-gradient(180deg, rgba(2, 6, 23, 0.28) 0%, rgba(6, 18, 36, 0.20) 40%, rgba(3, 10, 22, 0.32) 100%),
    radial-gradient(circle at 72% 36%, rgba(14, 116, 144, 0.08), transparent 42%),
    radial-gradient(circle at 18% 62%, rgba(56, 189, 248, 0.05), transparent 36%);
}

.hero-video-overlay-research {
  background:
    linear-gradient(180deg, rgba(2, 6, 23, 0.32) 0%, rgba(6, 18, 36, 0.23) 40%, rgba(3, 10, 22, 0.36) 100%),
    radial-gradient(circle at 74% 38%, rgba(14, 116, 144, 0.07), transparent 40%),
    radial-gradient(circle at 22% 56%, rgba(56, 189, 248, 0.05), transparent 34%);
}

.hero-video-overlay-translation {
  background:
    linear-gradient(180deg, rgba(2, 6, 23, 0.25) 0%, rgba(6, 18, 36, 0.18) 40%, rgba(3, 10, 22, 0.29) 100%),
    radial-gradient(circle at 74% 38%, rgba(14, 116, 144, 0.08), transparent 42%),
    radial-gradient(circle at 24% 60%, rgba(56, 189, 248, 0.05), transparent 36%);
}

/* Subtle molecular dot field — light scattered dots */
.hero-dot-field {
  background-image:
    radial-gradient(circle at 12% 18%, rgba(14, 116, 144, 0.08) 0 1.5px, transparent 2px),
    radial-gradient(circle at 28% 42%, rgba(10, 77, 99, 0.09) 0 2px, transparent 3px),
    radial-gradient(circle at 45% 22%, rgba(14, 116, 144, 0.07) 0 1.5px, transparent 2px),
    radial-gradient(circle at 63% 55%, rgba(10, 77, 99, 0.08) 0 2px, transparent 3px),
    radial-gradient(circle at 78% 28%, rgba(14, 116, 144, 0.09) 0 1.5px, transparent 2px),
    radial-gradient(circle at 88% 62%, rgba(10, 77, 99, 0.07) 0 2px, transparent 3px),
    radial-gradient(circle at 18% 72%, rgba(14, 116, 144, 0.06) 0 1.5px, transparent 2px),
    radial-gradient(circle at 55% 78%, rgba(56, 189, 248, 0.06) 0 1.5px, transparent 2px),
    radial-gradient(circle at 38% 8%, rgba(56, 189, 248, 0.05) 0 1.5px, transparent 2px),
    radial-gradient(circle at 68% 16%, rgba(14, 116, 144, 0.06) 0 1.5px, transparent 2px);
  background-size: 100% 100%;
  pointer-events: none;
}

@media (max-width: 767px) {
  .hero-bg-video {
    opacity: 0.72;
  }

  .hero-bg-video-platform {
    opacity: 0.75;
    filter: brightness(1.18) saturate(1.04);
  }

  .hero-bg-video-research {
    opacity: 0.68;
    filter: brightness(1.04) contrast(1.02);
  }

  .hero-bg-video-translation {
    opacity: 0.65;
    filter: brightness(1.24) contrast(1.04) saturate(0.94);
  }

  .hero-video-overlay,
  .hero-video-overlay-research,
  .hero-video-overlay-translation {
    background:
      linear-gradient(180deg, rgba(2, 6, 23, 0.24) 0%, rgba(6, 18, 36, 0.16) 44%, rgba(3, 10, 22, 0.28) 100%);
  }

  .hero-dot-field {
    opacity: 0.20;
  }
}
</style>
