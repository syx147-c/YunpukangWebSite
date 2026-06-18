import type { CardItem, CTA, HeroSlide, ProcessStep } from '../types/content'

export interface CapabilityTab {
  title: string
  problem: string
  capability: string
  deliverable: string
  ctas: CTA[]
  visual: 'research' | 'clinical' | 'health' | 'translation'
}

export interface ResourceItem {
  title: string
  description: string
  cta: CTA
}

export interface PlatformValueItem {
  title: string
  description: string
  visual: 'spectrum' | 'quality' | 'translation'
}

export interface ProofItem {
  title: string
  description: string
  cta: CTA
  visual: 'paper' | 'certificate' | 'ip' | 'partner'
}

export const heroSlides: HeroSlide[] = [
  {
    title: '代谢组学与临床质谱驱动的精准健康科技平台',
    description: '连接科研服务、临床质谱、健康体检、健康数据管理与临床转化，助力分子表型数据走向精准医学应用。',
    ctas: [
      { label: '获取方案', action: 'contact' },
      { label: '了解云谱康', to: '/about', type: 'secondary' },
    ],
    theme: 'platform',
    video: '/hero/hero-platform.mp4',
  },
  {
    title: '高覆盖质谱多组学科研服务',
    description: '提供非靶向代谢组学、靶向定量代谢组学、定量蛋白组学与多组学联合分析服务，支持疾病机制、标志物发现与药物研发研究。',
    ctas: [
      { label: '查看科研服务', to: '/research-services' },
      { label: '下载送样指南', action: 'contact', type: 'secondary' },
    ],
    theme: 'research',
    video: '/hero/hero-research.mp4',
  },
  {
    title: '从科研发现到临床转化与健康管理',
    description: '围绕临床质谱、LDT、IVD 试剂盒研发、健康体检与健康数据管理，构建精准健康服务闭环。',
    ctas: [
      { label: '查看临床转化', to: '/clinical-translation' },
      { label: '咨询健康管理', action: 'contact', type: 'secondary' },
    ],
    theme: 'translation',
    video: '/hero/hero-translation.mp4',
  },
]

export const valueCards: CardItem[] = [
  {
    title: '更高覆盖的检测能力',
    description: '围绕代谢物、蛋白质和多组学数据，支持科研项目和临床合作中的分子表型研究。',
  },
  {
    title: '更清晰的服务路径',
    description: '从需求沟通、实验设计到报告交付和后续转化，形成可追踪的项目流程。',
  },
  {
    title: '更稳健的质量体系',
    description: '通过质谱平台、标准品与内标体系、数据库和质控流程，保障数据可解释与可复核。',
  },
]

export const businessEntries: CardItem[] = [
  {
    title: '我是科研客户',
    description: '面向高校、医院科研团队、药企和科研院所，提供代谢组学、蛋白组学与多组学检测分析服务。',
    meta: '科研服务',
    to: '/research-services',
    cta: '查看科研服务',
  },
  {
    title: '我要推进临床转化',
    description: '支持标志物验证、IVD 试剂盒研发、临床队列合作和产学研医转化。',
    meta: '临床转化',
    to: '/clinical-translation',
    cta: '了解转化合作',
  },
  {
    title: '我要做健康管理方案',
    description: '基于代谢健康评估、慢病风险评估、报告解读和长期追踪，支持健康管理服务设计。',
    meta: '健康管理',
    to: '/health-management',
    cta: '查看健康管理方案',
  },
  {
    title: '我要做临床质谱合作',
    description: '围绕 LC-MS/MS 等平台，支持方法学开发、LDT 项目、质量控制与实验室合作。',
    meta: '临床质谱',
    to: '/clinical-mass-spec',
    cta: '了解临床质谱合作',
  },
]

export const serviceMatrix: CardItem[] = [
  { title: '非靶向代谢组学', description: '高覆盖代谢全谱扫描，支持机制探索与候选标志物发现。', meta: '高覆盖 / 机制研究 / 标志物发现', to: '/research-services', cta: '了解服务' },
  { title: '靶向定量代谢组学', description: '围绕重点通路和检测套餐，提供更稳定的精准定量路径。', to: '/research-services/targeted-metabolomics', meta: '精准定量 / 套餐检测 / 方法学', cta: '查看套餐' },
  { title: '定量蛋白组学', description: '聚焦蛋白表达差异、靶点研究和多层级机制验证。', meta: 'DIA / 蛋白表达 / 靶点研究', to: '/research-services', cta: '咨询方案' },
  { title: '多组学联合分析', description: '整合代谢物、蛋白质和表型数据，形成可讨论的联合解释。', meta: '数据融合 / 通路分析 / 联合建模', to: '/research-services', cta: '查看流程' },
]

export const workflowSteps: ProcessStep[] = [
  { title: '需求沟通', description: '明确研究目标、样本类型、样本量和交付预期。' },
  { title: '实验设计', description: '匹配非靶向、靶向、蛋白组学或联合分析方案。' },
  { title: '样本接收', description: '按送样指南完成样本信息核对与前处理安排。' },
  { title: '质谱检测', description: '依托 LC-MS/MS、Orbitrap 等平台完成检测。' },
  { title: '数据分析', description: '进行定量、质控、统计、通路和可视化分析。' },
  { title: '报告交付', description: '交付结果报告、数据表和图形化解释材料。' },
  { title: '后续合作', description: '支持临床合作、健康建议参考或转化研发讨论。' },
]

export const workflowTabs: CapabilityTab[] = [
  {
    title: '科研服务',
    problem: '研究方向明确，但检测方案、样本设计和数据分析路径需要专业支持。',
    capability: '非靶向代谢组学、靶向定量代谢组学、定量蛋白组学与多组学联合分析。',
    deliverable: '检测数据、统计分析、通路解释、报告交付与后续讨论。',
    ctas: [
      { label: '提交项目需求', action: 'contact' },
      { label: '查看科研服务', to: '/research-services', type: 'secondary' },
    ],
    visual: 'research',
  },
  {
    title: '临床质谱',
    problem: '医院或机构需要建立质谱检测方法、验证流程或实验室合作模式。',
    capability: 'LC-MS/MS 平台、方法学开发、LDT 项目开发、质量控制体系与实验室共建支持。',
    deliverable: '方法开发方案、验证思路、合作路径和实验室共建建议。',
    ctas: [
      { label: '咨询临床合作', action: 'contact' },
      { label: '查看临床质谱', to: '/clinical-mass-spec', type: 'secondary' },
    ],
    visual: 'clinical',
  },
  {
    title: '健康管理',
    problem: '健康体检与健康管理需要更有解释力的数据和可持续追踪路径。',
    capability: '代谢健康评估、慢病风险评估、营养与微生态评估、健康数据管理和报告解读。',
    deliverable: '健康风险评估、趋势追踪、报告解读和管理建议参考。',
    ctas: [
      { label: '咨询健康管理', action: 'contact' },
      { label: '查看健康管理', to: '/health-management', type: 'secondary' },
    ],
    visual: 'health',
  },
  {
    title: '临床转化',
    problem: '科研发现需要走向标志物验证、方法开发、产品研发和临床合作。',
    capability: '标志物发现与验证、IVD 试剂盒研发、LDT 项目开发、临床队列合作和注册申报支持。',
    deliverable: '转化路径建议、验证方案、合作模式和研发管线支持。',
    ctas: [
      { label: '咨询转化合作', action: 'contact' },
      { label: '查看临床转化', to: '/clinical-translation', type: 'secondary' },
    ],
    visual: 'translation',
  },
]

export const resourceCenter: ResourceItem[] = [
  {
    title: '送样指南',
    description: '了解样本类型、采集保存、运输和项目前沟通要求。',
    cta: { label: '查看送样指南', action: 'contact' },
  },
  {
    title: '检测套餐清单',
    description: '了解胆汁酸、氨基酸、脂肪酸、甾体激素、TMAO 等靶向套餐。',
    cta: { label: '查看检测列表', to: '/research-services/targeted-metabolomics' },
  },
  {
    title: '临床合作方案',
    description: '了解临床质谱方法开发、LDT 项目和实验室合作路径。',
    cta: { label: '咨询临床合作', action: 'contact' },
  },
]

export const platformItems: PlatformValueItem[] = [
  {
    title: '质谱多组学平台',
    description: '整合 LC-MS/MS、Orbitrap、SCIEX Triple Quad 等平台，支持代谢物和蛋白质数据获取。',
    visual: 'spectrum',
  },
  {
    title: '标准化质量体系',
    description: '通过样本前处理、标准品与内标、质控流程和方法学验证思路，提升数据稳定性。',
    visual: 'quality',
  },
  {
    title: '数据分析与转化支持',
    description: '结合数据库、统计分析、通路解释和合作转化路径，帮助客户从数据走向应用。',
    visual: 'translation',
  },
]

export const scenarioGroups = [
  {
    title: '科研发现',
    description: '面向机制研究和药物研发的分子表型探索。',
    detail: '支持疾病机制研究、候选标志物发现和药物反应预测等场景，提供非靶向代谢组学、靶向定量和蛋白组学技术方案。适用于高校、医院科研团队和药企早期研发。',
    tags: ['疾病机制研究', '标志物发现', '药物反应预测'],
    to: '/research-services',
  },
  {
    title: '临床合作',
    description: '面向临床质谱方法和队列项目的合作路径。',
    detail: '围绕 LC-MS/MS 平台开展方法学开发、LDT 项目开发和临床队列合作，帮助医院和研究机构建立质谱检测能力。',
    tags: ['方法开发', '临床队列合作', 'LDT 项目'],
    to: '/clinical-mass-spec',
  },
  {
    title: '健康管理',
    description: '面向健康风险评估和长期趋势追踪的服务设计。',
    detail: '基于代谢健康评估、慢病风险评估和营养微生态分析，为健康管理机构提供数据驱动的评估工具和长期追踪方案。',
    tags: ['慢病风险评估', '营养微生态', '长期追踪'],
    to: '/health-management',
  },
  {
    title: '转化研发',
    description: '面向标志物验证与产业化合作的转化支撑。',
    detail: '支持从科研发现到临床应用的转化路径，包括标志物验证、IVD 试剂盒研发、注册申报支持和产学研医合作。',
    tags: ['IVD 研发', '标志物验证', '注册申报支持'],
    to: '/clinical-translation',
  },
]

export const translationPath: ProcessStep[] = [
  { title: '标志物发现', description: '从科研检测和数据分析中筛选候选方向。' },
  { title: '方法学开发', description: '围绕目标指标建立质谱检测与验证路径。' },
  { title: '临床队列验证', description: '通过队列合作推动标志物可靠性评估。' },
  { title: 'LDT 项目开发', description: '围绕临床合作场景推进方法开发讨论。' },
  { title: 'IVD 试剂盒研发', description: '支持试剂盒研发和后续注册申报准备。' },
  { title: '注册申报支持', description: '提供研发路径中的数据和方法支撑方向。' },
  { title: '产学研医合作', description: '连接科研、临床与产业资源推进落地。' },
]

export const academicProof: ProofItem[] = [
  {
    title: '代表性论文',
    description: '仅展示论文信息结构占位，不编造真实题名、DOI 或期刊信息。',
    cta: { label: '查看论文成果', to: '/academic-resources' },
    visual: 'paper',
  },
  {
    title: '资质荣誉',
    description: '正式资质材料确认和授权后，再展示证书缩略图与说明。',
    cta: { label: '查看资质荣誉', to: '/about' },
    visual: 'certificate',
  },
  {
    title: '知识产权',
    description: '保留专利、软著、数据库/方法分类入口，不在首页编造数量。',
    cta: { label: '查看知识产权', to: '/about' },
    visual: 'ip',
  },
  {
    title: '合作单位',
    description: '仅保留待授权 Logo 占位，不展示真实医院、高校或客户名称。',
    cta: { label: '查看合作网络', to: '/about' },
    visual: 'partner',
  },
]
