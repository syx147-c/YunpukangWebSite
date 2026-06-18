import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ResearchServices from '../pages/ResearchServices.vue'
import TargetedMetabolomics from '../pages/TargetedMetabolomics.vue'
import ClinicalMassSpec from '../pages/ClinicalMassSpec.vue'
import HealthManagement from '../pages/HealthManagement.vue'
import ClinicalTranslation from '../pages/ClinicalTranslation.vue'
import TechnologyPlatform from '../pages/TechnologyPlatform.vue'
import AcademicResources from '../pages/AcademicResources.vue'
import About from '../pages/About.vue'
import Careers from '../pages/Careers.vue'
import NotFound from '../pages/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/research-services', name: 'ResearchServices', component: ResearchServices },
    { path: '/research-services/targeted-metabolomics', name: 'TargetedMetabolomics', component: TargetedMetabolomics },
    { path: '/clinical-mass-spec', name: 'ClinicalMassSpec', component: ClinicalMassSpec },
    { path: '/health-management', name: 'HealthManagement', component: HealthManagement },
    { path: '/clinical-translation', name: 'ClinicalTranslation', component: ClinicalTranslation },
    { path: '/technology-platform', name: 'TechnologyPlatform', component: TechnologyPlatform },
    { path: '/academic-resources', name: 'AcademicResources', component: AcademicResources },
    { path: '/about', name: 'About', component: About },
    { path: '/careers', name: 'Careers', component: Careers },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})
