import type { FooterConfig } from '../types/content'
import { primaryNavigation } from './navigation'

export const footerConfig: FooterConfig = {
  brand: {
    logo: 'iPhenome / 云谱康',
    sloganCn: '尖端质谱多组学科技服务与临床转化专家',
    sloganEn: 'Cutting-edge multiomics technologies enable precision medicine research',
  },
  quickNav: primaryNavigation.map(({ label, path }) => ({ label, path })),
  contact: {
    address: '大连高新技术产业园区信达街57号 生命科学产业园',
    phone: '0411-82287117',
    email: 'marcom@imetabolomics.cn',
  },
  qrCodes: [
    { title: '云谱康微信公众号', description: '公众号二维码占位' },
    { title: '科研服务咨询 / 健康管理咨询', description: '咨询二维码占位' },
  ],
  copyright: '云谱康（大连）生物科技有限公司 © 2020-2026 版权所有',
  filings: ['ICP 备案号：待补充', '公安联网备案号：待补充', '隐私政策', '网站地图'],
}
