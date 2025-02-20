# PostHog Tracking Implementation Guide

## Setup

First, install PostHog in your Next.js project:

```bash
npm install posthog-js
```

## 1. Initialize PostHog

Add PostHog initialization in your `src/app/layout.tsx`:

```typescript
'use client';
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageleave: false // We'll handle this ourselves
  })
}
```

## 2. CTA Click Events

Track clicks on all CTA buttons:

```typescript
// In your CTA components (e.g., LandingPrimaryCta.tsx)
const handleCtaClick = () => {
  posthog.capture('cta_clicked', {
    location: 'primary_hero', // or wherever the CTA is
    text: buttonText,
    path: window.location.pathname
  })
}

return <button onClick={handleCtaClick}>...</button>
```

## 3. Time on Page Tracking

Add this to your layout component:

```typescript
'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';

export function TimeTracker() {
  useEffect(() => {
    const startTime = Date.now();

    const handlePageLeave = () => {
      const timeSpent = Date.now() - startTime;
      posthog.capture('time_on_page', {
        duration_ms: timeSpent,
        duration_seconds: Math.floor(timeSpent / 1000),
        path: window.location.pathname
      });
    };

    window.addEventListener('beforeunload', handlePageLeave);
    return () => window.removeEventListener('beforeunload', handlePageLeave);
  }, []);

  return null;
}
```

## 4. Scroll Depth Tracking

Create a scroll tracking component:

```typescript
'use client';
import { useEffect, useRef } from 'react';
import posthog from 'posthog-js';

export function ScrollTracker() {
  const maxPercentage = useRef(0);
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    const calculateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollPercentage = Math.min(
        100,
        Math.round((scrollTop + windowHeight) / documentHeight * 100)
      );

      // Track maximum scroll depth
      if (scrollPercentage > maxPercentage.current) {
        maxPercentage.current = scrollPercentage;
      }

      // Track when specific thresholds are reached
      [25, 50, 75, 100].forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          posthog.capture('scroll_depth_milestone', {
            depth_percentage: threshold,
            path: window.location.pathname
          });
        }
      });
    };

    window.addEventListener('scroll', calculateScrollDepth);
    return () => window.removeEventListener('scroll', calculateScrollDepth);
  }, []);

  // Capture final scroll depth when leaving
  useEffect(() => {
    const handlePageLeave = () => {
      posthog.capture('final_scroll_depth', {
        max_depth_percentage: maxPercentage.current,
        path: window.location.pathname
      });
    };

    window.addEventListener('beforeunload', handlePageLeave);
    return () => window.removeEventListener('beforeunload', handlePageLeave);
  }, []);

  return null;
}
```

## 5. Lead Source Attribution

Add this to your layout component:

```typescript
'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';

export function LeadSourceTracker() {
  useEffect(() => {
    const captureLeadSource = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;
      
      const attribution = {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_content: urlParams.get('utm_content'),
        utm_term: urlParams.get('utm_term'),
        referrer: referrer || 'direct',
        landing_page: window.location.pathname
      };

      posthog.capture('lead_source_captured', attribution);
    };

    // Capture on first page load
    captureLeadSource();
  }, []);

  return null;
}
```

## Integration

Add all trackers to your layout:

```typescript
// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <TimeTracker />
        <ScrollTracker />
        <LeadSourceTracker />
      </body>
    </html>
  )
}
```

## Cookie Consent Implementation

The tracking system implements a strict cookie consent mechanism that ensures no tracking occurs before explicit user consent:

1. Initial State:
   - When a user first visits the site, PostHog is NOT initialized
   - A cookie consent banner appears at the bottom of the page
   - No tracking or cookies are set until consent is given

2. User Choices:
   - Accept Cookies: 
     * Initializes PostHog with persistent storage
     * Begins tracking from this point forward
     * No data is collected retroactively
   - Decline Cookies:
     * PostHog remains uninitialized
     * No tracking occurs
     * No cookies are set

3. Implementation Details:
   ```typescript
   // Safe tracking functions that only work after consent
   export function initializePostHog() {
     if (isInitialized) return;
     
     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
       api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
       persistence: 'localStorage+cookie',
       // ... other config
     });
     
     isInitialized = true;
   }

   // Helper to check if PostHog is ready
   export function isPostHogReady() {
     return isInitialized;
   }

   // Safe capture function
   export function captureEvent(eventName: string, properties?: Record<string, any>) {
     if (isInitialized) {
       posthog.capture(eventName, properties);
     }
   }
   ```

4. Components:
   - `CookieBanner`: Manages user consent UI and initializes PostHog only after acceptance
   - `initializePostHog()`: Handles PostHog initialization with proper configuration
   - `captureEvent()`: Safe event capture that only works after consent
   - All tracking components check `isPostHogReady()` before attempting to track

## Environment Setup

Create a `.env.local` file with your PostHog credentials:

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=your_instance_host
```

## PostHog Dashboard Setup

After implementing these tracking events, you can create insights in PostHog for:

1. CTA Performance:
   - Click-through rates by CTA location
   - Conversion funnel analysis

2. Engagement Metrics:
   - Average time on page
   - Scroll depth distribution
   - Content engagement patterns

3. Attribution Analysis:
   - Lead sources breakdown
   - Campaign performance
   - Traffic source effectiveness
