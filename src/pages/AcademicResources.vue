<template>
  <PageHero :hero="page.hero" />
  <section class="bg-white px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <ContentTabs :items="page.sections[0].items" />
    </div>
  </section>
  <PageSections :sections="page.sections.slice(1)" />
  <ComplianceNotice type="global" />
  <CTASection v-bind="page.cta" />
</template>

<script setup lang="ts">
import { pages } from '../data/pages'
import PageHero from '../components/common/PageHero.vue'
import PageSections from '../components/common/PageSections.vue'
import ContentTabs from '../components/common/ContentTabs.vue'
import ComplianceNotice from '../components/common/ComplianceNotice.vue'
import CTASection from '../components/common/CTASection.vue'

const page = pages.resources
</script>
