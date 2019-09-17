import React from 'react';
import Playground from './Playground/views/Playground';

function App() {
  return (
    <div style={styles.app}>
      <Playground />
    </div>
  );
}

const styles = {
  app: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

export default App;
