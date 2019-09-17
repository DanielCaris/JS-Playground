import { useEffect, useState, useCallback } from 'react';

const useConsoleEvents = () => {
  const [consoleItems, setConsoleItems] = useState([]);

  const addConsoleItem = useCallback(
    newValue => {
      setConsoleItems(prevState => {
        return [...prevState, newValue];
      });
    },
    [setConsoleItems],
  );

  useEffect(() => {
    const originalError = console.error;
    const originalLog = console.log;
    const originalWarning = console.warn;
    const originalInfo = console.info;
    const originalClear = console.clear;

    console.error = function(error) {
      addConsoleItem({ type: 'error', message: error.message });
      originalError.apply(console, arguments);
    };
    console.log = (...args) => {
      addConsoleItem({ type: 'log', message: args.join(' ') });
      originalLog.apply(console, args);
    };
    console.warn = function(...args) {
      addConsoleItem({ type: 'warn', message: args.join(' ') });
      originalWarning.apply(console, args);
    };
    console.info = function(...args) {
      addConsoleItem({ type: 'info', message: args.join(' ') });
      originalInfo.apply(console, args);
    };
    console.clear = function(...args) {
      setConsoleItems([]);
      originalClear.apply(console, args);
    };
  }, [setConsoleItems, addConsoleItem]);

  return [consoleItems, setConsoleItems];
};

export default useConsoleEvents;
