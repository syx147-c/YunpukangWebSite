<template>
  <section class="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Technology & Quality</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-[var(--color-title)] md:text-5xl">技术平台与质量体系共同支撑可靠数据</h2>
        </div>
        <p class="text-base leading-8 text-[var(--color-muted)] md:text-lg">
          以质谱检测平台、样本前处理、标准品与内标体系、数据库和质控流程构成原型中的技术可信度表达。
        </p>
      </div>

      <div class="mt-8 lg:hidden">
        <div class="mobile-snap-track -mx-4 flex gap-2 overflow-x-auto px-4 pb-3">
          <button
            v-for="(item, index) in platformItems"
            :key="`tab-${item.title}`"
            type="button"
            class="min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition"
            :class="activePlatform === index ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md' : 'border-[var(--color-border)] bg-[var(--color-soft)] text-[var(--color-primary)]'"
            :aria-pressed="activePlatform === index"
            @click="activePlatform = index"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="mt-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div class="platform-value-visual platform-mobile-visual bg-[var(--color-soft)]" :class="`platform-value-${currentPlatform.visual}`">
            <span v-for="mark in 14" :key="mark"></span>
          </div>
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">Platform Evidence</p>
            <h3 class="mt-2 text-xl font-bold leading-tight text-[var(--color-title)]">{{ currentPlatform.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-[var(--color-muted)]">{{ currentPlatform.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="point in currentPlatformPoints" :key="point" class="rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                {{ point }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
        <div
          v-for="item in platformItems"
          :key="item.title"
          class="card-lift flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
        >
          <div class="platform-value-visual bg-[var(--color-soft)]" :class="`platform-value-${item.visual}`">
            <span v-for="mark in 14" :key="mark"></span>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold leading-tight text-[var(--color-title)]">{{ item.title }}</h3>
            <p class="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-muted)]">{{ item.description }}</p>
            <!-- Spacer for consistent bottom alignment -->
            <div class="mt-auto pt-4">
              <span class="text-sm font-semibold text-[var(--color-primary)]">了解更多 →</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Compact step summary bar -->
      <div class="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-3 sm:mt-8 sm:grid-cols-4 sm:gap-3 sm:p-4">
        <div v-for="step in ['实验设计', '样本检测', '数据分析', '转化讨论']" :key="step" class="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-center text-sm font-semibold text-[var(--color-primary)] shadow-sm">
          {{ step }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { platformItems } from '../../data/home'

const activePlatform = ref(0)
const currentPlatform = computed(() => platformItems[activePlatform.value])
const platformPoints = {
  spectrum: ['LC-MS/MS', 'Orbitrap', '多组学检测'],
  quality: ['标准品与内标', '全过程质控', '方法学验证'],
  translation: ['统计分析', '通路解释', '转化支持'],
}
const currentPlatformPoints = computed(() => platformPoints[currentPlatform.value.visual])
</script>
