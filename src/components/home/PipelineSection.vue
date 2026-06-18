<template>
  <section class="bg-white px-4 py-18 sm:px-6 lg:px-8">
    <SectionHeader eyebrow="临床转化" title="从发现到验证，再到临床转化" description="以路径方式呈现转化合作，不暗示已上市临床诊断产品，不编造注册证或诊断承诺。" />
    <div class="mx-auto max-w-7xl">
      <div class="relative hidden lg:block">
        <div class="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-sky-100 via-[var(--color-primary-2)] to-cyan-100"></div>
        <div class="grid gap-4 lg:grid-cols-7">
          <div
            v-for="(item, index) in translationPath"
            :key="item.title"
            class="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            :class="index % 2 === 1 ? 'mt-16' : 'mb-16'"
          >
            <span class="absolute left-5 top-0 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white ring-8 ring-white">{{ index + 1 }}</span>
            <h3 class="mt-7 text-base font-bold text-slate-950">{{ item.title }}</h3>
            <p class="mt-3 text-xs leading-5 text-slate-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="grid gap-4 lg:hidden">
        <div
          v-for="(item, index) in translationPath"
          :key="item.title"
          class="relative border-l border-sky-200 pl-6"
        >
          <span class="absolute -left-4 top-0 grid size-8 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white">{{ index + 1 }}</span>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 class="text-base font-bold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-[13px] leading-5 text-slate-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { translationPath } from '../../data/home'
import SectionHeader from '../common/SectionHeader.vue'
</script>
