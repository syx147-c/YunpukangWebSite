<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[70] bg-slate-950/60 lg:hidden" @click.self="$emit('close')">
      <Transition name="slide">
        <aside class="ml-auto flex h-full w-full max-w-[430px] flex-col bg-[var(--color-page)] shadow-2xl" role="dialog" aria-modal="true">
          <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4">
            <div>
              <p class="text-xs font-semibold uppercase text-[var(--color-primary)]">iPhenome</p>
              <p class="font-bold text-[var(--color-title)]">云谱康</p>
            </div>
            <button type="button" class="min-h-11 rounded-xl px-3 text-[var(--color-muted)] hover:bg-[var(--color-soft)]" @click="$emit('close')">
              关闭
            </button>
          </div>
          <div class="flex-1 overflow-y-auto p-4">
            <MobileAccordionMenu :items="items" @navigate="$emit('close')" />
          </div>
          <div class="border-t border-slate-200 bg-white p-4">
            <button
              type="button"
              class="min-h-11 w-full rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white"
              @click="openContact"
            >
              获取方案 / 咨询合作
            </button>
          </div>
        </aside>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import type { NavItem } from '../../types/content'
import MobileAccordionMenu from './MobileAccordionMenu.vue'
import { useContactModal } from '../../composables/useContactModal'

const props = defineProps<{
  open: boolean
  items: NavItem[]
}>()

const emit = defineEmits<{ close: [] }>()
const { openContactModal } = useContactModal()

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
)

function openContact() {
  emit('close')
  openContactModal('咨询合作')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) {
    emit('close')
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (props.open) document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
