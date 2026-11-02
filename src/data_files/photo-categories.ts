/**
 * Photography category ids, in their own module for the same reason as the
 * blog's: `content.config.ts` validates frontmatter against this list, so it
 * must stay free of anything a schema does not need.
 *
 * Ids are stable and language-neutral; the reader-facing names live in the
 * copy tables under `photographyIndex.categories.<id>`.
 */
export const PHOTO_CATEGORY_IDS = [
  'street',
  'portrait',
  'landscape',
  'abstract',
  'experiment',
] as const;

export type PhotoCategoryId = (typeof PHOTO_CATEGORY_IDS)[number];

/** Badge styling per category — geometry of the chip, not its label. */
export const PHOTO_CATEGORY_STYLES: Record<PhotoCategoryId, string> = {
  street: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  portrait: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  landscape:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  abstract:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  experiment:
    'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
};
