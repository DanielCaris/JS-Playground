import React from 'react';
import Stack from './Stack';

const VStack = props => {
  return (
    <Stack {...props} direction={'vertical'}>
      {props.children}
    </Stack>
  );
};

export default VStack;
