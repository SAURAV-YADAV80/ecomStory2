// react-dom-client.d.ts
declare module 'react-dom/client' {
    import { Root } from 'react-dom';
    import * as React from 'react';
  
    export function createRoot(container: HTMLElement): Root;
  }
  