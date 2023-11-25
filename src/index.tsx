import React from 'react';
import { createRoot } from 'react-dom/client';
import ShadowRootElement from './lib/ShadowRootElement';
import './styles.scss';

const App = () => {

  return (
    <>
      <h1>Normal element</h1>
      <ShadowRootElement shadowRootInit={{ mode: 'open' }}>
        <h1>Element inside shadow dom </h1>
        <h1>Element inside shadow dom </h1>
      </ShadowRootElement>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
