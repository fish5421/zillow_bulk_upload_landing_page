'use client';
import { useEffect, useRef } from 'react';
import { captureEvent } from '@/lib/posthog';

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
          captureEvent('scroll_depth_milestone', {
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
      captureEvent('final_scroll_depth', {
        max_depth_percentage: maxPercentage.current,
        path: window.location.pathname
      });
    };

    window.addEventListener('beforeunload', handlePageLeave);
    return () => window.removeEventListener('beforeunload', handlePageLeave);
  }, []);

  return null;
}
