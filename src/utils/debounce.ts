export const debounce = <T>(fn: (...rest: T[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout | undefined;

  return (...rest: T[]) => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = undefined;
    }

    timerId = setTimeout(fn, delay, ...rest);
  };
};
