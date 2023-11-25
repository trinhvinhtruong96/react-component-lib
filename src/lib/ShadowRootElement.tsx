import React, { createElement, HTMLAttributes, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

type ShadowRootProps<T extends keyof HTMLElementTagNameMap> = {
  children: React.ReactNode;
  shadowRootInit: ShadowRootInit;
  shadowHostName?: T;
} & HTMLAttributes<T>;

const ShadowRootElement = <T extends keyof HTMLElementTagNameMap>(
  {
    children,
    shadowHostName,
    shadowRootInit,
    ...rest
  }: ShadowRootProps<T>) => {
  const containerRef = useRef(null);
  const shadowRoot =  useRef<ShadowRoot>()

  useEffect(() => {
    if(!shadowRoot.current) {
      shadowRoot.current = containerRef.current.attachShadow(shadowRootInit);
      const root = createRoot(shadowRoot.current);
      root.render(children);
    }
  }, []);


  return createElement(
    shadowHostName ?? "div",
    { ref: containerRef, ...rest },
  );
};

export default ShadowRootElement;
