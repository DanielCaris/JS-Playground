import React, { useState } from 'react';

import Editor from '../components/Editor';
import Console from '../components/Console';
import LargeTitle from '../../ui-components/LargeTitle';
import VStack from '../../ui-components/VStack';
import HStack from '../../ui-components/HStack';

import useConsoleEvents from '../hooks/useConsoleEvents';
import useExecuteCode from '../hooks/useExecuteCode';

const Playground = () => {
  const localCode = localStorage.getItem('code');
  const [code, setCode] = useState(localCode || '');
  const [consoleItems, setConsoleItems] = useConsoleEvents();
  const [executeCode] = useExecuteCode(() => {
    setConsoleItems([]);
  });

  const fontSize = 18;
  const fontFamily =
    'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace';

  return (
    <VStack paddingHorizontal={16} style={{ height: '100%' }}>
      <LargeTitle paddingVertical={20} content="Playground" />
      <HStack>
        <VStack style={{ border: '1px solid' }}>
          <Editor
            fontSize={fontSize}
            value={code}
            onChange={code => {
              setCode(code);
              localStorage.setItem('code', code);
              executeCode(code);
            }}
          />
        </VStack>

        <VStack style={{ border: '1px solid' }}>
          <Console
            value={consoleItems}
            fontSize={fontSize}
            fontFamily={fontFamily}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Playground;
