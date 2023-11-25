import React from 'react';
import { createRoot } from 'react-dom/client';
import ShadowDom from './example/ShadowDom/ShadowDom';

const App = () => {
  return (
    <>
      <ShadowDom />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
