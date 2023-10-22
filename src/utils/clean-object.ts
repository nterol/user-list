type NonNullableStruct<T extends Record<string, unknown>> = {
  [K in keyof T]: Required<NonNullable<T[K]>>;
};

export function cleanObject<T extends Record<string, unknown>>(p: T): NonNullableStruct<T> {
  const c = structuredClone(p);

  Object.keys(c).forEach((k) => {
    if (c[k] === null || typeof c[k] === 'undefined') {
      delete c[k];
    }
  });

  return c as NonNullableStruct<T>;
}

export function removeEmptyArray<T extends Record<string, string[] | string>>(o: T): T {
  const c = structuredClone(o);

  Object.keys(c).forEach((k) => {
    if (typeof c[k] === 'object' && c[k]?.length && c[k]?.length === 0) {
      delete c[k];
    }
  });

  return c;
}
