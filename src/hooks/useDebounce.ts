import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';

export function useDebounce(callback: (s: string | null) => void) {
  const ref = useRef<(s: string | null) => void>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (s: string | null) => {
      ref.current?.(s);
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
}
