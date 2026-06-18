<template>
  <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="rounded-[20px] border border-[var(--color-border)] bg-white p-5 text-[var(--color-body)] shadow-sm">
      <h2 class="text-sm font-semibold">{{ notice.title }}</h2>
      <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">{{ notice.body }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { complianceText } from '../../data/compliance'
import type { ComplianceType } from '../../types/content'

const props = defineProps<{ type: ComplianceType }>()
const notice = computed(() => complianceText[props.type])
</script>
