import type { CollectionEntry } from 'astro:content';
import {
  CATEGORIES,
  categoryById,
  isCategoryId,
  type CategoryDefinition,
  type CategoryId,
} from '@data/categories';
import { entriesFor } from '@utils/content';
import { localePath, type MarketingLocale } from '@utils/locale';

/**
 * Category module.
 *
 * The only place that knows how a blog post's `categories` frontmatter turns
 * into a browsable taxonomy: which posts belong to a category, how many there
 * are, when the category was last touched, how much reading it holds, and
 * where its page lives. Views and cards take a `CategorySummary` and render
 * it; they never filter entries themselves.
 *
 * Sorting is by activity (most posts first, then most recent), with the
 * editorial order in `@data/categories` as the final tie-break, so the index
 * never reshuffles between builds for no reason.
 */

export interface CategorySummary {
  id: CategoryId;
  /** Emoji, accent and cover art from the taxonomy. */
  definition: CategoryDefinition;
  /** Locale the summary was built for. */
  locale: MarketingLocale;
  /** Posts in this category, newest first. */
  entries: CollectionEntry<'blog'>[];
  count: number;
  /** Publication date of the newest post, if the category has any. */
  latest?: Date;
  /** Total reading time of the category, in minutes. */
  readingMinutes: number;
  /** Site-relative path of the category page, e.g. `/zh/categories/notes/`. */
  path: string;
}

/** The categories a post was filed under, ignoring unknown ids. */
export function categoriesOf(entry: CollectionEntry<'blog'>): CategoryId[] {
  return (entry.data.categories ?? []).filter(isCategoryId);
}

function summarise(
  definition: CategoryDefinition,
  locale: MarketingLocale,
  entries: CollectionEntry<'blog'>[]
): CategorySummary {
  const latest = entries.reduce<Date | undefined>((newest, entry) => {
    if (!newest || entry.data.pubDate > newest) return entry.data.pubDate;
    return newest;
  }, undefined);

  return {
    id: definition.id,
    definition,
    locale,
    entries,
    count: entries.length,
    latest,
    readingMinutes: entries.reduce(
      (total, entry) => total + entry.data.readTime,
      0
    ),
    path: `${localePath(locale, '/categories')}/${definition.id}/`,
  };
}

/**
 * Every category for one locale, ordered by activity. Categories with no
 * posts are kept: they are editorial promises, and the index renders them
 * as an explicit "nothing here yet" row rather than hiding them.
 */
export async function categorySummaries(
  locale: MarketingLocale
): Promise<CategorySummary[]> {
  const entries = await entriesFor('blog', locale);
  const order = new Map(
    CATEGORIES.map((category, index) => [category.id, index])
  );

  return CATEGORIES.map(definition =>
    summarise(
      definition,
      locale,
      entries.filter(entry => categoriesOf(entry).includes(definition.id))
    )
  ).sort((first, second) => {
    if (second.count !== first.count) return second.count - first.count;
    const firstDate = first.latest?.valueOf() ?? 0;
    const secondDate = second.latest?.valueOf() ?? 0;
    if (secondDate !== firstDate) return secondDate - firstDate;
    return (order.get(first.id) ?? 0) - (order.get(second.id) ?? 0);
  });
}

/** One category for one locale, or `undefined` if the id is not in the taxonomy. */
export async function categorySummary(
  id: string,
  locale: MarketingLocale
): Promise<CategorySummary | undefined> {
  if (!isCategoryId(id)) return undefined;
  const definition = categoryById(id);
  if (!definition) return undefined;

  const entries = (await entriesFor('blog', locale)).filter(entry =>
    categoriesOf(entry).includes(id)
  );
  return summarise(definition, locale, entries);
}

/** `getStaticPaths` result for `[category].astro`, so the route stays a one-liner. */
export async function categoryStaticPaths(locale: MarketingLocale) {
  const summaries = await categorySummaries(locale);
  return summaries.map(summary => ({
    params: { category: summary.id },
    props: { summary },
  }));
}

/** Site-wide totals, for the index header. */
export function totals(summaries: CategorySummary[]): {
  categories: number;
  posts: number;
  readingMinutes: number;
} {
  const postIds = new Set<string>();
  let readingMinutes = 0;

  for (const summary of summaries) {
    readingMinutes += summary.readingMinutes;
    for (const entry of summary.entries) postIds.add(entry.id);
  }

  return {
    categories: summaries.filter(summary => summary.count > 0).length,
    posts: postIds.size,
    readingMinutes,
  };
}
