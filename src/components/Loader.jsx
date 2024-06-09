import React from 'react';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loader: {
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderTop: '8px solid #3498db', /* Loader color */
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default Loader;
