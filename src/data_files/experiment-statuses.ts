/**
 * Experiment status ids — how far an experiment got. Kept separate from
 * `content.config.ts` for the same reason as the blog category ids.
 *
 * Ids are stable and language-neutral; the reader-facing names live in the
 * copy tables under `experimentsIndex.statuses.<id>`.
 */
export const EXPERIMENT_STATUS_IDS = [
  'idea',
  'in-progress',
  'done',
  'archived',
] as const;

export type ExperimentStatusId = (typeof EXPERIMENT_STATUS_IDS)[number];

/** Badge styling per status — geometry of the chip, not its label. */
export const EXPERIMENT_STATUS_STYLES: Record<ExperimentStatusId, string> = {
  idea: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300',
  'in-progress':
    'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  done: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  archived: 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
};
