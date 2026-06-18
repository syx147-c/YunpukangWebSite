<template>
  <section class="bg-[var(--color-card)] px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase text-[var(--color-tech-blue)]">Value Path</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-[var(--color-title)] md:text-5xl">
            让分子表型数据从样本走向决策
          </h2>
        </div>
        <p class="text-base leading-8 text-[var(--color-muted)] md:text-lg">
          云谱康围绕质谱多组学技术，提供从实验设计、样本检测、数据分析到临床合作和健康管理转化的完整服务路径，帮助科研团队、医院合作方、健康管理机构和转化伙伴降低沟通成本、提升项目效率。
        </p>
      </div>
      <div class="mt-14 grid gap-4 md:grid-cols-3">
        <div
          v-for="(item, index) in valueCards"
          :key="item.title"
          class="group border-t border-[var(--color-border)] bg-[var(--color-card)] pt-6 transition hover:border-[var(--color-primary)]"
        >
          <div class="flex items-center gap-4">
            <div class="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-navy-950)] text-sm font-bold text-white shadow-lg shadow-sky-100">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold leading-tight text-[var(--color-title)]">{{ item.title }}</h3>
          </div>
          <p class="mt-5 text-sm leading-7 text-[var(--color-muted)]">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { valueCards } from '../../data/home'
</script>
