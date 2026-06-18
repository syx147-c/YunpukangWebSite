export interface CTA {
  label: string
  to?: string
  action?: 'contact'
  type?: 'primary' | 'secondary' | 'ghost'
}

export interface NavChild {
  label: string
  path: string
  description?: string
  children?: NavChild[]
}

export interface NavItem {
  label: string
  path: string
  children?: NavChild[]
  hasMegaMenu?: boolean
}

export interface MegaMenuPanel {
  title: string
  description: string
  cta: CTA
}

export interface MegaMenuItem {
  label: string
  path: string
  title: string
  description: string
  cta: CTA
  badge?: string
  children?: MegaMenuItem[]
}

export interface MegaMenuCategory {
  label: string
  items: MegaMenuItem[]
}

export interface MegaMenuGroup {
  key: string
  label: string
  path: string
  items: MegaMenuItem[]
  categories?: MegaMenuCategory[]
  defaultPanel: MegaMenuPanel
  visual: {
    title: string
    description: string
    theme: string
  }
}

export interface HeroSlide {
  eyebrow?: string
  title: string
  description: string
  ctas: CTA[]
  theme: 'platform' | 'research' | 'translation'
  video?: string
}

export interface PageHero {
  eyebrow: string
  title: string
  description: string
  ctas?: CTA[]
}

export interface CardItem {
  title: string
  description: string
  meta?: string
  to?: string
  cta?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface PageSection {
  title: string
  description?: string
  items: CardItem[]
  layout?: 'cards' | 'timeline' | 'list' | 'bands'
}

export interface PageContent {
  hero: PageHero
  sections: PageSection[]
  compliance?: ComplianceType[]
  cta: {
    title: string
    description: string
    actions: CTA[]
  }
}

export type ComplianceType = 'research' | 'health' | 'clinical' | 'translation' | 'privacy' | 'global'

export interface FooterConfig {
  brand: {
    logo: string
    sloganCn: string
    sloganEn: string
  }
  quickNav: Array<{ label: string; path: string }>
  contact: {
    address: string
    phone: string
    email: string
  }
  qrCodes: Array<{ title: string; description: string }>
  copyright: string
  filings: string[]
}
