import type { PageContent } from '../types/content'
import { targetedPackages } from './services'

export const pages: Record<string, PageContent> = {
  research: {
    hero: {
      eyebrow: '科研服务',
      title: '代谢组学与多组学科研服务',
      description: '把非靶向、靶向定量、蛋白组学和多组学联合分析包装为科研客户可理解、可咨询、可评审的服务体系。',
      ctas: [{ label: '提交项目需求', action: 'contact' }, { label: '查看靶向定量', to: '/research-services/targeted-metabolomics', type: 'secondary' }],
    },
    sections: [
      {
        title: '服务分类',
        description: '面向疾病机制、标志物发现、药物研发、队列研究等科研项目场景。',
        items: [
          { title: '非靶向代谢组学', description: '高覆盖代谢全谱分析，适合探索性研究和通路注释。' },
          { title: '靶向定量代谢组学', description: '面向明确代谢通路和候选指标的定量检测。', to: '/research-services/targeted-metabolomics' },
          { title: '定量蛋白组学', description: '支撑蛋白表达差异、通路解释和联合验证。' },
          { title: '多组学联合分析', description: '整合多源组学与表型数据，形成系统性研究洞察。' },
        ],
      },
      {
        title: '适用研究场景',
        items: ['疾病机制研究', '标志物发现', '药物反应研究', '营养代谢', '肠道微生态', '队列研究'].map((title) => ({ title, description: '用于科研项目场景，支持从研究问题到数据解释的完整沟通。' })),
      },
      {
        title: '样本类型与送样要求',
        items: [
          { title: '样本类型', description: '血清、血浆、尿液、组织、粪便等样本类型可按项目方案确认。' },
          { title: '送样沟通', description: '样本量、采集条件、保存运输和批次设计需在项目启动前确认。' },
          { title: '交付内容', description: '结果数据表、统计图、质控说明、通路分析和项目报告。' },
        ],
      },
      {
        title: '质量控制',
        items: [
          { title: 'QC 样本', description: '通过质控样本监控批次稳定性和仪器状态。' },
          { title: '方法学指标', description: '根据检测类型说明精密度、线性、灵敏度和重复性等指标。' },
          { title: '论文/案例占位', description: '保留代表性研究展示位，待公司确认正式资料后填充。' },
        ],
      },
    ],
    compliance: ['research'],
    cta: {
      title: '让科研问题转化为可执行检测方案',
      description: '提交研究方向、样本类型和预计样本量，原型中将模拟咨询提交。',
      actions: [{ label: '科研服务咨询', action: 'contact' }],
    },
  },
  targeted: {
    hero: {
      eyebrow: '靶向定量代谢组学',
      title: '靶向代谢物定量质谱方法集群',
      description: '基于 UPLC-SCIEX Triple Quad、LC-MS/MS 和同位素内标体系，支撑多类代谢通路定量套餐。',
      ctas: [{ label: '获取检测列表', action: 'contact' }, { label: '返回科研服务', to: '/research-services', type: 'secondary' }],
    },
    sections: [
      {
        title: '平台介绍',
        items: [
          { title: 'UPLC-SCIEX Triple Quad', description: '面向靶向定量检测的质谱平台能力展示。' },
          { title: 'LC-MS/MS', description: '支持多通路代谢物定量检测和方法开发。' },
          { title: '同位素内标', description: '通过标准品与内标体系保障定量稳定性。' },
        ],
      },
      {
        title: '套餐矩阵',
        description: '以下内容用于科研项目场景，具体检测清单以正式方案确认为准。',
        items: targetedPackages.map((title) => ({ title, description: '可用于候选通路验证、队列研究和机制研究中的靶向定量分析。', meta: '科研用途' })),
      },
      {
        title: '方法开发与性能说明',
        items: [
          { title: '方法开发理念', description: '围绕目标代谢物、样本基质、灵敏度和通量平衡设计方法。' },
          { title: '方法学性能', description: '可展示线性、精密度、准确性、稳定性等指标结构，具体数据待项目确认。' },
          { title: '样本送检', description: '样本类型、采集保存、冻融次数和运输条件需按套餐要求确认。' },
        ],
      },
      {
        title: '适用研究场景',
        items: ['胆汁酸代谢', '氨基酸代谢', '脂肪酸代谢', '甾体激素/内分泌', 'TMAO 通路', '肠道菌群代谢物', '色氨酸通路'].map((title) => ({ title, description: '用于科研项目中明确代谢通路的定量验证。' })),
      },
    ],
    compliance: ['research'],
    cta: {
      title: '获取靶向定量代谢组学方案',
      description: '告诉我们研究通路、样本类型和样本量，模拟生成咨询提交。',
      actions: [{ label: '咨询靶向定量', action: 'contact' }],
    },
  },
  clinical: {
    hero: {
      eyebrow: '临床质谱',
      title: '临床质谱检测与合作解决方案',
      description: '面向医院、医学检验机构和临床研究团队，展示临床质谱平台、方法开发、质量体系和合作路径。',
      ctas: [{ label: '咨询临床合作', action: 'contact' }],
    },
    sections: [
      {
        title: '平台与项目方向',
        items: [
          { title: '临床质谱平台', description: '围绕 LC-MS/MS 等技术展示平台能力和项目合作边界。' },
          { title: '检测项目方向', description: '以项目方向展示，不承诺未经确认的临床诊断适用范围。' },
          { title: 'LDT 方法开发', description: '支持方法开发、验证和合作讨论。' },
        ],
      },
      {
        title: '方法学与质量体系',
        items: [
          { title: '方法学开发与验证', description: '围绕灵敏度、特异性、线性、精密度等指标建立验证路径。' },
          { title: '质量控制体系', description: '通过质控品、批次监控和标准化流程保障数据稳定。' },
          { title: '实验室共建方案', description: '展示合作路径和能力模块，具体方案需双方确认。' },
        ],
      },
      {
        title: '临床合作模式',
        items: [
          { title: '检测方法合作', description: '联合开发或优化临床质谱检测方法。' },
          { title: '临床队列合作', description: '围绕临床样本与研究问题开展队列研究合作。' },
          { title: '转化项目沟通', description: '衔接 LDT、IVD 研发和注册申报支持。' },
        ],
      },
    ],
    compliance: ['clinical'],
    cta: {
      title: '沟通临床质谱合作路径',
      description: '原型阶段仅模拟线索收集，不接真实后台。',
      actions: [{ label: '临床合作咨询', action: 'contact' }],
    },
  },
  health: {
    hero: {
      eyebrow: '健康管理',
      title: '基于代谢组学与健康数据管理的精准健康评估',
      description: '面向个人、企业、机构与健康管理中心，提供健康风险评估、报告解读和长期趋势追踪参考。',
      ctas: [{ label: '咨询健康管理方案', action: 'contact' }],
    },
    sections: [
      {
        title: '服务对象',
        items: ['个人', '企业', '机构', '健康管理中心'].map((title) => ({ title, description: '围绕健康体检、风险评估、报告解读和长期追踪开展服务沟通。' })),
      },
      {
        title: '健康评估方向',
        items: ['代谢健康', '慢病风险', '营养', '微生态', '内分泌', '心血管风险'].map((title) => ({ title, description: '用于健康风险评估和生活方式管理参考，不替代医生诊断和治疗建议。' })),
      },
      {
        title: '健康管理路径',
        items: [
          { title: '健康体检方案', description: '结合检测项目和健康数据形成评估方案。' },
          { title: '报告解读与健康建议', description: '帮助用户理解指标变化和生活方式管理方向。' },
          { title: '健康数据管理', description: '沉淀复测数据，观察长期趋势。' },
          { title: '复测与随访', description: '根据需求设置复测周期和跟踪路径。' },
        ],
      },
    ],
    compliance: ['health'],
    cta: {
      title: '规划健康管理咨询方案',
      description: '健康管理咨询仅用于沟通，不作为临床诊断和治疗依据。',
      actions: [{ label: '健康管理咨询', action: 'contact' }],
    },
  },
  translation: {
    hero: {
      eyebrow: '临床转化',
      title: '从代谢组学科研发现到临床转化',
      description: '承接标志物发现、队列验证、LDT 方法开发、IVD 试剂盒研发与产学研医合作。',
      ctas: [{ label: '咨询转化合作', action: 'contact' }],
    },
    sections: [
      {
        title: '转化能力概述',
        items: [
          { title: '研发管线', description: '围绕神经退行、胃癌/消化系统、肠道微生态、甾体激素/内分泌等方向设置展示位。' },
          { title: '标志物发现与验证', description: '将科研检测结果与队列验证结合，支撑后续转化评估。' },
          { title: '产学研医合作', description: '连接科研团队、临床场景、检测平台和转化研发。' },
        ],
      },
      {
        title: '研发与合作模块',
        items: [
          { title: 'IVD 试剂盒研发', description: '表达研发方向、方法开发和注册申报支持，不暗示已上市产品。' },
          { title: 'LDT 项目开发', description: '支持检测方法开发、验证和合作落地讨论。' },
          { title: '注册申报支持', description: '提供转化路径中的资料、方法和数据支持方向展示。' },
          { title: '临床队列合作', description: '共同设计样本、检测、数据分析和验证流程。' },
        ],
      },
    ],
    compliance: ['translation'],
    cta: {
      title: '共创科研到临床的转化路径',
      description: '围绕标志物、试剂盒、LDT 或队列合作展开初步沟通。',
      actions: [{ label: '转化合作咨询', action: 'contact' }],
    },
  },
  technology: {
    hero: {
      eyebrow: '技术平台',
      title: '质谱多组学技术平台',
      description: '建立技术可信度，解释云谱康如何稳定、高质量地完成科研检测、临床合作和健康管理数据分析。',
      ctas: [{ label: '查看平台能力', to: '/technology-platform' }, { label: '咨询平台合作', action: 'contact', type: 'secondary' }],
    },
    sections: [
      {
        title: '平台能力',
        items: ['质谱检测平台', '样本前处理平台', '标准品与内标体系', '代谢物/蛋白质数据库', '数据分析平台', '质量控制体系', '实验室环境与设备'].map((title) => ({ title, description: '高保真模板模块，后续可替换为真实设备、流程和平台资料。' })),
      },
      {
        title: '支撑业务',
        items: [
          { title: '科研服务', description: '支撑非靶向、靶向、蛋白组学和联合分析。' },
          { title: '临床合作', description: '支撑方法开发、质量体系和队列合作。' },
          { title: '健康管理', description: '支撑健康风险评估、数据管理和趋势追踪参考。' },
        ],
      },
    ],
    cta: {
      title: '讨论技术平台如何支撑您的项目',
      description: '通过咨询表单提交平台合作或检测需求。',
      actions: [{ label: '咨询技术平台', action: 'contact' }],
    },
  },
  resources: {
    hero: {
      eyebrow: '学术资源',
      title: '学术资源与技术内容中心',
      description: '沉淀论文成果、技术文章、行业资讯、公司新闻、下载中心和常见问题。',
      ctas: [{ label: '下载资料', action: 'contact' }],
    },
    sections: [
      {
        title: '内容分类',
        items: ['论文成果', '技术文章', '行业资讯', '公司新闻', '下载中心', '常见问题'].map((title) => ({ title, description: '内容列表占位，真实论文和资料需公司确认后填充。' })),
      },
      {
        title: '相关服务推荐',
        items: [
          { title: '科研服务', description: '查看代谢组学与多组学科研服务。', to: '/research-services' },
          { title: '靶向定量', description: '查看靶向代谢物定量质谱方法集群。', to: '/research-services/targeted-metabolomics' },
          { title: '技术平台', description: '了解质谱多组学平台能力。', to: '/technology-platform' },
        ],
      },
    ],
    cta: {
      title: '获取服务资料或送样指南',
      description: '资料下载在原型阶段通过咨询表单模拟。',
      actions: [{ label: '获取资料', action: 'contact' }],
    },
  },
  about: {
    hero: {
      eyebrow: '关于我们',
      title: '关于云谱康',
      description: '以代谢组学和临床质谱技术为核心，连接科研服务、临床检测、健康管理与临床转化。',
      ctas: [{ label: '咨询合作', action: 'contact' }],
    },
    sections: [
      {
        title: '公司介绍与使命愿景',
        items: [
          { title: '公司介绍', description: '精准健康科技公司官网定位展示，具体描述待公司最终资料确认。' },
          { title: '使命愿景', description: '通过质谱多组学能力服务科研、临床合作和健康管理场景。' },
          { title: '发展历程', description: '时间轴占位，待公司确认重要节点。' },
        ],
      },
      {
        title: '信任背书占位',
        items: [
          { title: '核心团队', description: '团队介绍占位，不编造姓名和头衔。' },
          { title: '实验室环境', description: '实验室视觉占位，后续替换授权素材。' },
          { title: '资质荣誉', description: '资质荣誉占位，待确认后展示。' },
          { title: '知识产权', description: '知识产权占位，待确认后展示。' },
          { title: '合作单位', description: '仅展示待授权占位，不展示真实 Logo。' },
        ],
      },
    ],
    cta: {
      title: '了解云谱康合作方式',
      description: '面向科研、临床、健康管理和产业转化合作方。',
      actions: [{ label: '咨询合作', action: 'contact' }],
    },
  },
  careers: {
    hero: {
      eyebrow: '加入我们',
      title: '加入云谱康',
      description: '加入代谢组学与临床质谱交叉创新团队，共同推动精准健康科技发展。',
      ctas: [{ label: '查看招聘岗位', to: '/careers' }, { label: '投递咨询', action: 'contact', type: 'secondary' }],
    },
    sections: [
      {
        title: '人才理念与团队文化',
        items: [
          { title: '人才理念', description: '鼓励跨学科合作、科学严谨和面向应用的创新。' },
          { title: '团队文化', description: '连接质谱技术、数据分析、临床转化和健康管理。' },
        ],
      },
      {
        title: '招聘岗位占位',
        items: [
          { title: '质谱研发/实验岗位', description: '岗位详情待 HR 确认后填充。' },
          { title: '生物信息/数据分析岗位', description: '岗位详情待 HR 确认后填充。' },
          { title: '产品/项目/商务岗位', description: '岗位详情待 HR 确认后填充。' },
        ],
      },
      {
        title: '招聘流程与投递方式',
        items: [
          { title: '招聘流程', description: '简历投递、初筛、面试、沟通录用，具体以 HR 确认为准。' },
          { title: '投递方式', description: '投递邮箱和岗位链接作为占位，待公司确认后补充。' },
        ],
      },
    ],
    cta: {
      title: '与云谱康一起探索精准健康未来',
      description: '招聘咨询在原型阶段通过咨询表单模拟提交。',
      actions: [{ label: '投递或咨询', action: 'contact' }],
    },
  },
}
