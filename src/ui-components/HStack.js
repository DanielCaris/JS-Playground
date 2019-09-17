import React from 'react';
import Stack from './Stack';

const HStack = props => {
  return (
    <Stack {...props} direction={'horizontal'}>
      {props.children}
    </Stack>
  );
};

export default HStack;
