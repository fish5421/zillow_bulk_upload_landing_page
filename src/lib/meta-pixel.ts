'use client';

let isInitialized = false;

type MetaPixelArg = string | Record<string, unknown> | undefined;

interface MetaPixelFunction {
  (...args: MetaPixelArg[]): void;
  callMethod?: (...args: MetaPixelArg[]) => void;
  push?: (...args: MetaPixelArg[]) => void;
  loaded?: boolean;
  version?: string;
  queue?: MetaPixelArg[][];
}

declare global {
  interface Window {
    fbq: MetaPixelFunction;
    _fbq: MetaPixelFunction;
  }
}

export function initializeMetaPixel() {
  if (isInitialized) return;
  
  // Add Meta Pixel base code
  const f = window;
  const b = document;
  
  function t(): void {
    const n = function(this: Window, ...args: MetaPixelArg[]) {
      if ((n as MetaPixelFunction).callMethod) {
        (n as MetaPixelFunction).callMethod?.apply(n, args);
      } else {
        (n as MetaPixelFunction).queue?.push(args);
      }
    } as MetaPixelFunction;
    
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    f.fbq = n;
  }
  
  t();
  
  const scriptElement = b.createElement('script');
  scriptElement.async = true;
  scriptElement.src = 'https://connect.facebook.net/en_US/fbevents.js';
  
  const firstScript = b.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(scriptElement, firstScript);
  }

  // Initialize with your Pixel ID
  window.fbq('init', process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR-PIXEL-ID');
  
  isInitialized = true;
}

// Safe tracking function that only works after initialization
export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (!isInitialized) return;
  window.fbq('track', eventName, parameters);
}

// Helper to check if Meta Pixel is ready
export function isMetaPixelReady() {
  return isInitialized;
}
