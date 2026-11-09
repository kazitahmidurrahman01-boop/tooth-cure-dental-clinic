export const getAssetUrl = (path: string): string => {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return base + clean;
};
