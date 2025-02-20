'use client';
import { TimeTracker } from './TimeTracker';
import { ScrollTracker } from './ScrollTracker';
import { LeadSourceTracker } from './LeadSourceTracker';
import { cookieConsentGiven } from '../shared/CookieBanner';
import { isPostHogReady } from '@/lib/posthog';
export { withCtaTracking } from './withCtaTracking';

export function Analytics({ className }: { className?: string }) {
  // Only render tracking components if PostHog is initialized (user has consented)
  if (!isPostHogReady()) {
    return null;
  }

  return (
    <div className={className}>
      <TimeTracker />
      <ScrollTracker />
      <LeadSourceTracker />
    </div>
  );
}
