import { execFileSync } from 'node:child_process';

const cache = new Map<string, Date | undefined>();

/**
 * Best-effort lastModified from git history for a sitemap entry.
 * Returns undefined (caller falls back to build date) when the repo has no
 * history for the path — e.g. a shallow CI checkout — rather than guessing.
 */
export function getLastModified(relativePath: string): Date | undefined {
  if (cache.has(relativePath)) return cache.get(relativePath);

  let result: Date | undefined;
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%aI', '--', relativePath], {
      cwd: process.cwd(),
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    result = iso ? new Date(iso) : undefined;
  } catch {
    result = undefined;
  }

  cache.set(relativePath, result);
  return result;
}
