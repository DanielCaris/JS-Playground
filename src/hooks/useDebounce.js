import { useState, useCallback } from 'react';

const useDebounce = (func, waitTime) => {
  const [debounceFunc, setDebounceFunc] = useState(0);

  const callDebounceFunction = useCallback(
    args => {
      if (debounceFunc) {
        clearTimeout(debounceFunc);
      }
      setDebounceFunc(
        setTimeout(() => {
          func(args);
        }, waitTime),
      );
    },
    [debounceFunc, setDebounceFunc, func, waitTime],
  );

  return [callDebounceFunction];
};

export default useDebounce;
