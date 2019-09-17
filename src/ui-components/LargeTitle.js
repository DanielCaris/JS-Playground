import React from 'react';
import StyleSheet from './Stylesheet';

const LargeTitle = props => {
  const processedStyle = StyleSheet.create(props);
  return (
    <div style={{ ...styles.container, ...processedStyle }}>
      {props.content}
    </div>
  );
};

const styles = {
  container: {
    fontSize: 34,
    fontWeight: 'bolder',
    marginBottom: 7,
  },
};

export default LargeTitle;
