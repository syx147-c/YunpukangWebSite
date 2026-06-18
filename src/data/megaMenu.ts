import type { MegaMenuCategory, MegaMenuGroup, MegaMenuItem } from '../types/content'
import { primaryNavigation } from './navigation'

const menuCopy: Record<string, any> = {
  科研服务: {
    defaultPanel: {
      title: '科研服务',
      description: '面向高校、医院科研、药企和科研机构，提供代谢组学、蛋白组学及多组学联合分析服务。',
      cta: { label: '提交项目需求', action: 'contact' },
    },
    visual: {
      title: '从样本检测到数据解读',
      description: '支持疾病机制、标志物发现和药物研发研究。',
      theme: 'spectrum',
    },
    categories: [
      {
        label: '代谢组学解决方案',
        items: [
          {
            label: '非靶向代谢组学',
            path: '/research-services',
            title: '非靶向代谢组学',
            description: '全面无偏倚地检测样本中的代谢物谱，适用于生物标志物发现和代谢通路研究，可按产品版本选择交付深度。',
            cta: { label: '咨询合作', action: 'contact' as const },
            children: [
              {
                label: '按产品版本',
                path: '/research-services',
                title: '按产品版本',
                description: '根据研究目标、样本规模和数据解读深度，选择 Classic、Professional 或 Ultimate 版本。',
                cta: { label: '咨询合作', action: 'contact' as const },
                children: [
                  { label: '经典版：Meta-Phenotyper® Classic', path: '/research-services', title: 'Meta-Phenotyper® Classic', description: '经典版非靶向代谢组学服务，适合基础代谢表型扫描和探索性研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '专业版：Meta-Phenotyper® Professional', path: '/research-services', title: 'Meta-Phenotyper® Professional', description: '专业版非靶向代谢组学服务，强化注释深度、统计分析和通路解释。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '旗舰版：Meta-Phenotyper® Ultimate', path: '/research-services', title: 'Meta-Phenotyper® Ultimate', description: '旗舰版非靶向代谢组学服务，面向高要求项目提供更完整的数据解读和研究支持。', cta: { label: '咨询合作', action: 'contact' as const } },
                ],
              },
            ],
          },
          {
            label: '靶向代谢组学',
            path: '/research-services',
            title: '靶向代谢组学',
            description: '针对特定代谢物类别进行高灵敏度、高特异性的定量检测分析，可按 Panel 组合或化学类别选择方案。',
            cta: { label: '咨询合作', action: 'contact' as const },
            children: [
              {
                label: '按 Panel 组合',
                path: '/research-services',
                title: '按 Panel 组合',
                description: '围绕肠道菌群相关代谢物覆盖深度，提供 AQ-Gut 200、400、600 等靶向定量组合。',
                cta: { label: '咨询合作', action: 'contact' as const },
                children: [
                  { label: 'AQ-Gut 200', path: '/research-services', title: 'AQ-Gut 200', description: '肠道菌群相关代谢物定量检测方案，覆盖 200 种关键代谢物。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: 'AQ-Gut 400', path: '/research-services', title: 'AQ-Gut 400', description: '肠道菌群相关代谢物定量检测方案，覆盖 400 种关键代谢物。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: 'AQ-Gut 600', path: '/research-services', title: 'AQ-Gut 600', description: '肠道菌群相关代谢物定量检测方案，覆盖 600 种关键代谢物。', cta: { label: '咨询合作', action: 'contact' as const } },
                ],
              },
              {
                label: '按化学类别',
                path: '/research-services',
                title: '按化学类别',
                description: '面向胆汁酸、甾体激素、氧化固醇、维生素及蝶呤类等明确化学类别开展靶向定量。',
                cta: { label: '咨询合作', action: 'contact' as const },
                children: [
                  { label: '深度胆汁酸', path: '/research-services', title: '深度胆汁酸', description: '高覆盖度胆汁酸谱定量检测，支持肝胆疾病和肠道健康相关研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '甾体激素', path: '/research-services', title: '甾体激素', description: '甾体激素谱靶向定量检测，适用于内分泌和生殖健康研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '氧化固醇', path: '/research-services', title: '氧化固醇', description: '氧化固醇类代谢物靶向检测，支持氧化应激和心血管疾病研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '核黄素', path: '/research-services', title: '核黄素', description: '核黄素（维生素 B2）及其衍生物的靶向定量检测。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '维生素 D', path: '/research-services', title: '维生素 D', description: '维生素 D 及其代谢产物的精准定量检测方案。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: '生物蝶呤', path: '/research-services', title: '生物蝶呤', description: '生物蝶呤类化合物靶向检测，支持神经递质和免疫相关研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                ],
              },
            ],
          },
        ],
      },
      {
        label: '脂质组学解决方案',
        items: [
          { label: '非靶向脂质组学', path: '/research-services', title: '非靶向脂质组学', description: '全面覆盖脂质分子类别，无偏向性地检测和鉴定生物样本中的脂质组。', cta: { label: '咨询合作', action: 'contact' as const } },
          {
            label: '靶向脂质组学',
            path: '/research-services',
            title: '靶向脂质组学',
            description: '针对特定脂质类别进行高准确度定量检测分析，可按化学类别或 Panel 组合选择。',
            cta: { label: '咨询合作', action: 'contact' as const },
            children: [
              {
                label: '按化学类别',
                path: '/research-services',
                title: '按化学类别',
                description: '围绕特定脂质化学类别开展靶向定量，适合机制研究和候选指标验证。',
                cta: { label: '咨询合作', action: 'contact' as const },
                children: [
                  { label: '鞘脂', path: '/research-services', title: '鞘脂', description: '鞘脂类化合物靶向定量检测，支持细胞信号传导和疾病机制研究。', cta: { label: '咨询合作', action: 'contact' as const } },
                  { label: 'CDP-DG', path: '/research-services', title: 'CDP-DG', description: 'CDP-甘油二酯类脂质分子靶向定量检测方案。', cta: { label: '咨询合作', action: 'contact' as const } },
                ],
              },
              {
                label: '按 Panel 组合',
                path: '/research-services',
                title: '按 Panel 组合',
                description: '以固定脂质检测 Panel 提供高深度覆盖和稳定定量。',
                cta: { label: '咨询合作', action: 'contact' as const },
                children: [
                  { label: 'lipid-1200', path: '/research-services', title: 'lipid-1200', description: '覆盖 1200 种脂质分子的高深度脂质组学定量检测方案。', cta: { label: '咨询合作', action: 'contact' as const } },
                ],
              },
            ],
          },
        ],
      },
      {
        label: '茶学解决方案',
        items: [
          { label: '非靶向广谱策略', path: '/research-services', title: '非靶向广谱策略', description: '基于高分辨质谱的茶叶代谢物全谱检测，支持茶叶品质和产地溯源研究。', cta: { label: '咨询合作', action: 'contact' as const } },
          { label: '风味组学靶向定量', path: '/research-services', title: '风味组学靶向定量', description: '茶叶风味相关代谢物的靶向定量检测，支持茶叶加工工艺优化研究。', cta: { label: '咨询合作', action: 'contact' as const } },
        ],
      },
      {
        label: '中医药研究解决方案',
        items: [
          { label: '体外成分质谱鉴定', path: '/research-services', title: '体外成分质谱鉴定', description: '中药提取物和制剂中化学成分的系统性质谱鉴定分析。', cta: { label: '咨询合作', action: 'contact' as const } },
          { label: '体内成分质谱鉴定', path: '/research-services', title: '体内成分质谱鉴定', description: '中药给药后体内原型成分及代谢产物的质谱鉴定分析。', cta: { label: '咨询合作', action: 'contact' as const } },
          { label: '活性成分定量', path: '/research-services', title: '活性成分定量', description: '中药活性成分的靶向定量检测，支持药效物质基础研究。', cta: { label: '咨询合作', action: 'contact' as const } },
        ],
      },
      {
        label: '多组学联合分析解决方案',
        items: [
          { label: '代谢组 + 转录组联合研究', path: '/research-services', title: '代谢组 + 转录组联合研究', description: '整合代谢组与转录组数据，系统解析基因表达与代谢表型的关联网络。', cta: { label: '咨询合作', action: 'contact' as const } },
          { label: '代谢组 + 肠道菌群整合研究', path: '/research-services', title: '代谢组 + 肠道菌群整合研究', description: '结合代谢组学与肠道菌群测序数据，揭示菌群-宿主共代谢机制。', cta: { label: '咨询合作', action: 'contact' as const } },
          { label: '代谢组 + 蛋白组整合研究', path: '/research-services', title: '代谢组 + 蛋白组整合研究', description: '代谢组与蛋白组学联合分析，多维度解析生物调控网络。', cta: { label: '咨询合作', action: 'contact' as const } },
        ],
      },
    ],
  },
  健康管理: {
    defaultPanel: {
      title: '健康管理',
      description: '基于代谢组学和临床质谱数据，提供代谢健康评估、健康数据管理、报告解读和长期追踪服务。',
      cta: { label: '咨询健康管理方案', action: 'contact' },
    },
    visual: {
      title: '从一次检测到长期趋势追踪',
      description: '辅助健康风险评估与生活方式管理参考。',
      theme: 'health',
    },
  },
  临床转化: {
    defaultPanel: {
      title: '临床转化',
      description: '推动代谢组学研究成果向 LDT、IVD 试剂盒研发、临床合作和健康管理场景转化。',
      cta: { label: '咨询转化合作', action: 'contact' },
    },
    visual: {
      title: '从标志物发现到产品化验证',
      description: '构建科研到临床的转化合作路径。',
      theme: 'translation',
    },
  },
  技术平台: {
    defaultPanel: {
      title: '技术平台',
      description: '整合质谱检测、样本前处理、标准品、数据库、数据分析和质量控制能力。',
      cta: { label: '查看平台能力', to: '/technology-platform' },
    },
    visual: {
      title: '标准化平台支撑可重复数据',
      description: '保障检测覆盖度、定量准确性和数据可重复性。',
      theme: 'platform',
    },
  },
  数据平台: {
    defaultPanel: {
      title: '数据平台',
      description: '连接代谢组学、表型组学与科研数据资源，为科研项目设计、数据检索与结果解释提供支持。',
      cta: { label: '咨询合作', action: 'contact' as const },
    },
    visual: {
      title: '连接多维科研数据资源',
      description: '为代谢组学与表型组学研究提供数据检索与解释支持。',
      theme: 'platform',
    },
    items: [
      {
        label: 'NPMS 数据库',
        path: 'https://npms.org.cn/',
        title: 'NPMS 数据库',
        description: '访问 NPMS 数据资源平台',
        cta: { label: '访问', action: 'contact' as const },
        badge: '数据库',
      },
      {
        label: 'IPOS 数据库',
        path: 'https://ipos.org.cn/',
        title: 'IPOS 数据库',
        description: '访问 IPOS 数据资源平台',
        cta: { label: '访问', action: 'contact' as const },
        badge: '数据库',
      },
    ],
  },
  学术资源: {
    defaultPanel: {
      title: '学术资源',
      description: '沉淀论文成果、技术文章、行业资讯、服务手册、送样指南和常见问题。',
      cta: { label: '查看内容中心', to: '/academic-resources' },
    },
    visual: {
      title: '用内容降低沟通成本',
      description: '论文、资料和 FAQ 作为客户评审材料入口。',
      theme: 'resources',
    },
  },
  关于我们: {
    defaultPanel: {
      title: '关于云谱康',
      description: '了解云谱康的公司定位、实验室平台、团队实力、知识产权和合作成果占位。',
      cta: { label: '了解公司', to: '/about' },
    },
    visual: {
      title: '以质谱多组学连接科研与精准健康',
      description: '合作单位与荣誉仅保留待授权占位。',
      theme: 'about',
    },
  },
  加入我们: {
    defaultPanel: {
      title: '加入云谱康',
      description: '加入代谢组学与临床质谱交叉创新团队，共同推动精准健康科技发展。',
      cta: { label: '查看招聘岗位', to: '/careers' },
    },
    visual: {
      title: '与专业团队探索精准健康未来',
      description: '招聘岗位与投递方式用于原型展示，占位待 HR 确认。',
      theme: 'career',
    },
  },
}

function flattenMegaItems(items: MegaMenuItem[]): MegaMenuItem[] {
  return items.flatMap((item) => [item, ...(item.children ? flattenMegaItems(item.children) : [])])
}

export const megaMenus: MegaMenuGroup[] = primaryNavigation
  .filter((item) => item.hasMegaMenu && item.children)
  .map((item) => {
    const copy = menuCopy[item.label]
    const categories = copy?.categories as MegaMenuCategory[] | undefined
    const flatItems = copy?.items
      ? (copy.items as MegaMenuItem[])
      : categories
      ? flattenMegaItems(categories.flatMap((c) => c.items))
      : item.children!.map((child) => ({
          label: child.label,
          path: child.path,
          title: child.label,
          description: `${child.label}围绕${item.label}业务场景展开，帮助客户快速理解服务边界、交付内容和咨询入口。`,
          cta: child.path.includes('targeted')
            ? { label: '查看详情', to: child.path }
            : { label: '咨询合作', action: 'contact' as const },
        }))
    return {
      key: item.label,
      label: item.label,
      path: item.path,
      items: flatItems,
      categories,
      defaultPanel: copy?.defaultPanel,
      visual: copy?.visual,
    }
  })
