import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'xmore',
  tagline: 'Personal Portfolio & Creative Space',
  description:
    'XMore Studio is a personal creative space showcasing photography, projects, notes, and experiments by XMore. A quiet corner of the web to explore ideas and share work.',
  description_short: 'A personal portfolio and creative space by XMore.',
  url: 'https://webmax.xmorexz.dpdns.org',
  author: 'XMore',
};

// Per-locale titles, descriptions and Open Graph text live in `src/copy/`;
// `src/utils/metadata.ts` assembles the <head> from them.
export const OG = {
  image: ogImageSrc,
};

export const partnersData = [
  {
    icon: `<svg class="mx-auto h-auto w-24 py-3 sm:mx-0 lg:w-32 lg:py-5" viewBox="0 0 120 40" fill="none"><text x="10" y="28" fill="#6B7280" font-size="18" font-family="sans-serif">Partner 1</text></svg>`,
    name: 'first',
    href: '#',
  },
  {
    icon: `<svg class="mx-auto h-auto w-24 py-3 sm:mx-0 lg:w-32 lg:py-5" viewBox="0 0 120 40" fill="none"><text x="10" y="28" fill="#6B7280" font-size="18" font-family="sans-serif">Partner 2</text></svg>`,
    name: 'Second',
    href: '#',
  },
  {
    icon: `<svg class="mx-auto h-auto w-24 py-3 sm:mx-0 lg:w-32 lg:py-5" viewBox="0 0 120 40" fill="none"><text x="10" y="28" fill="#6B7280" font-size="18" font-family="sans-serif">Partner 3</text></svg>`,
    name: 'Third',
    href: '#',
  },
  {
    icon: `<svg class="mx-auto h-auto w-24 py-3 sm:mx-0 lg:w-32 lg:py-5" viewBox="0 0 120 40" fill="none"><text x="10" y="28" fill="#6B7280" font-size="18" font-family="sans-serif">Partner 4</text></svg>`,
    name: 'Fourth',
    href: '#',
  },
];
