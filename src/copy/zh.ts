import faqs from '@data/zh/faqs.json';
import features from '@data/zh/features.json';
import pricing from '@data/zh/pricing.json';

/**
 * 中文 copy 表。结构与 `./en.ts` 完全一致（`Copy` 类型），
 * 缺少任何键都会在 `astro check` 时报错。
 *
 * 路径不做本地化（用 `/products` 而非 `/zh/products`）；
 * 调用方通过 `localePath()` from `@utils/locale` 加前缀。
 */
export const zh = {
  site: {
    description:
      'XMore Studio 提供顶级五金工具和专业的施工服务，满足您的所有项目需求。立即探索并联系我们的销售团队，体验卓越的品质与可靠性。',
    descriptionShort:
      'XMore Studio 提供顶级五金工具和专业的施工服务，满足您的所有项目需求。',
    ogTitle: 'XMore Studio：五金工具与施工服务',
    ogDescription:
      '用 XMore Studio 的优质五金工具和专业施工服务装备您的项目。深受行业领导者信赖，XMore Studio 提供简便、实惠且可靠的产品。体验以用户为中心的设计和尖端工具带来的不同。立即开始探索！',
  },

  layout: {
    skipToContent: '跳至内容',
    changeLanguage: '切换语言',
    toggleNavigation: '切换导航',
    darkTheme: '深色主题切换',
    lightTheme: '浅色主题切换',
    toggleTheme: '切换主题',
  },

  nav: {
    labels: {
      home: '首页',
      portfolio: '作品集',
      photography: '摄影',
      products: '作品',
      services: '项目',
      blog: '博客',
      experiments: '实验',
      contact: '联系',
    },
    footer: {
      sectionTitles: {
        ecosystem: '探索',
        company: '关于',
      },
      links: {
        documentation: '笔记',
        tools: '作品',
        services: '项目',
        about: '关于',
        blog: '博客',
        categories: '分类',
        careers: '近况',
        customers: '朋友',
      },
      hiringBadge: '欢迎合作',
      stayUpToDate: '保持最新动态',
      stayUpToDateContent: '随时了解最新工具和独家优惠。',
      newsletterDemoMessage:
        '感谢您！（仅演示 — 接入邮件服务以收集真实订阅者。）',
    },
    megaMenu: {
      services: {
        guides: {
          title: '探索建议与说明',
          description: '深入了解 XMore Studio 所有功能的有用指南和说明',
        },
        integrations: {
          title: '发现集成',
          description: '增强您的工作流程。与您喜爱的所有工具无缝集成',
        },
        experts: {
          title: '专家服务',
          description: '通过 XMore Studio 的专家服务超越工具本身',
        },
        tools: {
          title: '尖端工具',
          description:
            '更智能、更快速地构建。体验 XMore Studio 尖端施工工具带来的全新效率',
        },
        plans: {
          title: '简单方案',
          description: '通过 XMore Studio 简洁且价值导向的方案提升您的效率',
        },
        community: {
          title: '社区论坛',
          description: '与其他 XMore Studio 用户一起学习、分享和交流',
        },
      },
      successStories: '成功案例',
      successStory: {
        description: '了解 XMore Studio 如何赋能各种规模的企业取得卓越成果。',
        imageAlt: '微笑人物的肖像',
      },
      learnMore: '了解更多',
    },
  },

  forms: {
    email: '邮箱',
    emailAddress: '邮箱地址',
    emailPlaceholder: '请输入您的邮箱',
    emailInvalid: '请提供有效的邮箱地址以便我们回复您',
    subscribe: '订阅',
    phone: '电话号码',
    password: '密码',
    confirmPassword: '确认密码',
    forgotPassword: '忘记密码？',
    passwordHint: '至少 8 个字符',
    passwordMismatch: '两次密码不一致',
    rememberMe: '记住我',
    acceptTerms: '我接受',
    termsAndConditions: '条款与条件',
    or: '或',
    demoFallbackMessage: '仅演示 — 此表单未连接后端。',
  },

  auth: {
    logIn: '登录',
    signIn: '登录',
    signUp: '注册',
    signInWithGoogle: '使用 Google 登录',
    signUpWithGoogle: '使用 Google 注册',
    noAccountYet: '还没有账号？',
    signUpHere: '在此注册',
    alreadyHaveAccount: '已有账号？',
    signInHere: '在此登录',
    forgotPasswordTitle: '忘记密码？',
    rememberYourPassword: '想起密码了？',
    resetPassword: '重置密码',
    credentialsDemoNotice: '仅演示 — 在收集凭据前请连接真实的认证服务。',
    recoveryDemoNotice: '仅演示 — 密码恢复未连接后端。',
    signInDemoMessage: '仅演示 — 登录未连接后端。',
    registerDemoMessage: '仅演示 — 注册未连接后端。',
    recoverDemoMessage: '仅演示 — 密码恢复未连接后端。',
  },

  share: {
    share: '分享',
    shareOn: (platform: string) => `分享到${platform}`,
    copied: '已复制',
    copyLink: '复制链接',
  },

  banner: {
    dismiss: '关闭',
    region: '信息横幅',
  },

  blog: {
    readMore: '阅读更多',
    minRead: (minutes: number) => `${minutes} 分钟阅读`,
    relatedArticles: '相关文章',
    wasHelpful: '这篇文章对您有帮助吗？',
    yes: '是',
    no: '否',
    ogSection: '博客',
    breadcrumbHome: '首页',
    breadcrumbBlog: '博客',
    filedUnder: '归入分类',
  },

  insights: {
    readMore: '阅读更多',
    tableOfContents: '目录：',
    ogSection: '洞察',
  },

  products: {
    ogSection: '五金工具',
    tabs: '选项卡',
  },

  notFound: {
    title: '页面未找到',
    subTitle: '哎呀，这不是您要找的工具！',
    content: '别让这个小问题拖慢您的脚步。让我们带您回到打造杰作的旅程。',
    goHome: '返回首页',
    goBack: '返回上一步',
  },

  home: {
    banner: '在 GitHub 上探索本站',
    hero: {
      title:
        '欢迎来到 <span class="text-yellow-500 dark:text-yellow-400">XMore Studio</span>',
      subTitle: '一个关于摄影、笔记、项目和安静实验的个人小站。',
      primaryBtn: '浏览作品',
      secondaryBtn: '联系我',
      rating: '<span class="font-bold">4.9</span> / 5',
      reviews: '来自 <span class="font-bold">朋友与访客</span>',
      imageAlt: '代表 XMore Studio 创作精神的风景主图',
    },
    clients: {
      title: '朋友与合作者',
      subTitle: '与这个空间产生交集的友善的人和项目。',
    },
    blog: {
      title: '最近的文字',
      subTitle: '记录这个空间里的写作、观察与想法。',
      viewAll: '查看全部',
    },
    featuresGeneral: {
      title: '一个承载想法的空间',
      subTitle:
        'XMore Studio 是好奇心与手艺交汇的地方。从照片故事到副项目、再到笔记，这里记录了一路上制作、看到和学到的事物。',
      imageAlt: 'XMore Studio 个人收藏中的精选图片',
    },
    featuresNavs: {
      title:
        '探索 <span class="text-yellow-500 dark:text-yellow-400">XMore Studio</span>：照片、文字与实验，尽在一处。',
      tabs: {
        tools: {
          heading: '照片故事',
          content:
            '镜头捕捉下的瞬间合集。每一组都是一篇简短的视觉日记——风景、城市片段，以及日常生活中发现的安静细节。',
          alt: '照片故事预览图',
        },
        dashboard: {
          heading: '笔记与写作',
          content:
            '短文、读书笔记和尚未成形的想法。一个可以大声思考、日后再回来看的地方。',
          alt: '写作笔记预览图',
        },
        features: {
          heading: '副项目',
          content:
            '在代码、设计和自动化方面的小型实验。并非每个都会发布，但每个都能带来一些值得保留的收获。',
          alt: '副项目预览图',
        },
      },
    },
    testimonials: {
      title: '这个空间为何存在',
      subTitle: '一个放慢脚步、制作事物，并与任何觉得它们有用的人分享的地方。',
      quotes: [
        {
          content:
            '这些照片给人一种平静和真诚的感觉。很少见到既美观又不张扬的个人网站。',
          author: '一位友好的访客',
          role: '读者',
        },
      ],
      statistics: [
        {
          count: '3+',
          description: '年在这里收集的笔记、照片和项目',
        },
        {
          count: '∞',
          description: '等待变成现实的半成品想法',
        },
        {
          count: '0',
          description: '广告或追踪器 — 只是一个安静的个人网站',
        },
        {
          count: '1',
          description: '你在这里看到的一切背后的人',
        },
      ],
    },
    faqTitle: '常见<br />问题解答',
    heroAlt: {
      title: '感谢你的到访',
      subTitle:
        '本站使用 Astro、Tailwind CSS 和 Preline UI 构建，并部署在 Cloudflare Workers 上。',
      btn: '在 GitHub 上查看源码',
    },
  },

  portfolioPage: {
    title: '作品集',
    metaDescription: 'XMore 的精选摄影、数字实验与独立创作。',
    ogTitle: '精选作品 | XMore Studio',
    eyebrow: '个人创作 · 2026',
    heading: '图像、想法，与认真完成的作品。',
    subTitle: '这里收录摄影作品和数字实验。保持好奇，也在每个细节里认真推敲。',
    contactCta: '聊聊合作',
    location: '常驻上海 · 欢迎远程交流',
    photographyCount: '摄影故事',
    experimentsCount: '数字实验',
    featuredLabel: '最近作品',
    featuredTag: '精选',
    workIndex: '作品档案',
    selectedWork: '精选作品',
    filterLabel: '筛选作品',
    filters: {
      all: '全部',
      photography: '摄影',
      experiments: '实验',
    },
    emptyState: '新作品正在路上。',
  },

  services: {
    title: '服务',
    metaDescription:
      'XMore Studio 将专业知识与您的愿景相结合，在五金和建筑行业提供卓越服务和全面解决方案，从咨询到项目完成。',
    ogTitle: '专家咨询服务 | XMore Studio',
    intro: {
      title: '专业知识与您的愿景相结合',
      subTitle:
        '在 XMore Studio，我们为能在五金和建筑行业提供全面解决方案和卓越服务而自豪。我们的经验丰富的团队致力于通过一系列专业服务，从项目开始到完成全程支持您的项目。',
      cta: '预约咨询',
    },
    articles: {
      guidance: {
        title: '提供专业指导',
        subTitle:
          '开展施工项目可能会让人感到不知所措。通过我们的专业咨询服务，我们在每个阶段为您提供指导，确保您做出明智的决策。无论您是 DIY 爱好者还是熟练的承包商，我们的专家都会就产品选择、项目范围和当地法规合规提供量身定制的建议。',
        imageAlts: ['蓝图和装有施工计划的数字平板。', '在办公室工作的人。'],
      },
      craftsmanship: {
        title: '将设计变为现实',
        subTitle:
          '我们的工匠为每个施工项目带来精度和卓越。从小型安装到大型结构工程，XMore Studio 提供可靠的施工服务，将您的计划转化为有形成果。我们确保最高的安全和工艺标准，使用我们丰富库存中的优质工具和材料。',
        imageAlts: ['施工场地前后对比'],
        cta: '了解更多',
      },
      oversight: {
        title: '以专业监督导航项目',
        subTitle:
          '有效的项目管理是任何成功建设的核心。XMore Studio 提供周密的规划和稳健的管理服务，确保您的项目按时、按预算完成。让我们处理工作流协调、资源分配和利益相关者沟通的复杂性，而您专注于您的愿景。',
        imageAlts: ['协调项目的施工工人', '管理中的施工鸟瞰图'],
      },
      maintenance: {
        title: '确保持久性能',
        subTitle:
          '我们对您项目的承诺不会在完工时结束。XMore Studio 提供持续的维护和支持服务，确保您的建筑的长久性和性能。从定期检查到紧急援助，我们响应迅速的团队随时提供无缝支持。',
        imageAlts: ['穿着橙色和黑色马甲、戴白色头盔、手持黄黑色电动工具的男子'],
      },
      bespoke: {
        title: '为独特挑战定制专属策略',
        subTitle:
          '对于较大的企业客户，XMore Studio 提供旨在应对特定行业挑战的定制解决方案。通过了解您的独特需求，我们设计量身定制的策略，旨在优化您的运营、提升效率并推动您的业务向前发展。',
        imageAlts: ['建设中的建筑结构', '施工中的棕色和灰色建筑'],
        cta: '阅读更多',
      },
    },
    stats: {
      title: '数据说话',
      subTitle:
        '我们对质量和可靠性的承诺在我们承担的每个项目中都得到了体现。在 XMore Studio，我们致力于提供行业领先的服务，确保您的施工项目经久耐用。',
      mainStatTitle: '96%',
      mainStatSubTitle: '的客户将他们与 XMore Studio 的体验评为卓越',
      stats: [
        { stat: '99.8%', description: '项目完成率' },
        { stat: '5,000+', description: '成功安装' },
        { stat: '85%', description: '客户年增长率' },
      ],
    },
  },

  contact: {
    title: '联系我们',
    metaDescription:
      '有问题或想讨论项目？联系我们，让我们用我们的工具和服务打造完美的解决方案。',
    ogTitle: '联系我们 | XMore Studio',
    heading: '联系我们',
    subTitle:
      '有问题或想讨论项目？联系我们，让我们用我们的工具和服务打造完美的解决方案。',
    formTitle: '填写下方表单',
    formSubTitle: '我们将在 1-2 个工作日内回复您。',
    firstName: '名',
    lastName: '姓',
    details: '详情',
    send: '发送消息',
    demoMessage: '感谢您！（仅演示 — 接入表单端点以接收真实消息。）',
    knowledgeHeading: '知识库',
    knowledgeContent: '浏览我们所有的知识库文章。',
    knowledgeLink: '访问指南和教程',
    faqHeading: '常见问题',
    faqContent: '探索我们的常见问题，快速清晰地解答常见疑问。',
    faqLink: '访问常见问题',
    officeHeading: '访问我们的办公室',
    officeContent: '英国 XMore Studio',
    emailHeading: '通过邮箱联系我们',
    emailContent: '更喜欢文字？给我们发邮件至',
  },

  blogIndex: {
    title: '博客',
    metaDescription:
      '通过 XMore Studio 行业专家团队的洞察，随时了解建筑行业的最新趋势和发展。',
    ogTitle: '建筑行业博客 | XMore Studio',
    heading: '通向施工卓越的门户',
    subTitle:
      '探索 XMore Studio 的最新新闻、技巧和洞察，以提升您的施工项目。从产品聚焦到项目管理策略，我们的博客是您了解所有五金和施工相关内容的首选资源。',
    insightsHeading: '洞察',
    insightsSubTitle:
      '通过 XMore Studio 行业专家团队的洞察，随时了解建筑行业的最新趋势和发展。',
    noPosts: '暂无博客文章。请稍后回来查看。',
    noInsights: '暂无洞察。请稍后回来查看。',
    browseCategories: '按分类浏览',
  },

  categoriesIndex: {
    title: '分类',
    metaDescription:
      '站内所有文章按主题归类——工具、工艺、读书笔记、旅途、野外随笔与日常。',
    ogTitle: '分类 | XMore Studio',
    eyebrow: '索引',
    heading: '我写下的东西，按主题归位。',
    subTitle:
      '标签描述的是单篇文章，分类则是书架：几个我反复回来的主题，每一个都是开始阅读的入口。',
    stats: {
      categories: '分类',
      posts: '文章',
      reading: '阅读时长',
      readingValue: (minutes: number) => `${minutes} 分钟`,
    },
    mosaicLabel: '带封面的分类',
    list: {
      heading: '全部分类',
      subTitle: '按已写文章数量排序，可以用搜索缩小范围。',
      filterLabel: '筛选分类',
      filterPlaceholder: '搜索分类',
      clearFilter: '清除搜索',
      noResults: (query: string) => `没有与“${query}”匹配的分类。`,
    },
    entryCount: (count: number) => `${count} 篇`,
    updated: (date: string) => `更新于 ${date}`,
    emptyCategory: '这里还空着',
    open: '进入分类',
    cta: {
      title: '想按时间顺序读？',
      body: '博客页面按时间倒序排列全部文章，最新的一篇在最前面。',
      action: '浏览博客',
    },
    items: {
      tools: {
        title: '工具与流程',
        description: '让工作更快一点的工具、配置和小习惯。',
        coverAlt: '工作台上摊开的工具',
      },
      craft: {
        title: '工艺与安全',
        description: '怎样把事情做好，以及怎样在不受伤的前提下做好。',
        coverAlt: '双手正在处理一块木料',
      },
      notes: {
        title: '笔记与阅读',
        description: '读书笔记、页边批注，以及在忘记之前写下的想法。',
        coverAlt: '一支钢笔搁在空白纸面上',
      },
      journey: {
        title: '旅途',
        description: '长长的路、开阔的天，以及值得绕道去看看的地方。',
        coverAlt: '从高处山脊望见的群山与湖泊',
      },
      field: {
        title: '野外随笔',
        description: '在户外写下的文字——天气、水流，以及等光来的耐心。',
        coverAlt: '流过深色火山地貌的河流',
      },
      life: {
        title: '日常',
        description: '平常的夜晚、小小的仪式，以及一天里最安静的那一段。',
        coverAlt: '深色桌面上角落里的节日装饰',
      },
    },
  },

  categoryPage: {
    eyebrow: '分类',
    breadcrumbHome: '首页',
    breadcrumbCategories: '分类',
    ogSection: '分类',
    postsHeading: '收录的文章',
    readingTotal: (minutes: number) => `共 ${minutes} 分钟阅读`,
    updated: (date: string) => `更新于 ${date}`,
    emptyState: '这个分类下还没有文章。',
    emptyHint: '书架已经搭好了，文字还在路上。',
    otherCategories: '继续浏览',
    backToCategories: '全部分类',
    readPost: '阅读文章',
  },

  productsIndex: {
    title: '产品',
    metaDescription:
      '探索 XMore Studio 工具的耐用性和精度，专为专业人士和爱好者设计。',
    ogTitle: '五金工具 | XMore Studio',
    heading: '产品',
    subTitle:
      '探索 XMore Studio 工具的耐用性和精度，专为专业人士和爱好者设计。我们的每件产品都经过精密制造，经久耐用，确保您拥有适合每项工作的正确工具。',
    customerStories: '客户故事',
    testimonials: {
      title: '客户评价',
      quotes: [
        {
          content:
            ' "自从改用 XMore Studio 的五金工具后，我们施工现场的效率飞速提升。六角螺栓的耐用性和机用螺丝的精度简直无与伦比。能与一家真正了解行业日常需求的公司合作令人耳目一新。" ',
          author: 'Jason Clark',
          role: '现场工长 | TopBuild',
          avatarAlt: '图片描述',
        },
        {
          content:
            ' "作为室内设计师，我一直在寻找高质量的材料和工具来帮助我实现设计愿景。XMore Studio 的混合螺丝组合为我的项目带来了革命性的变化，提供了质量和多样性的完美结合。出色的客户支持更是锦上添花！" ',
          author: 'Maria Gonzalez',
          role: '室内设计师 | Creative Spaces',
          avatarAlt: '图片描述',
        },
        {
          content:
            ' "我做了 15 年多的专业木匠，我可以真诚地说，XMore Studio 的丝锥螺栓和螺母是我用过的最好的之一。它们的抓地力无与伦比，我对每个接头和固定件都充满信心。此外，服务也是一流的——他们真正关心我的项目成功。" ',
          author: 'Richard Kim',
          role: '首席木匠 | WoodWright',
          avatarAlt: '图片描述',
        },
      ],
    },
    stats: {
      title: '为什么选择 XMore Studio？',
      subTitle:
        '用 XMore Studio 工具将您的想法转化为有形成果。无论您是从餐巾纸上的草图开始还是投入全面的施工项目，我们的工具都旨在帮助您自信地建造。',
      benefits: [
        '坚固可靠的工具，确保持久性能。',
        '针对现代施工需求量身定制的创新解决方案。',
        '致力于您项目成功的客户支持。',
      ],
    },
  },

  photographyIndex: {
    title: '摄影',
    metaDescription: 'XMore 的摄影集——街头、人像和安静的抽象瞬间。',
    ogTitle: '摄影 | XMore Studio',
    heading: '摄影',
    subTitle: '用胶片和传感器捕捉的安静瞬间集合。街道、陌生人，以及光的几何。',
    noPhotos: '暂无照片，请稍后回来。',
  },

  experimentsIndex: {
    title: '实验',
    metaDescription:
      'XMore 的小型编程与设计实验——生成式布局、配色工具和极简库。',
    ogTitle: '实验 | XMore Studio',
    heading: '安静实验',
    subTitle:
      '我想尝试的小想法。有些变成了工具，大多数留作实验。没有承诺，只是好奇。',
    noExperiments: '暂无实验，请稍后回来。',
    readMore: '阅读更多',
  },

  insightsIndex: {
    title: '洞察',
    metaDescription: 'XMore Studio 关于设计、代码和创作过程的笔记与思考。',
    ogTitle: '洞察 | XMore Studio',
    heading: '洞察',
    subTitle: '对设计、代码，以及想法与执行之间空间的思考。',
    noInsights: '暂无洞察，请稍后回来。',
  },

  /** 语言特定的 JSON 数据。 */
  data: { faqs, features, pricing },
};
