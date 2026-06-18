<template>
  <header
    class="fixed inset-x-0 top-0 z-60 border-b border-[var(--color-border)] transition"
    :class="scrolled ? 'bg-white/95 shadow-lg shadow-slate-200/70 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-lg'"
    @mouseleave="scheduleClose"
  >
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="shrink-0 text-[var(--color-title)]" @focus="closeMega">
        <span class="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">iPhenome</span>
        <span class="text-lg font-bold">云谱康</span>
      </RouterLink>

      <nav class="hidden flex-1 justify-center lg:flex" aria-label="主导航">
        <div class="flex items-center gap-1">
          <div
            v-for="item in primaryNavigation"
            :key="item.label"
            class="relative"
            @mouseenter="item.hasMegaMenu ? scheduleOpen(item.label) : closeMega()"
          >
            <RouterLink
              :to="item.path"
              class="group rounded-md px-2.5 py-2 text-sm font-semibold transition xl:px-3"
              :class="isActive(item.path) ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-primary)] focus:text-[var(--color-primary)]'"
              @click="handleNavClick(item)"
              @focus="item.hasMegaMenu ? openMega(item.label) : closeMega()"
            >
              <span
                class="relative inline-block after:absolute after:left-0 after:top-full after:mt-1 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[var(--color-primary)] after:transition-transform after:duration-200"
                :class="item.path === '/' ? '' : 'group-hover:after:scale-x-100 group-focus:after:scale-x-100'"
              >
                {{ item.label }}
              </span>
            </RouterLink>
          </div>
        </div>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <button
          type="button"
          class="flex min-h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-[var(--color-muted)] transition"
          aria-label="当前语言：中文，可切换英文"
        >
          <span class="text-[var(--color-primary)]">中</span>
          <span class="text-slate-300">/</span>
          <span>En</span>
        </button>
        <button
          type="button"
          class="min-h-11 rounded-xl bg-[var(--color-primary)] px-4 text-sm font-semibold text-white shadow-sm shadow-[rgba(21,94,117,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-2)]"
          @click="openContactModal('我们来聊聊吧')"
        >
          我们来聊聊吧
        </button>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <button type="button" class="min-h-11 rounded-lg bg-[var(--color-primary)] px-3 text-sm font-semibold text-white shadow-[rgba(21,94,117,0.18)]" @click="openContactModal('获取方案')">
          获取方案
        </button>
        <button
          type="button"
          class="min-h-11 rounded-md border border-[var(--color-border)] px-3 text-sm font-semibold text-[var(--color-title)]"
          :aria-expanded="drawerOpen"
          @click="drawerOpen = !drawerOpen"
        >
          {{ drawerOpen ? '关闭' : '菜单' }}
        </button>
      </div>
    </div>

    <MegaMenu
      v-if="activeMega"
      :group="activeMega"
      :selected-label="selectedChild"
      @select="selectedChild = $event"
      @enter="cancelClose"
      @leave="scheduleClose"
      @navigate="closeMega"
    />

    <MobileDrawer :open="drawerOpen" :items="primaryNavigation" @close="drawerOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { primaryNavigation } from '../../data/navigation'
import { megaMenus } from '../../data/megaMenu'
import type { NavItem } from '../../types/content'
import MegaMenu from './MegaMenu.vue'
import MobileDrawer from './MobileDrawer.vue'
import { useContactModal } from '../../composables/useContactModal'

const route = useRoute()
const { openContactModal } = useContactModal()
const activeLabel = ref('')
const selectedChild = ref('')
const drawerOpen = ref(false)
const scrolled = ref(false)
let openTimer: ReturnType<typeof setTimeout> | undefined
let closeTimer: ReturnType<typeof setTimeout> | undefined

const activeMega = computed(() => megaMenus.find((menu) => menu.label === activeLabel.value))

function isActive(path: string) {
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}

function openMega(label: string) {
  const menu = megaMenus.find((item) => item.label === label)
  if (!menu) return
  activeLabel.value = label
  selectedChild.value = menu.items[0]?.label ?? ''
}

function scheduleOpen(label: string) {
  cancelClose()
  clearTimeout(openTimer)
  openTimer = setTimeout(() => openMega(label), 320)
}

function scheduleClose() {
  clearTimeout(openTimer)
  clearTimeout(closeTimer)
  closeTimer = setTimeout(closeMega, 360)
}

function cancelClose() {
  clearTimeout(closeTimer)
}

function closeMega() {
  activeLabel.value = ''
  selectedChild.value = ''
}

function handleNavClick(item: NavItem) {
  if (item.hasMegaMenu) {
    openMega(item.label)
  } else {
    closeMega()
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMega()
    drawerOpen.value = false
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>
