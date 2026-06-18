<template>
  <PageHero :hero="page.hero" />
  <PageSections :sections="page.sections" />
  <ComplianceNotice v-for="type in page.compliance" :key="type" :type="type" />
  <ComplianceNotice type="global" />
  <CTASection v-bind="page.cta" />
</template>

<script setup lang="ts">
import { pages } from '../data/pages'
import PageHero from '../components/common/PageHero.vue'
import PageSections from '../components/common/PageSections.vue'
import ComplianceNotice from '../components/common/ComplianceNotice.vue'
import CTASection from '../components/common/CTASection.vue'

const page = pages.research
</script>
