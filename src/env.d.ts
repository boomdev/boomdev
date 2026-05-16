/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_TALLY_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
