import React, { createElement, HTMLAttributes, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

type ShadowRootProps<T extends keyof HTMLElementTagNameMap = 'div'> = {
  children: React.ReactNode;
  shadowRootInit: ShadowRootInit;
  shadowHostName: T;
} & HTMLAttributes<T>;

const ShadowRootElement = <T extends keyof HTMLElementTagNameMap>(
  {
    children,
    shadowHostName,
    shadowRootInit,
    ...rest
  }: ShadowRootProps<T>) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const shadowRoot = containerRef.current.attachShadow(shadowRootInit);
    const root = createRoot(shadowRoot);
    root.render(children);
  }, []);


  return createElement(
    shadowHostName,
    { ref: containerRef, ...rest },
  );
};

export default ShadowRootElement;
