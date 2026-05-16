/** Returns true for http: and https: URLs with a valid host. */
export function isSafeHttpUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return (url.protocol === 'https:' || url.protocol === 'http:') && Boolean(url.hostname);
  } catch {
    return false;
  }
}

/** Tally embed URLs must be HTTPS and served from tally.so. */
export function isTallyEmbedUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:') return false;
    return url.hostname === 'tally.so' || url.hostname.endsWith('.tally.so');
  } catch {
    return false;
  }
}

export function normalizeExternalUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const trimmed = value.trim();
  return isSafeHttpUrl(trimmed) ? trimmed : undefined;
}

/** Embed query params: dynamic height (no iframe scrollbar), transparent background. */
export function buildTallyEmbedUrl(value: string): string {
  const url = new URL(value.trim());
  url.searchParams.set('dynamicHeight', '1');
  url.searchParams.set('transparentBackground', '1');
  url.searchParams.set('alignLeft', '1');
  return url.toString();
}

/** Basic email shape check for optional mailto fallback (not full RFC validation). */
export function isContactEmail(value: string): boolean {
  const trimmed = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) && trimmed.length <= 254;
}
