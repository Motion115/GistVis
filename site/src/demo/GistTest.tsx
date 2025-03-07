import React from 'react';
import { GistViewer } from 'gist-wsv';

export const GistTest: React.FC = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Gist WSV Test</h2>
      <GistViewer text="This is a test of the gist-wsv component!" />
    </div>
  );
};

export default GistTest;