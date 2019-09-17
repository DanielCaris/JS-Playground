import useDebounce from '../../hooks/useDebounce';

const useExecuteCode = (beforeExecuteCode = () => {}) => {
  const executeCode = strCode => {
    beforeExecuteCode();
    try {
      // eslint-disable-next-line no-new-func
      const F = new Function(strCode);
      F();
    } catch (err) {
      console.error(err);
    }
  };

  const [debounceExecuteData] = useDebounce(executeCode, 100);
  return [debounceExecuteData];
};

export default useExecuteCode;
