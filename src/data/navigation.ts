import type { NavItem } from '../types/content'

export const primaryNavigation: NavItem[] = [
  { label: '首页', path: '/', hasMegaMenu: false },
  {
    label: '科研服务',
    path: '/research-services',
    hasMegaMenu: true,
    children: [
      {
        label: '代谢组学解决方案',
        path: '/research-services',
        children: [
          {
            label: '非靶向代谢组学',
            path: '/research-services',
            children: [
              {
                label: '按产品版本',
                path: '/research-services',
                children: [
                  { label: '经典版：Meta-Phenotyper® Classic', path: '/research-services' },
                  { label: '专业版：Meta-Phenotyper® Professional', path: '/research-services' },
                  { label: '旗舰版：Meta-Phenotyper® Ultimate', path: '/research-services' },
                ],
              },
            ],
          },
          {
            label: '靶向代谢组学',
            path: '/research-services',
            children: [
              {
                label: '按 Panel 组合',
                path: '/research-services',
                children: [
                  { label: 'AQ-Gut 200', path: '/research-services' },
                  { label: 'AQ-Gut 400', path: '/research-services' },
                  { label: 'AQ-Gut 600', path: '/research-services' },
                ],
              },
              {
                label: '按化学类别',
                path: '/research-services',
                children: [
                  { label: '深度胆汁酸', path: '/research-services' },
                  { label: '甾体激素', path: '/research-services' },
                  { label: '氧化固醇', path: '/research-services' },
                  { label: '核黄素', path: '/research-services' },
                  { label: '维生素 D', path: '/research-services' },
                  { label: '生物蝶呤', path: '/research-services' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: '脂质组学解决方案',
        path: '/research-services',
        children: [
          { label: '非靶向脂质组学', path: '/research-services' },
          {
            label: '靶向脂质组学',
            path: '/research-services',
            children: [
              {
                label: '按化学类别',
                path: '/research-services',
                children: [
                  { label: '鞘脂', path: '/research-services' },
                  { label: 'CDP-DG', path: '/research-services' },
                ],
              },
              {
                label: '按 Panel 组合',
                path: '/research-services',
                children: [
                  { label: 'lipid-1200', path: '/research-services' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: '茶学解决方案',
        path: '/research-services',
        children: [
          { label: '非靶向广谱策略', path: '/research-services' },
          { label: '风味组学靶向定量', path: '/research-services' },
        ],
      },
      {
        label: '中医药研究解决方案',
        path: '/research-services',
        children: [
          { label: '体外成分质谱鉴定', path: '/research-services' },
          { label: '体内成分质谱鉴定', path: '/research-services' },
          { label: '活性成分定量', path: '/research-services' },
        ],
      },
      {
        label: '多组学联合分析解决方案',
        path: '/research-services',
        children: [
          { label: '代谢组 + 转录组联合研究', path: '/research-services' },
          { label: '代谢组 + 肠道菌群整合研究', path: '/research-services' },
          { label: '代谢组 + 蛋白组整合研究', path: '/research-services' },
        ],
      },
    ],
  },
  {
    label: '临床转化',
    path: '/clinical-translation',
    hasMegaMenu: true,
    children: [
      { label: '研发管线', path: '/clinical-translation' },
      { label: 'IVD 试剂盒研发', path: '/clinical-translation' },
      { label: 'LDT 项目开发', path: '/clinical-translation' },
      { label: '标志物发现与验证', path: '/clinical-translation' },
      { label: '临床队列合作', path: '/clinical-translation' },
      { label: '注册申报支持', path: '/clinical-translation' },
      { label: '产学研医合作', path: '/clinical-translation' },
    ],
  },
  {
    label: '技术平台',
    path: '/technology-platform',
    hasMegaMenu: true,
    children: [
      { label: '质谱检测平台', path: '/technology-platform' },
      { label: '样本前处理平台', path: '/technology-platform' },
      { label: '标准品与内标体系', path: '/technology-platform' },
      { label: '代谢物/蛋白质数据库', path: '/technology-platform' },
      { label: '数据分析平台', path: '/technology-platform' },
      { label: '质量控制体系', path: '/technology-platform' },
      { label: '实验室环境与设备', path: '/technology-platform' },
    ],
  },
  {
    label: '数据平台',
    path: '#',
    hasMegaMenu: true,
    children: [
      { label: 'NPMS 数据库', path: 'https://npms.org.cn/' },
      { label: 'IPOS 数据库', path: 'https://ipos.org.cn/' },
    ],
  },
  {
    label: '学术资源',
    path: '/academic-resources',
    hasMegaMenu: true,
    children: [
      { label: '论文成果', path: '/academic-resources' },
      { label: '技术文章', path: '/academic-resources' },
      { label: '行业资讯', path: '/academic-resources' },
      { label: '公司新闻', path: '/academic-resources' },
      { label: '下载中心', path: '/academic-resources' },
      { label: '常见问题', path: '/academic-resources' },
    ],
  },
  {
    label: '健康管理',
    path: '/health-management',
    hasMegaMenu: true,
    children: [
      { label: '代谢健康评估', path: '/health-management' },
      { label: '慢病风险评估', path: '/health-management' },
      { label: '营养与微生态评估', path: '/health-management' },
      { label: '健康体检方案', path: '/health-management' },
      { label: '健康数据管理', path: '/health-management' },
      { label: '报告解读与健康建议', path: '/health-management' },
      { label: '长期追踪与复测', path: '/health-management' },
      { label: '企业/机构健康管理', path: '/health-management' },
    ],
  },
  {
    label: '关于我们',
    path: '/about',
    hasMegaMenu: true,
    children: [
      { label: '公司介绍', path: '/about' },
      { label: '发展历程', path: '/about' },
      { label: '核心团队', path: '/about' },
      { label: '实验室环境', path: '/about' },
      { label: '资质荣誉', path: '/about' },
      { label: '知识产权', path: '/about' },
      { label: '合作单位', path: '/about' },
    ],
  },
  {
    label: '加入我们',
    path: '/careers',
    hasMegaMenu: true,
    children: [
      { label: '人才理念', path: '/careers' },
      { label: '团队文化', path: '/careers' },
      { label: '招聘岗位', path: '/careers' },
      { label: '招聘流程', path: '/careers' },
      { label: '投递方式', path: '/careers' },
    ],
  },
]
