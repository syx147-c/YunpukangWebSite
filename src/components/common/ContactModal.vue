<template>
  <Transition name="fade">
    <div v-if="isContactModalOpen" class="fixed inset-0 z-[80] bg-slate-950/70 p-3 backdrop-blur-sm" @click.self="closeContactModal">
      <div
        ref="dialogRef"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        class="mx-auto flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl outline-none"
      >
        <div class="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
          <div>
            <p class="text-sm font-semibold text-[var(--color-primary)]">咨询合作</p>
            <h2 class="mt-1 text-xl font-bold text-[var(--color-title)]">获取方案 / 提交项目需求</h2>
          </div>
          <button type="button" class="min-h-11 rounded-xl px-3 text-[var(--color-muted)] hover:bg-[var(--color-soft)]" aria-label="关闭咨询表单" @click="closeContactModal">
            关闭
          </button>
        </div>
        <div class="overflow-y-auto p-5">
          <ContactForm :preset-type="presetType" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, onMounted, onUnmounted } from 'vue'
import ContactForm from './ContactForm.vue'
import { useContactModal } from '../../composables/useContactModal'

const { isContactModalOpen, closeContactModal, presetType } = useContactModal()
const dialogRef = ref<HTMLElement | null>(null)

watch(isContactModalOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    dialogRef.value?.focus()
  }
})

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isContactModalOpen.value) {
    closeContactModal()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
