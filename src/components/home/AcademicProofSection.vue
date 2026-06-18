<template>
  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Evidence</p>
        <h2 class="mt-3 text-3xl font-bold text-[var(--color-title)] md:text-5xl">学术资源与信任背书</h2>
        <p class="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
          原型阶段仅展示资料结构入口，正式材料确认授权后替换。完整成果请进入对应详情页查看。
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink
          v-for="item in academicProof"
          :key="item.title"
          :to="item.cta.to ?? '/about'"
          class="group card-lift flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
        >
          <!-- Compact visual indicator -->
          <div class="flex size-10 items-center justify-center rounded-xl bg-[var(--color-soft)] text-[var(--color-primary)]" :class="`proof-entry-icon-${item.visual}`">
            <span v-if="item.visual === 'paper'" class="text-lg font-bold">📄</span>
            <span v-else-if="item.visual === 'certificate'" class="text-lg">🏅</span>
            <span v-else-if="item.visual === 'ip'" class="text-lg">⚡</span>
            <span v-else class="text-lg">🤝</span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-[var(--color-title)]">{{ item.title }}</h3>
          <p class="mt-2 line-clamp-2 text-xs leading-5 text-[var(--color-muted)]">{{ item.description }}</p>
          <span class="mt-auto pt-4 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-2)]">
            {{ item.cta.label }} →
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { academicProof } from '../../data/home'
</script>
