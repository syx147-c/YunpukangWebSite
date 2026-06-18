<template>
  <div class="min-h-screen bg-[var(--color-page)] text-[var(--color-body)]">
    <AppHeader />
    <main class="min-h-screen">
      <RouterView />
    </main>
    <AppFooter />
    <ContactModal />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ContactModal from './components/common/ContactModal.vue'
</script>
