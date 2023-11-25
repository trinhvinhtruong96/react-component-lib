import React from 'react';
import './styles.scss';
import ShadowRootElement from '../../lib/ShadowRootElement';

const ShadowDom = () => {
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

export default ShadowDom;

