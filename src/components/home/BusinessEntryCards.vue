<template>
  <section class="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">Business Entry</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-[var(--color-title)] md:text-5xl">从真实合作场景进入云谱康服务</h2>
        </div>
        <p class="text-base leading-8 text-[var(--color-muted)] md:text-lg">
          围绕科研服务、临床质谱、健康管理与临床转化四类核心业务，帮助不同合作方快速找到项目咨询、方案评估和后续沟通入口。
        </p>
      </div>

      <div class="mobile-snap-track -mx-4 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:hidden">
        <RouterLink
          v-for="item in businessEntries"
          :key="`mobile-${item.title}`"
          :to="item.to ?? '/'"
          class="group flex w-[84vw] max-w-[340px] shrink-0 snap-start flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_44px_rgba(15,23,42,0.08)]"
        >
          <div class="flex items-center gap-3">
            <span class="w-fit rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">{{ item.meta }}</span>
          </div>
          <h3 class="mt-5 text-xl font-bold leading-tight text-[var(--color-title)]">{{ item.title }}</h3>
          <p class="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">{{ item.description }}</p>
          <span class="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-2)]">
            {{ item.cta }} →
          </span>
        </RouterLink>
      </div>

      <div class="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink
          v-for="item in businessEntries"
          :key="item.title"
          :to="item.to ?? '/'"
          class="group card-lift flex min-h-[300px] flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm lg:min-h-[320px]"
        >
          <div class="flex items-center gap-3">
            <span class="w-fit rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">{{ item.meta }}</span>
          </div>
          <h3 class="mt-7 text-xl font-bold leading-tight text-[var(--color-title)]">{{ item.title }}</h3>
          <p class="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-muted)]">{{ item.description }}</p>
          <span class="mt-auto pt-6 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-2)]">{{ item.cta }}</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { businessEntries } from '../../data/home'
</script>
