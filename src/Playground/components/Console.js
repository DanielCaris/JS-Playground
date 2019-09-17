import React from 'react';
import VStack from '../../ui-components/VStack';

const Console = ({ value, fontSize = 14, fontFamily }) => {
  if (!value) {
    return null;
  }

  return (
    <VStack>
      {value.map((line, i) => (
        <div key={i} style={{ fontSize, fontFamily, ...styles[line.type] }}>
          {line.message}
        </div>
      ))}
    </VStack>
  );
};

const styles = {
  log: {
    color: 'black',
  },
  info: {
    color: 'rgb(83,130,235)',
  },
  warn: {
    color: 'rgb(239,196,54)',
  },
  error: {
    color: 'rgb(206,64,59)',
  },
};

export default Console;
