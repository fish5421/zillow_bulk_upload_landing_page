import posthog from 'posthog-js';

let isInitialized = false;

export function initializePostHog() {
  // Prevent double initialization
  if (isInitialized) return;
  
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageleave: false,
    autocapture: false,
    persistence: 'localStorage+cookie',
    loaded: (posthog) => {
      // Reset any data that might have been collected
      posthog.reset();
    }
  });

  isInitialized = true;
}

// Helper to check if PostHog is ready to use
export function isPostHogReady() {
  return isInitialized;
}

// Safe capture function that only sends events if PostHog is initialized
export function captureEvent(eventName: string, properties?: Record<string, any>) {
  if (isInitialized) {
    posthog.capture(eventName, properties);
  }
}
