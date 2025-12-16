import { useLayoutEffect, useState } from 'react';

export function useFetch<T>(url: string) {
  const [vals, setVal] = useState<{
    data: T | null;
    error: unknown;
    isLoading: boolean;
  }>({
    data: null,
    error: null,
    isLoading: true,
  });

  useLayoutEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    //eslint-disable-next-line react-hooks/set-state-in-effect
    setVal((prev) => ({ ...prev, isLoading: true, error: null }));

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => setVal((prev) => ({ ...prev, data })))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setVal((prev) => ({ ...prev, error: err }));
        }
      })
      .finally(() => setVal((prev) => ({ ...prev, isLoading: false })));

    return () => controller.abort();
  }, [url]);

  return vals;
}
