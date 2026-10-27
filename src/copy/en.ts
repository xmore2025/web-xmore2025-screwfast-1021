import faqs from '@data/faqs.json';
import features from '@data/features.json';
import pricing from '@data/pricing.json';
import type { CategoryId } from '@data/categories';

/**
 * English copy table. This file defines the shape every other locale must
 * satisfy (see `Copy` in `./index.ts`), so a missing translation fails
 * `astro check` instead of leaking English onto a localised page.
 *
 * Paths are unlocalised (`/products`, not `/zh/products`); callers run them
 * through `localePath()` from `@utils/locale`.
 */
export const en = {
  site: {
    /** Default `<meta name="description">` when a page sets none. */
    description:
      'XMore Studio offers top-tier creative tools and expert creative services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.',
    /** schema.org `WebSite.description` in every page's `isPartOf`. */
    descriptionShort:
      'XMore Studio offers top-tier creative tools and expert creative services to meet all your project needs.',
    ogTitle: 'XMore Studio: creative tools & creative services',
    ogDescription:
      "Equip your projects with XMore Studio's a personal portfolio of photos, notes, and side projects. Trusted by industry leaders, XMore Studio offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  },

  layout: {
    skipToContent: 'Skip to content',
    changeLanguage: 'Change language',
    toggleNavigation: 'Toggle navigation',
    darkTheme: 'Dark Theme Toggle',
    lightTheme: 'Light Theme Toggle',
    toggleTheme: 'Toggle theme',
  },

  nav: {
    /** Labels for `navLinks` in `@data/navigation`, keyed by id. */
    labels: {
      home: 'Home',
      portfolio: 'Portfolio',
      photography: 'Photography',
      products: 'Gallery',
      services: 'Projects',
      blog: 'Blog',
      experiments: 'Experiments',
      contact: 'Contact',
    },
    footer: {
      /** Section titles and link labels for `footerSections` in `@data/navigation`, keyed by id. */
      sectionTitles: {
        ecosystem: 'Explore',
        company: 'About',
      },
      links: {
        documentation: 'Notes',
        tools: 'Gallery',
        services: 'Projects',
        about: 'About',
        blog: 'Blog',
        categories: 'Categories',
        careers: 'Now',
        customers: 'Friends',
      },
      hiringBadge: 'Open to collab',
      stayUpToDate: 'Stay up to date',
      stayUpToDateContent:
        'Stay updated with the latest tools and exclusive deals.',
      newsletterDemoMessage:
        'Thanks! (Demo only — wire an email service to collect real subscribers.)',
    },
    /** Text for the optional mega menu (`@data/mega_link`). */
    megaMenu: {
      services: {
        guides: {
          title: 'Explore Advice and Explanations',
          description:
            "Dive deep into helpful guides and explanations for all of XMore Studio's features",
        },
        integrations: {
          title: 'Discover Integrations',
          description:
            'Supercharge Your Workflow. Seamless integrations with all your favorite tools',
        },
        experts: {
          title: 'Expert Services',
          description: "Go beyond tools with XMore Studio's expert services",
        },
        tools: {
          title: 'Cutting-Edge Tools',
          description:
            "Build Smarter, Faster. Experience next-level efficiency with XMore Studio's cutting-edge construction tools",
        },
        plans: {
          title: 'Simple Plans',
          description:
            "Boost your efficiency with XMore Studio's straightforward, value-driven plans",
        },
        community: {
          title: 'Community Forum',
          description:
            'Learn, share, and connect with other XMore Studio users',
        },
      },
      successStories: 'Success Stories',
      successStory: {
        description:
          'See how XMore Studio has empowered businesses of all sizes to achieve outstanding results.',
        imageAlt: 'Portrait of a smiling person',
      },
      learnMore: 'Learn more',
    },
  },

  forms: {
    email: 'Email',
    emailAddress: 'Email address',
    emailPlaceholder: 'Enter your email',
    emailInvalid:
      'Please include a valid email address so we can get back to you',
    subscribe: 'Subscribe',
    phone: 'Phone Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot password?',
    passwordHint: '8+ characters required',
    passwordMismatch: 'Password does not match the password',
    rememberMe: 'Remember me',
    acceptTerms: 'I accept the ',
    termsAndConditions: 'Terms and Conditions',
    or: 'Or',
    demoFallbackMessage: 'Demo only — this form is not connected to a backend.',
  },

  auth: {
    logIn: 'Log in',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    noAccountYet: "Don't have an account yet?",
    signUpHere: 'Sign up here',
    alreadyHaveAccount: 'Already have an account?',
    signInHere: 'Sign in here',
    forgotPasswordTitle: 'Forgot password?',
    rememberYourPassword: 'Remember your password?',
    resetPassword: 'Reset password',
    credentialsDemoNotice:
      'Demo only – connect a real auth provider before collecting credentials.',
    recoveryDemoNotice:
      'Demo only – password recovery is not connected to a backend.',
    signInDemoMessage: 'Demo only – sign-in is not connected to a backend.',
    registerDemoMessage:
      'Demo only – registration is not connected to a backend.',
    recoverDemoMessage:
      'Demo only – password recovery is not connected to a backend.',
  },

  share: {
    share: 'Share',
    shareOn: (platform: string) => `Share on ${platform}`,
    copied: 'Copied',
    copyLink: 'Copy link',
  },

  banner: {
    dismiss: 'Dismiss',
    region: 'Informational banner',
  },

  blog: {
    readMore: 'Read More',
    minRead: (minutes: number) => `${minutes} min read`,
    relatedArticles: 'Related articles',
    wasHelpful: 'Was this post helpful?',
    yes: 'Yes',
    no: 'No',
    ogSection: 'Blog',
  },

  insights: {
    readMore: 'Read more',
    tableOfContents: 'Table of Contents:',
    ogSection: 'Insights',
  },

  products: {
    ogSection: 'creative tools',
    tabs: 'Tabs',
  },

  notFound: {
    title: 'Page Not Found',
    subTitle: "Oops, this isn't the tool you were looking for!",
    content:
      "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.",
    goHome: 'Go Home',
    goBack: 'Go Back',
  },

  home: {
    banner: 'Explore this site on GitHub',
    hero: {
      title:
        'Welcome to <span class="text-yellow-500 dark:text-yellow-400">XMore Studio</span>',
      subTitle:
        'A personal corner of the web for photography, notes, projects, and quiet experiments.',
      primaryBtn: 'View Gallery',
      secondaryBtn: 'Get in Touch',
      rating: '<span class="font-bold">4.9</span> / 5',
      reviews: 'From <span class="font-bold">friends & visitors</span>',
      imageAlt:
        'A scenic hero image representing the creative spirit of XMore Studio',
    },
    clients: {
      title: 'Friends & Collaborators',
      subTitle:
        'Kind people and projects that have crossed paths with this space.',
    },
    blog: {
      title: 'Recent Notes',
      subTitle: 'Writing, observations, and ideas from this space.',
      viewAll: 'All posts',
    },
    featuresGeneral: {
      title: 'A Space for Ideas',
      subTitle:
        'XMore Studio is where curiosity meets craft. From photo essays to side projects and notes, this site is a living archive of things made, seen, and learned along the way.',
      imageAlt: 'A feature image from the personal collection of XMore Studio',
    },
    featuresNavs: {
      title:
        'Explore <span class="text-yellow-500 dark:text-yellow-400">XMore Studio</span>: notes, visuals, and experiments in one place.',
      tabs: {
        tools: {
          heading: 'Photo Stories',
          content:
            'Collections of moments captured through the lens. Each set is a short visual diary — landscapes, city scenes, and quiet details found in everyday life.',
          alt: 'A photo story preview image',
        },
        dashboard: {
          heading: 'Notes & Writings',
          content:
            'Short essays, reading notes, and half-formed ideas. A place to think out loud and return to later.',
          alt: 'A writing notes preview image',
        },
        features: {
          heading: 'Side Projects',
          content:
            'Small experiments in code, design, and automation. Not everything ships, but everything teaches something worth keeping.',
          alt: 'A side project preview image',
        },
      },
    },
    testimonials: {
      title: 'Why This Space Exists',
      subTitle:
        'A place to slow down, make things, and share them with whoever finds them useful.',
      quotes: [
        {
          content:
            'The photos feel calm and honest. It is rare to find a personal site that is both beautiful and unpretentious.',
          author: 'A Friendly Visitor',
          role: 'Reader',
        },
      ],
      statistics: [
        {
          count: '3+',
          description: 'years of notes, photos, and projects collected here',
        },
        {
          count: '∞',
          description: 'half-finished ideas waiting to become real',
        },
        {
          count: '0',
          description: 'ads or trackers — just a quiet, personal website',
        },
        {
          count: '1',
          description: 'human behind everything you see',
        },
      ],
    },
    faqTitle: 'Frequently<br />asked questions',
    heroAlt: {
      title: 'Thanks for Stopping By',
      subTitle:
        'This site is built with Astro, Tailwind CSS, and Preline UI, then deployed to Cloudflare Workers.',
      btn: 'View Source on GitHub',
    },
  },

  portfolioPage: {
    title: 'Portfolio',
    metaDescription:
      'Selected photography, digital experiments, and independent work by XMore.',
    ogTitle: 'Selected Work | XMore Studio',
    eyebrow: 'Independent practice · 2026',
    heading: 'Images, ideas, and things made with intention.',
    subTitle:
      'A living collection of photographs and small digital experiments. Curious by nature, considered in the details.',
    contactCta: 'Start a conversation',
    location: 'Based in Shanghai · Open to everywhere',
    photographyCount: 'Photo stories',
    experimentsCount: 'Digital experiments',
    featuredLabel: 'Latest work',
    featuredTag: 'Selected',
    workIndex: 'THE ARCHIVE',
    selectedWork: 'Selected work',
    filterLabel: 'Filter portfolio work',
    filters: {
      all: 'Everything',
      photography: 'Photography',
      experiments: 'Experiments',
    },
    emptyState: 'New work is on its way.',
  },

  services: {
    title: 'Services',
    metaDescription:
      'Uniting expertise with your vision, XMore Studio provides exceptional service and comprehensive solutions in the creative and technical industry, from consultation to project completion.',
    ogTitle: 'Expert Consultation Services | XMore Studio',
    intro: {
      title: 'Uniting Expertise with Your Vision',
      subTitle:
        'At XMore Studio, we take pride in providing comprehensive solutions and exceptional service in the creative and technical industry. Our experienced team is dedicated to supporting your project from inception to completion with a range of specialized services.',
      cta: 'Schedule a Consultation',
    },
    articles: {
      guidance: {
        title: 'Delivering Expert Guidance',
        subTitle:
          'Embarking on a construction project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you are a DIY enthusiast or a skilled contractor, our experts are on hand to offer tailored advice on product selection, project scope, and compliance with local regulations.',
        imageAlts: [
          'Blueprints and digital tablet with construction plans.',
          'Person working in the office',
        ],
      },
      craftsmanship: {
        title: 'Transforming Designs into Reality',
        subTitle:
          'Our skilled craftsmen bring precision and excellence to every construction project. From minor installations to substantial structural work, XMore Studio offers reliable creative services to turn your plans into tangible outcomes. We ensure the highest standards of safety and workmanship, utilizing top-quality tools and materials from our extensive inventory.',
        imageAlts: ['Construction site before and after'],
        cta: 'Learn More',
      },
      oversight: {
        title: 'Navigating Projects with Professional Oversight',
        subTitle:
          'Effective project management is at the heart of any successful build. XMore Studio provides thorough planning and robust management services that keep your project on time and within budget. Let us handle the complexities of workflow coordination, resource allocation, and stakeholder communication while you focus on your vision.',
        imageAlts: [
          'Construction workers orchestrating a project',
          'Aerial view of managed construction',
        ],
      },
      maintenance: {
        title: 'Ensuring Long-lasting Performance',
        subTitle:
          "Our commitment to your project doesn't end at completion. XMore Studio offers ongoing maintenance and support services to ensure your construction's longevity and performance. From regular check-ups to emergency assistance, our responsive team is there to provide seamless support.",
        imageAlts: [
          'Man in orange and black vest wearing white helmet holding yellow and black power tool',
        ],
      },
      bespoke: {
        title: 'Crafting Bespoke Strategies for Unique Challenges',
        subTitle:
          'For our larger enterprise clients, XMore Studio offers custom solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.',
        imageAlts: [
          'In progress building structure',
          'Brown and gray building under construction',
        ],
        cta: 'Read more',
      },
    },
    stats: {
      title: 'By the Numbers',
      subTitle:
        'Our commitment to quality and reliability is evident in every project we undertake. At XMore Studio, we are dedicated to delivering industry-leading services that ensure your construction projects are built to last.',
      mainStatTitle: '96%',
      mainStatSubTitle:
        'of our clients rate their experience with XMore Studio as exceptional',
      stats: [
        { stat: '99.8%', description: 'project completion rate' },
        { stat: '5,000+', description: 'successful installations' },
        { stat: '85%', description: 'client growth year-over-year' },
      ],
    },
  },

  contact: {
    title: 'Contact',
    metaDescription:
      "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    ogTitle: 'Contact Us | XMore Studio',
    heading: 'Contact us',
    subTitle:
      "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    formTitle: 'Fill in the form below',
    formSubTitle: "We'll get back to you in 1-2 business days.",
    firstName: 'First Name',
    lastName: 'Last Name',
    details: 'Details',
    send: 'Send Message',
    demoMessage:
      'Thanks! (Demo only — wire a form endpoint to receive real messages.)',
    knowledgeHeading: 'Knowledgebase',
    knowledgeContent: 'Browse through all of our knowledgebase articles.',
    knowledgeLink: 'Visit guides & tutorials',
    faqHeading: 'FAQ',
    faqContent: 'Explore our FAQ for quick, clear answers to common queries.',
    faqLink: 'Visit FAQ',
    officeHeading: 'Visit our office',
    officeContent: 'UK XMore Studio',
    emailHeading: 'Contact us by email',
    emailContent: 'Prefer the written word? Drop us an email at',
  },

  blogIndex: {
    title: 'Blog',
    metaDescription:
      "Stay up-to-date with the latest trends and developments in the construction industry with insights from XMore Studio's team of industry experts.",
    ogTitle: 'Construction Industry Blog | XMore Studio',
    heading: 'Your Gateway to Construction Excellence',
    subTitle:
      'Explore the latest news, tips, and insights from XMore Studio to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things creative and technical.',
    insightsHeading: 'Insights',
    insightsSubTitle:
      "Stay up-to-date with the latest trends and developments in the construction industry with insights from XMore Studio's team of industry experts. ",
    noPosts: 'No blog posts yet. Check back soon.',
    noInsights: 'No insights yet. Check back soon.',
    browseCategories: 'Browse by category',
  },

  categoriesIndex: {
    title: 'Categories',
    metaDescription:
      'Every note on this site, sorted by theme — tools, craft, reading notes, journeys, field essays and quiet life.',
    ogTitle: 'Categories | XMore Studio',
    eyebrow: 'The index',
    heading: 'Everything I write, sorted by theme.',
    subTitle:
      'Tags describe a single post. Categories are the shelves: a handful of themes I keep returning to, each one a place to start reading.',
    stats: {
      categories: 'Categories',
      posts: 'Posts',
      reading: 'Reading time',
      readingValue: (minutes: number) => `${minutes} min`,
    },
    mosaicLabel: 'Categories with a cover',
    list: {
      heading: 'All categories',
      subTitle:
        'Ordered by how much has been written. Filter to narrow the list.',
      filterLabel: 'Filter categories',
      filterPlaceholder: 'Search a category',
      clearFilter: 'Clear search',
      noResults: (query: string) => `No category matches “${query}”.`,
    },
    entryCount: (count: number) => (count === 1 ? '1 post' : `${count} posts`),
    updated: (date: string) => `Updated ${date}`,
    emptyCategory: 'Nothing filed here yet',
    open: 'Open category',
    cta: {
      title: 'Looking for the newest writing?',
      body: 'The blog lists every post in reverse order, with the latest first.',
      action: 'Browse the blog',
    },
    /** Names, descriptions and cover alt text, keyed by category id. */
    items: {
      tools: {
        title: 'Tools & Workflow',
        description:
          'The instruments, setups and small routines that make the work go faster.',
        coverAlt: 'Tools laid out on a workbench',
      },
      craft: {
        title: 'Craft & Safety',
        description:
          'How things are made well, and how they are made without anyone getting hurt.',
        coverAlt: 'Hands working on a piece of timber',
      },
      notes: {
        title: 'Notes & Reading',
        description:
          'Reading notes, marginalia, and ideas written down before they disappear.',
        coverAlt: 'A fountain pen resting on blank paper',
      },
      journey: {
        title: 'Journeys',
        description:
          'Long roads, wide skies, and the places that were worth the detour.',
        coverAlt: 'Mountains and a lake seen from a high ridge',
      },
      field: {
        title: 'Field Notes',
        description:
          'Essays written outdoors — weather, water, and the patience it takes to wait for light.',
        coverAlt: 'A river running through a dark volcanic landscape',
      },
      life: {
        title: 'Quiet Life',
        description:
          'Ordinary evenings, small rituals, and the quietest part of the day.',
        coverAlt: 'A dark table with festive decorations in the corner',
      },
    } satisfies Record<
      CategoryId,
      { title: string; description: string; coverAlt: string }
    >,
  },

  categoryPage: {
    eyebrow: 'Category',
    breadcrumbHome: 'Home',
    breadcrumbCategories: 'Categories',
    ogSection: 'Categories',
    postsHeading: 'Filed here',
    readingTotal: (minutes: number) => `${minutes} min of reading`,
    updated: (date: string) => `Updated ${date}`,
    emptyState: 'Nothing filed under this category yet.',
    emptyHint: 'The shelf exists — the writing is still on its way.',
    otherCategories: 'Keep browsing',
    backToCategories: 'All categories',
    readPost: 'Read post',
  },

  productsIndex: {
    title: 'Products',
    metaDescription:
      'Explore the durability and precision of XMore Studio tools, designed for both professionals and enthusiasts.',
    ogTitle: 'creative tools | XMore Studio',
    heading: 'Products',
    subTitle:
      'Explore the durability and precision of XMore Studio tools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.',
    customerStories: 'Customer Stories',
    testimonials: {
      title: 'What Our Customers Say',
      quotes: [
        {
          content:
            ' "Since switching to XMore Studio\'s creative tools, the efficiency on our construction sites has skyrocketed. The durability of the hex bolts and precision of the machine screws are simply unmatched. It\'s refreshing to work with a company that truly understands the daily demands of the industry." ',
          author: 'Jason Clark',
          role: 'Site Foreman | TopBuild',
          avatarAlt: 'Image Description',
        },
        {
          content:
            ' "As an interior designer, I\'m always looking for high-quality materials and tools that help bring my visions to life. XMore Studio\'s mixed screws assortment has been a game-changer for my projects, providing the perfect blend of quality and variety. The outstanding customer support was just the cherry on top!" ',
          author: 'Maria Gonzalez',
          role: 'Interior Designer | Creative Spaces',
          avatarAlt: 'Image Description',
        },
        {
          content:
            " \"I've been a professional carpenter for over 15 years, and I can sincerely say that XMore Studio's tap bolts and nuts are some of the best I've used. They grip like no other, and I have full confidence in every joint and fixture. Plus, the service is impeccable – they truly care about my project's success.\" ",
          author: 'Richard Kim',
          role: 'Master Carpenter | WoodWright',
          avatarAlt: 'Image Description',
        },
      ],
    },
    stats: {
      title: 'Why Choose XMore Studio?',
      subTitle:
        "Transform your ideas into tangible results with XMore Studio tools. Whether you're starting with a sketch on a napkin or diving into a comprehensive construction project, our tools are engineered to help you build with confidence.",
      benefits: [
        'Robust and reliable tools for long-lasting performance.',
        'Innovative solutions tailored to modern construction needs.',
        "Customer support dedicated to your project's success.",
      ],
    },
  },

  photographyIndex: {
    title: 'Photography',
    metaDescription:
      'A collection of photographs by XMore — streets, portraits, and quiet abstract moments.',
    ogTitle: 'Photography | XMore Studio',
    heading: 'Photography',
    subTitle:
      'A quiet collection of moments captured on film and sensor. Streets, strangers, and the geometry of light.',
    noPhotos: 'No photos yet. Check back soon.',
  },

  experimentsIndex: {
    title: 'Experiments',
    metaDescription:
      'Small coding and design experiments by XMore — generative layouts, color tools, and minimal libraries.',
    ogTitle: 'Experiments | XMore Studio',
    heading: 'Quiet Experiments',
    subTitle:
      'Small ideas I wanted to try. Some turned into tools, most stayed as experiments. No promises, just curiosity.',
    noExperiments: 'No experiments yet. Check back soon.',
    readMore: 'Read more',
  },

  insightsIndex: {
    title: 'Insights',
    metaDescription:
      'Notes and reflections from XMore Studio on design, code, and the creative process.',
    ogTitle: 'Insights | XMore Studio',
    heading: 'Insights',
    subTitle:
      'Reflections on design, code, and the space between idea and execution.',
    noInsights: 'No insights yet. Check back soon.',
  },

  /** Locale-specific JSON data (already the good pattern; kept as-is). */
  data: { faqs, features, pricing },
};
