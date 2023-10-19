export function cleanObject(p: Record<string, string | string[] | null>): Record<string, string | string[]> {
  const c = structuredClone(p);

  Object.keys(c).forEach((k) => {
    if (c[k] === null || (typeof c[k] === 'object' && c[k]?.length === 0)) {
      delete c[k];
    }
  });

  return c as Record<string, string | string[]>;
}
