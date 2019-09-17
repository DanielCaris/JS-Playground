import React from 'react';
import StyleSheet from './Stylesheet';

const Stack = props => {
  const { children, direction, backgroundColor = 'transparent' } = props;

  if (!direction) {
    throw Error('the direction is required on Stack component');
  }
  const flexDirection = direction === 'vertical' ? 'column' : 'row';

  const processedStyle = StyleSheet.create(props);
  return (
    <section
      {...props}
      style={{
        ...styles.container,
        ...{ backgroundColor },
        ...{ flexDirection },
        ...processedStyle,
      }}>
      {children}
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

export default Stack;
