<template>
  <RouterLink
    v-if="cta.to"
    :to="cta.to"
    :class="buttonClass"
    @click="handleNavigate"
  >
    {{ cta.label }}
  </RouterLink>
  <button v-else type="button" :class="buttonClass" @click="handleClick">
    {{ cta.label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { CTA } from '../../types/content'
import { useContactModal } from '../../composables/useContactModal'

const props = defineProps<{
  cta: CTA
  variant?: CTA['type']
}>()

const emit = defineEmits<{
  navigate: []
  activate: []
}>()

const { openContactModal } = useContactModal()

const resolvedVariant = computed(() => props.variant ?? props.cta.type ?? 'primary')

const buttonClass = computed(() => {
  const base =
    'inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white shadow-lg shadow-[rgba(21,94,117,0.18)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-2)] hover:shadow-[rgba(21,94,117,0.18)] focus:ring-[var(--color-primary-2)]',
    secondary:
      'border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] hover:-translate-y-0.5 hover:border-[var(--color-primary-2)] hover:bg-[var(--color-soft)] focus:ring-[var(--color-primary-2)]',
    ghost: 'text-[var(--color-primary)] hover:bg-[var(--color-soft)] focus:ring-[var(--color-primary-2)]',
  }
  return `${base} ${variants[resolvedVariant.value]}`
})

function handleClick() {
  emit('activate')
  if (props.cta.action === 'contact') {
    openContactModal(props.cta.label)
  }
}

function handleNavigate() {
  emit('activate')
  emit('navigate')
}
</script>
