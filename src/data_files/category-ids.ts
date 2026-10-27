/**
 * Blog category ids, kept in their own module on purpose: `content.config.ts`
 * validates frontmatter against this list, and it must not pull in the cover
 * art that `./categories.ts` imports.
 *
 * The ids are stable and language-neutral. Names, descriptions and alt text
 * live in the copy tables under `categoriesIndex.items.<id>`.
 */
export const CATEGORY_IDS = [
  'tools',
  'craft',
  'notes',
  'journey',
  'field',
  'life',
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export function isCategoryId(value: unknown): value is CategoryId {
  return (
    typeof value === 'string' &&
    (CATEGORY_IDS as readonly string[]).includes(value)
  );
}
