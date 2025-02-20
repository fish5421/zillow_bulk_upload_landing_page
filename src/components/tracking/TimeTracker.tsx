'use client';
import { useEffect } from 'react';
import { captureEvent } from '@/lib/posthog';

export function TimeTracker() {
  useEffect(() => {
    const startTime = Date.now();

    const handlePageLeave = () => {
      const timeSpent = Date.now() - startTime;
      captureEvent('time_on_page', {
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
