<template>
  <section class="min-h-[70vh] bg-slate-950 px-4 pt-32 text-white sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl py-24 text-center">
      <p class="text-sm font-semibold uppercase text-[var(--color-primary-2)]">404</p>
      <h1 class="mt-4 text-4xl font-bold">页面未找到</h1>
      <p class="mt-5 text-sky-50/75">该原型路由不存在，请返回首页或打开咨询表单。</p>
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <BaseButton :cta="{ label: '返回首页', to: '/' }" />
        <BaseButton :cta="{ label: '咨询合作', action: 'contact', type: 'secondary' }" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '../components/common/BaseButton.vue'
</script>
