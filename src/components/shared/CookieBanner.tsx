'use client';
import { useEffect, useState } from "react";
import { initializePostHog } from "@/lib/posthog";
import { initializeMetaPixel } from "@/lib/meta-pixel";
import { Button } from "./ui/button";

type ConsentStatus = 'yes' | 'no' | 'undecided';

// Check if cookie consent bypass is enabled via environment variable
const isBypassEnabled = () => {
  return process.env.NEXT_PUBLIC_BYPASS_COOKIE_CONSENT === 'true';
};

export function cookieConsentGiven(): ConsentStatus {
  if (typeof window === 'undefined') return 'undecided';
  
  // If bypass is enabled, always return 'yes'
  if (isBypassEnabled()) {
    return 'yes';
  }
  
  const consent = localStorage.getItem('cookie_consent');
  if (!consent || !['yes', 'no'].includes(consent)) {
    return 'undecided';
  }
  return consent as ConsentStatus;
}

export function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<ConsentStatus>('undecided');

  useEffect(() => {
    const consent = cookieConsentGiven();
    setConsentGiven(consent);
    
    // Auto-initialize tracking if bypass is enabled or consent was given
    if (consent === 'yes') {
      initializePostHog();
      initializeMetaPixel();
    }
  }, []);


  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    // Initialize tracking only after consent
    initializePostHog();
    initializeMetaPixel();
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  // If bypass is enabled or consent has been given, don't show the banner
  if (isBypassEnabled() || consentGiven !== 'undecided') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          We use cookies and tracking technologies to understand how you use our platform and help us improve it.
          Your privacy matters - please choose your preference below.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDeclineCookies}
          >
            Decline cookies
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAcceptCookies}
          >
            Accept cookies and tracking
          </Button>
        </div>
      </div>
    </div>
  );
}
