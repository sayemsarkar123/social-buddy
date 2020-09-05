import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>404</h1>
      <h3>The page you're looking <br/> for can't be found</h3>
    </div>
  );
};

export default NoMatch;