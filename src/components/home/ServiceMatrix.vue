<template>
  <section class="bg-[var(--color-card)] px-4 py-20 sm:px-6 lg:px-8">
    <SectionHeader eyebrow="Multiomics Services" title="多组学服务矩阵" description="围绕代谢物、蛋白质和多组学数据，支持科研发现、临床合作与转化研究。" />
    <div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
      <RouterLink
        v-for="(item, index) in serviceMatrix"
        :key="item.title"
        :to="item.to ?? '/research-services'"
        class="group flex min-h-[320px] flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary-2)] hover:shadow-xl hover:shadow-slate-200/80"
      >
        <div class="h-32 bg-[var(--color-soft)] p-5" :class="visualClass(index)">
          <div v-if="index === 0" class="service-visual-network">
            <span v-for="node in 8" :key="node"></span>
          </div>
          <div v-else-if="index === 1" class="service-visual-bars">
            <span v-for="bar in 8" :key="bar" :style="{ height: `${26 + ((bar * 13) % 46)}px` }"></span>
          </div>
          <div v-else-if="index === 2" class="service-visual-protein">
            <span v-for="node in 6" :key="node"></span>
          </div>
          <div v-else class="service-visual-matrix">
            <span v-for="cell in 24" :key="cell"></span>
          </div>
        </div>
        <div class="flex flex-1 flex-col p-5 sm:p-6">
          <h3 class="text-lg font-bold leading-snug text-[var(--color-title)] sm:text-xl">{{ item.title }}</h3>
          <p class="mt-3 text-[13px] leading-6 text-[var(--color-muted)] sm:text-sm">{{ item.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in item.meta?.split(' / ')" :key="tag" class="rounded-full bg-[var(--color-surface-muted)] px-2.5 py-1 text-xs font-semibold text-[var(--color-primary)]">
              {{ tag }}
            </span>
          </div>
          <span class="mt-auto pt-6 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-2)]">{{ item.cta }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { serviceMatrix } from '../../data/home'
import SectionHeader from '../common/SectionHeader.vue'

function visualClass(index: number) {
  return ['service-card-scan', 'service-card-quant', 'service-card-protein', 'service-card-fusion'][index] ?? ''
}
</script>
