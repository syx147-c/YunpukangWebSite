<template>
  <footer class="relative overflow-hidden bg-[var(--color-dark)] text-[var(--color-text-soft)]">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    <div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.05fr] lg:gap-8">
        <div class="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-950/20 sm:p-6">
          <p class="text-sm font-semibold uppercase text-[var(--color-ice-blue)]">iPhenome</p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ footerConfig.brand.logo }}</h2>
          <p class="mt-4 text-sm leading-7 text-[var(--color-text-soft)]/85 sm:text-base">{{ footerConfig.brand.sloganCn }}</p>
          <p class="mt-3 text-xs leading-5 text-[var(--color-text-soft)]/60">{{ footerConfig.brand.sloganEn }}</p>
        </div>
        <div class="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <h3 class="text-sm font-semibold uppercase text-white">快速导航</h3>
          <div class="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-2">
            <RouterLink v-for="item in footerConfig.quickNav" :key="item.label" :to="item.path" class="text-[var(--color-text-soft)]/70 transition hover:text-[var(--color-primary-2)]">
              {{ item.label }}
            </RouterLink>
          </div>
        </div>
        <div class="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <h3 class="text-sm font-semibold uppercase text-white">联系方式</h3>
          <div class="mt-5 space-y-4 text-sm leading-6 text-[var(--color-text-soft)]/72">
            <p>
              <span class="block text-xs font-semibold text-[var(--color-ice-blue)]">地址</span>
              {{ footerConfig.contact.address }}
            </p>
            <a :href="`tel:${footerConfig.contact.phone}`" class="block transition hover:text-[var(--color-primary-2)]">
              <span class="block text-xs font-semibold text-[var(--color-ice-blue)]">电话</span>
              {{ footerConfig.contact.phone }}
            </a>
            <a :href="`mailto:${footerConfig.contact.email}`" class="block transition hover:text-[var(--color-primary-2)]">
              <span class="block text-xs font-semibold text-[var(--color-ice-blue)]">邮箱</span>
              {{ footerConfig.contact.email }}
            </a>
          </div>
        </div>
        <div class="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 text-center sm:p-6">
          <h3 class="text-sm font-semibold uppercase text-white">二维码</h3>
          <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              v-for="code in footerConfig.qrCodes"
              :key="code.title"
              class="mx-auto w-full max-w-56 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:scale-[1.03]"
            >
              <div class="mx-auto grid size-20 place-items-center rounded-md bg-white text-xs font-semibold text-slate-500 sm:size-24">QR</div>
              <p class="mt-3 text-sm font-semibold">{{ code.title }}</p>
              <p class="mt-1 text-xs text-[var(--color-text-soft)]/55">{{ code.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-[var(--color-text-soft)]/55 md:flex-row md:items-center md:justify-between">
        <p>{{ footerConfig.copyright }}</p>
        <div class="flex flex-wrap gap-x-4 gap-y-1">
          <span v-for="filing in footerConfig.filings" :key="filing">{{ filing }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { footerConfig } from '../../data/footer'
</script>
