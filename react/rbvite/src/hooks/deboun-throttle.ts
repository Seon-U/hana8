import { useRef } from 'react';
import { useTimeout } from './useTimer';

export function useDebounce<T extends unknown[]>(
  cb: (...args: T) => void,
  wait: number,
  ...args: T
) {
  const { reset } = useTimeout(cb, wait, ...args);
  return reset;
}

export function useThrottle<T extends unknown[]>(
  cb: (...args: T) => void,
  wait: number,
  ...args: T
) {
  //useRef 써서 clear 저장 (값이 있으면 clear, 없으면 실행);
  const clearFn = useRef<() => void>(null);
  if (clearFn.current) return;
  const { clear } = useTimeout(cb, wait, ...args);
  clearFn.current = clear;
}
