export const profile = {
  brand: 'jjzhang.zone',
  name: '张佳俊',
  role: '高级软件开发工程师',
  location: '杭州 · 富阳银湖',
  phone: '15757278309',
  email: 'jjzhanggmd@163.com',
  kicker: '现居杭州富阳银湖 · 开放沟通新机会',
  // 中文数字与量词之间使用不间断空格，避免行首孤数字
  lead:
    '8\u00A0年前端开发与团队管理经验。在中控技术（智汇元）智慧园区产品线，主导中后台、数据驾驶舱、移动端与智能体等多端产品的架构设计与落地，同时带队7\u00A0人技术小组，兼顾 Python 服务与大模型 Agent 对接。',
  company: '中控技术 · 智汇元 · 智慧园区',
}

export const stats = [
  { value: 8, suffix: '年', label: '前端开发与团队管理' },
  { value: 30, suffix: '+', label: '年交付项目（6人小组）' },
  { value: 98, suffix: '%', label: '项目交付准时率' },
  { value: 25, suffix: '+', label: '智慧园区产品线微应用' },
  { value: 12, suffix: '个', label: '驾驶舱产品落地园区' },
]

export const strengths = [
  {
    label: '01 / 全链路交付',
    title: '多形态产品的技术选型与架构',
    description:
      '精通 React、Vue、Electron，可独立负责中后台、数据大屏、智能体等多形态产品架构；前端之外还能独立完成 Python 后端逻辑。',
  },
  {
    label: '02 / ToB 深耕',
    title: '智慧园区 / 政企经验',
    description:
      '主导大型数据驾驶舱、智能体平台落地，覆盖园区端与企业端闭环；此前支撑网易严选等客户50+大型活动。',
  },
  {
    label: '03 / 团队管理',
    title: '4年前端团队管理',
    description:
      '跨部门协调与进度管控，曾带6人小组年交付30+项目，空转率低于20%，准时率98%；现负责7人技术小组。',
  },
  {
    label: '04 / 工程化沉淀',
    title: '把重复的活做成资产',
    description:
      '搭建工程化体系与可配置模板，CI/CD 自动化发布，同类型项目效率提升40%+；累计沉淀20+份文档形成团队知识库。',
  },
]

export const experiences = [
  {
    company: '中控技术（智汇元）',
    role: '高级软件开发工程师 · Energy 事业群-智慧园区业务部',
    time: '2023.6 — 至今',
    desc: '负责智慧园区产品线的前端技术架构设计、核心功能开发与7人技术小组日常管理，兼顾前端开发与 Python 相关业务的实现。',
    points: [
      '主导中后台、数据驾驶舱、移动端 H5、智能体等多端产品开发，支撑园区端、企业端双端业务闭环。',
      '独立完成隐患识别智能体、任务调度、知识库模块的 Python 服务，隐患排查效率提升60%。',
      '落地工程化流程，交付周期缩短30%，线上 Bug 率降低45%。',
      '2套基线驾驶舱模板，同类效率+50%；园宝中枢联动8款业务智能体，问题解决率92%。',
    ],
  },
  {
    company: '杭州拓麦科技有限公司',
    role: '中后台前端组长 · 互联网软件服务',
    time: '2018.9 — 2023.5',
    desc: '负责对接网易严选等客户的中后台业务前端开发与6人前端小组管理，主导项目技术选型、架构设计与全流程落地。',
    points: [
      '主导完成工单审批、权限管理、项目发布平台等30+中后台系统，支撑研发/运营/管理多部门。',
      '标准化流程与文档规范，小组空转率<20%，连续12个季度交付准时率100%。',
      '微前端架构落地运营工作台，多活动并行开发效率提升40%。',
      '全流程管控需求到上线，累计支撑网易严选50+大型活动。',
    ],
  },
]

export const projects = [
  {
    title: '智园智能体平台',
    tag: '项目技术负责人',
    time: '2025.10 — 2026.06',
    summary:
      '打造集智能问答、任务调度、知识库管理于一体的统一智能体平台，覆盖园区、企业双端用户。',
    bg: '为解决园区管理场景下业务系统分散、数据不互通、运营效率低的痛点，打造集智能问答、任务调度、知识库管理等功能于一体的统一智能体平台，覆盖园区、企业双端用户，实现业务流程线上化、智能化。',
    points: [
      '主导平台整体技术架构设计，前端采用 React + TypeScript + Vite，后端 Python 服务基于 FastAPI 开发，对接大模型 Agent 接口，实现前后端协同开发与性能优化。',
      '开发中枢「园宝」智能体，实现通用问题解答、跨智能体自动任务分派，联动隐患识别、政策咨询、设备运维等8款专项智能体，用户无需跳转多个系统即可完成全场景业务办理。',
      '独立完成隐患识别智能体、任务调度、知识库模块的 Python 端逻辑开发，实现风险作业自动检索、任务自动下发与跟踪、文档智能归档等核心能力。',
      '搭建分级权限体系，实现分级可见通讯录、管理员专属事件日志等功能，保障数据访问安全，满足园区多级管理需求。',
    ],
    outcome: '平台已在4个合作园区落地使用，园区运营管理效率提升50%。',
    metrics: [
      { value: '4个', label: '合作园区落地' },
      { value: '8款', label: '专项智能体联动' },
      { value: '50%', label: '运营管理效率提升' },
    ],
  },
  {
    title: '标准化数据驾驶舱体系建设',
    tag: '前端负责人',
    time: '2024.04 — 至今',
    summary: '打造可配置的标准化驾驶舱模板体系，降低定制开发成本，提升交付效率。',
    bg: '公司业务快速扩张，不同园区定制化驾驶舱开发重复工作量大、交付周期长，需要打造可配置的标准化驾驶舱模板体系，降低开发成本，提升交付效率。',
    points: [
      '主导2套基线版本标准化驾驶舱的设计与开发，完成大屏、小屏两套可视化配置模板，支持20+通用可视化组件的拖拽配置、样式自定义、数据源灵活对接。',
      '完成余姚&象山、岱山、宁东3个定制化驾驶舱项目的落地，基于标准化模板快速适配不同园区的业务需求，实现能耗、安防、设备、运营等多维度数据的实时展示与分析。',
      '封装通用可视化组件库与工具函数，形成内部前端资产库，后续同类型项目开发无需从零搭建，可直接基于模板快速适配。',
    ],
    outcome:
      '同类型定制化驾驶舱开发效率提升50%，交付周期从平均45天缩短至22天，每年为公司节省研发成本超80万，相关模板已成为公司智慧园区产品线的标准交付方案。',
    metrics: [
      { value: '+50%', label: '同类开发效率' },
      { value: '45→22天', label: '交付周期' },
      { value: '80万+', label: '年节省研发成本' },
    ],
  },
  {
    title: '省公安厅 · 亚运安保指挥平台驾驶舱',
    tag: '项目 Leader + 前端开发',
    time: '2022.04 — 2022.10',
    summary: '搭建亚运安保指挥大屏，整合全省安保资源，支撑实时展示与快速处置。',
    bg: '为保障杭州亚运会期间的安保工作高效开展，搭建亚运安保指挥大屏系统，整合全省安保资源数据，为指挥中心提供实时数据展示与决策支持，实现安保事件的快速响应与处置。',
    points: [
      '主导项目前端技术架构设计，采用 React + Antd + SuperMap + ECharts 技术栈，实现多源数据的可视化展示与交互功能。',
      '完成全省检查站点的地理定位与地图可视化功能开发，支持点击检查站调取实时 RTSP 视频流，实现安保资源的直观监控与调度。',
      '开发数据统计分析与报表自动生成功能，支持多维度数据筛选、趋势分析与报表导出，为指挥中心决策提供数据支撑。',
    ],
    outcome:
      '平台在亚运会期间稳定运行零故障，安保事件响应时间从平均15分钟缩短至5分钟，获得省公安厅的官方感谢信与项目优秀成果奖。',
    metrics: [
      { value: '零故障', label: '亚运期间稳定运行' },
      { value: '15→5分钟', label: '事件响应时间' },
      { value: '感谢信', label: '省公安厅官方认可' },
    ],
  },
  {
    title: '网易严选 · 天枢发布平台',
    tag: '项目 Leader + 前端开发',
    time: '2021.03 — 2021.11',
    summary: '一体化研发效能平台，整合流程管理、质量管控与数据度量能力。',
    bg: '网易严选内部研发流程分散、缺乏统一管理规范，研发效率与项目质量难以管控，需要搭建一体化研发效能平台，整合流程管理、质量管控、数据度量等能力，提升团队协作效率。',
    points: [
      '主导项目前端架构设计，采用 React + Antd + AntV X6 技术栈，完成度量统计、项目总览、工单管理、流程规范、权限控制等核心模块的开发。',
      '设计并实现研发流程可视化功能，基于 X6 实现流程节点的拖拽配置与链路展示，支持 CI/CD 流程的自定义配置与状态实时跟踪。',
      '搭建细粒度权限控制体系，实现不同角色用户的功能与数据访问隔离，保障平台数据安全。',
    ],
    outcome:
      '平台上线后覆盖网易严选100+研发团队，项目平均交付周期缩短25%，线上缺陷率降低40%，成为严选内部核心研发基建系统。',
    metrics: [
      { value: '100+', label: '覆盖研发团队' },
      { value: '-25%', label: '平均交付周期' },
      { value: '-40%', label: '线上缺陷率' },
    ],
  },
]

export type PortfolioCat = 'all' | 'cockpit' | 'agent' | 'safety' | 'gis' | 'plat' | 'mobile'

export const portfolioFilters: { id: PortfolioCat; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'cockpit', label: '驾驶舱 / 大屏' },
  { id: 'agent', label: '智能体 / AI' },
  { id: 'safety', label: '安全业务域' },
  { id: 'gis', label: 'GIS / 地图' },
  { id: 'plat', label: '平台 / 工程化' },
  { id: 'mobile', label: '移动端' },
]

export const portfolioItems: {
  cat: Exclude<PortfolioCat, 'all'>
  catLabel: string
  title: string
  en: string
  desc: string
  tags: string[]
}[] = [
  { cat: 'cockpit', catLabel: '驾驶舱 / 大屏', title: '园区综合驾驶舱', en: 'cockpit-web', desc: '嵌入版园区大屏，能耗 / 安防 / 设备多维数据实时展示，autofit 大小屏适配。', tags: ['React', 'Umi3', 'ECharts'] },
  { cat: 'cockpit', catLabel: '驾驶舱 / 大屏', title: '独立版驾驶舱', en: 'independent-cockpit-web', desc: '可独立部署的大屏应用，移动端适配方案，作为标准交付模板的一部分。', tags: ['React18', 'Umi4', 'antd5'] },
  { cat: 'cockpit', catLabel: '驾驶舱 / 大屏', title: '定制化驾驶舱 ×3', en: 'yuyao · daishan · ningdong', desc: '余姚&象山、岱山、宁东三套定制驾驶舱，基于标准化模板快速适配，已在12个园区落地。', tags: ['可配置模板', 'ECharts'] },
  { cat: 'agent', catLabel: '智能体 / AI', title: '智园智能体平台', en: 'zhiyuan-agent-platform', desc: '统一智能体平台：中枢园宝 + 8款专项智能体，任务调度、知识库、分级权限，落地4个园区。', tags: ['React', 'FastAPI', 'LLM Agent'] },
  { cat: 'agent', catLabel: '智能体 / AI', title: '隐患识别智能体', en: 'hazard-agent', desc: '风险作业智能检索、文档自动归档的 Python 服务，上线后隐患排查效率提升60%。', tags: ['Python', 'LangGraph'] },
  { cat: 'agent', catLabel: '智能体 / AI', title: '数字人多模态问答', en: 'digital-human-qa', desc: '文本 + 语音双通道数字人问答，园区办事咨询人工接待量减少35%。', tags: ['多模态交互', '前端交互'] },
  { cat: 'agent', catLabel: '智能体 / AI', title: 'AI Agent 平台研究', en: 'agent-admin + py/java backends', desc: '个人方向探索：Agent 管理后台与多语言后端原型，验证智能体编排与运维形态。', tags: ['Agent Admin', 'Python', 'Java'] },
  { cat: 'safety', catLabel: '安全业务域', title: '双重预防管理', en: 'dual-prevent-web', desc: '风险分级管控 + 隐患闭环整改双预防体系，含水球图等风险可视化。', tags: ['React', 'ECharts', 'react-pdf'] },
  { cat: 'safety', catLabel: '安全业务域', title: '重大危险源监测', en: 'hazard-manage-web', desc: '危险源包保责任落实监控与报警数据核查，集成 H265 视频 / 音频播放。', tags: ['antd4', '视频监控'] },
  { cat: 'safety', catLabel: '安全业务域', title: '报警中心', en: 'alarm-center-web', desc: '报警推送配置、报警台账与 AI 分析，统一承接各子系统报警事件。', tags: ['React', 'Umi3'] },
  { cat: 'safety', catLabel: '安全业务域', title: '安全检查 / 风险分析', en: 'security-check · risk-analysis', desc: '安全检查记录管理与 EDRB 风险指数、企业风险画像分析。', tags: ['风险建模', 'ECharts'] },
  { cat: 'safety', catLabel: '安全业务域', title: '敏捷应急', en: 'agile-emergency-web', desc: '应急响应、演练脚本编排与预警发布，支撑园区应急全流程。', tags: ['React', 'react-pdf'] },
  { cat: 'safety', catLabel: '安全业务域', title: '特殊作业管理', en: 'special-job-web · multipage', desc: '动火 / 受限空间等八大作业票全流程，支持票据打印导出。', tags: ['html2canvas', 'jsPDF'] },
  { cat: 'safety', catLabel: '安全业务域', title: '安全基础管理', en: 'base-manager-web', desc: '企业基础信息、行政许可、第三方单位与看板管理，产品线功能最全的子应用。', tags: ['AntV L7', '高德地图'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: 'SES-GIS 三维厂区', en: 'ses-gis · ses-gis-park', desc: 'Cesium 三维 GIS 厂区地图：热区、视频融合、模型查看，园区定制分支。', tags: ['Cesium', 'flv/hls'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: 'PLS-200 人员定位', en: 'pls-map-200', desc: '门禁 / 告警 / 设备 / 时钟一体化的人员定位管理台。', tags: ['定位地图', 'ECharts'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: '事故模拟推演', en: 'accident-simulation-web', desc: '基于高德地图的事故扩散与情景模拟推演。', tags: ['高德地图', '情景模拟'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: '产业链图谱', en: 'industry-analysis-web', desc: 'AntV X6 图谱编辑：产业链分析图谱与分类监管流程图。', tags: ['AntV X6', '图编辑'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: '化工治理政府端', en: 'chemical-gov-ui', desc: 'Vue2 政府侧监管大屏与图谱，ECharts-gl / G6 / Highcharts 多库并用。', tags: ['Vue2', '腾讯地图'] },
  { cat: 'gis', catLabel: 'GIS / 地图', title: '环境质量监测', en: 'baoshan-env-web', desc: '宝山环保融合平台：空气站点监测数据与质量看板。', tags: ['React18', 'ECharts'] },
  { cat: 'plat', catLabel: '平台 / 工程化', title: '前端 DevOps 平台', en: 'devops-tools', desc: '自建发布工具链：数据接入标准、多环境构建上传与自动化发布。', tags: ['pro-components', 'CI/CD'] },
  { cat: 'plat', catLabel: '平台 / 工程化', title: '公共组件资产库', en: 'web-compent-web', desc: '跨项目复用的地图 / 图谱 / 驾驶舱组件集合与多环境发布脚本。', tags: ['L7', 'X6', '组件复用'] },
  { cat: 'plat', catLabel: '平台 / 工程化', title: '第三方系统接入', en: 'third-sys-web · ipark-data-acc', desc: '外部系统数据接入与接入率统计，统一数据标准薄壳应用。', tags: ['数据接入'] },
  { cat: 'plat', catLabel: '平台 / 工程化', title: '园区管理后台', en: 'park-admin-ui', desc: 'Vue3 + Element Plus + Pinia 动态菜单园区管理系统后台。', tags: ['Vue3', 'Pinia', 'Vite'] },
  { cat: 'plat', catLabel: '平台 / 工程化', title: '企业门户 / 协作评分', en: 'enterprise-menu · co-policy-web', desc: '园区企业门户菜单微应用与协作政策评分业务。', tags: ['微前端子应用'] },
  { cat: 'mobile', catLabel: '移动端', title: '特殊作业 H5', en: 'special-job-h5', desc: '嵌入园区 App 的移动端作业票应用，antd-mobile + RTK。', tags: ['Vite', 'React18', 'antd-mobile'] },
  { cat: 'mobile', catLabel: '移动端', title: '工单移动端 H5', en: 'supcloud-workorder-h5', desc: 'supCloud 工单系统移动端，RTK 状态管理。', tags: ['React18', 'RTK'] },
  { cat: 'mobile', catLabel: '移动端', title: '微信小程序生态', en: 'wx apps + uniapp', desc: '小程序端与 contractor 微信 uniapp 交付经验，覆盖园区巡检场景。', tags: ['小程序', 'uniapp'] },
]

export const education = {
  school: '三亚学院',
  major: '计算机科学与技术 - 网络工程 · 本科',
  time: '2014.09 — 2018.06',
}

export const navItems = [
  {
    label: '关于',
    description: '核心优势与技术能力',
    bgColor: '#1c1813',
    textColor: '#f2efe6',
    links: [
      { label: '核心优势', href: '#strengths' },
      { label: '相关技能', href: '#skills' },
    ],
  },
  {
    label: '履历',
    description: '经历与代表项目',
    bgColor: '#16130f',
    textColor: '#f2efe6',
    links: [
      { label: '工作经历', href: '#experience' },
      { label: '代表项目', href: '#projects' },
    ],
  },
  {
    label: '作品',
    description: '智慧园区项目集',
    bgColor: '#12100c',
    textColor: '#f2efe6',
    links: [
      { label: '项目集', href: '#portfolio' },
      { label: '联系我', href: '#contact' },
    ],
  },
]
