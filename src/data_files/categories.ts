import type { ImageMetadata } from 'astro';
import type { CategoryId } from './category-ids';
import notesCover from '@/images/categories/notes-letter.jpg';
import journeyCover from '@/images/categories/journey-lake.jpg';
import fieldCover from '@/images/categories/field-waterfall.jpg';
import lifeCover from '@/images/categories/life-chalkboard.jpg';

export { CATEGORY_IDS, isCategoryId } from './category-ids';
export type { CategoryId } from './category-ids';

/**
 * Blog category taxonomy.
 *
 * This file is the single source of truth for *which* categories exist and
 * what they look like (emoji, accent colour, cover art). Everything that
 * varies by language — the name, the one-line description, the cover alt
 * text — lives in the copy tables under `categoriesIndex.items.<id>`, so a
 * translator never edits this file and code never keys on a translated name.
 *
 * Membership is not declared here: a post joins a category by listing the id
 * in its `categories` frontmatter (validated by `src/content.config.ts`), and
 * `src/utils/categories.ts` derives the counts, ordering and dates.
 */

export interface CategoryDefinition {
  id: CategoryId;
  /** Decorative glyph shown next to the name; hidden from screen readers. */
  emoji: string;
  /** Accent from the site palette, used for dots and rules only. */
  accent: string;
  /**
   * Cover art. Categories without one render as text-only rows, so a new
   * category can ship before its photography does.
   */
  cover?: ImageMetadata;
}

/**
 * Editorial order. The index re-sorts by activity, so this only decides
 * tie-breaks between categories with the same number of posts.
 */
export const CATEGORIES: readonly CategoryDefinition[] = [
  { id: 'tools', emoji: '🛠️', accent: '#d7f568' },
  { id: 'craft', emoji: '🧱', accent: '#f17a62' },
  { id: 'notes', emoji: '📝', accent: '#d7f568', cover: notesCover },
  { id: 'journey', emoji: '🏔️', accent: '#9fb8a8', cover: journeyCover },
  { id: 'field', emoji: '🌊', accent: '#9fb8a8', cover: fieldCover },
  { id: 'life', emoji: '☕', accent: '#f17a62', cover: lifeCover },
];

export function categoryById(id: CategoryId): CategoryDefinition | undefined {
  return CATEGORIES.find(category => category.id === id);
}
