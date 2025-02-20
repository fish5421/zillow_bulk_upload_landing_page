'use client';
import { useEffect } from 'react';
import { captureEvent } from '@/lib/posthog';

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

      captureEvent('lead_source_captured', attribution);
    };

    // Capture on first page load
    captureLeadSource();
  }, []);

  return null;
}
