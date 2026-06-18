<template>
  <HeroCarousel />
  <BusinessEntryCards />
  <WorkflowSection />
  <PlatformSection />
  <ApplicationScenarios />
  <AcademicProofSection />
  <CTASection
    title="把研究问题转化为可执行的质谱多组学项目"
    description="提交研究方向、样本类型、合作场景和预期目标，我们将协助梳理检测方案、项目流程与后续转化路径。"
    :actions="actions"
  />
  <ComplianceNotice type="global" />
</template>

<script setup lang="ts">
import HeroCarousel from '../components/home/HeroCarousel.vue'
import WorkflowSection from '../components/home/WorkflowSection.vue'
import PlatformSection from '../components/home/PlatformSection.vue'
import ApplicationScenarios from '../components/home/ApplicationScenarios.vue'
import AcademicProofSection from '../components/home/AcademicProofSection.vue'
import ComplianceNotice from '../components/common/ComplianceNotice.vue'
import CTASection from '../components/common/CTASection.vue'
import type { CTA } from '../types/content'
import BusinessEntryCards from '../components/home/BusinessEntryCards.vue'

const actions: CTA[] = [
  { label: '提交项目需求', action: 'contact' },
  { label: '咨询合作', action: 'contact', type: 'ghost' },
]
</script>
