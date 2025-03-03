# Cookie Consent Bypass

This document explains how to bypass the cookie consent banner while still allowing tracking to function normally.

## How to Enable Bypass

Add the following line to your `.env.local` file:

```
NEXT_PUBLIC_BYPASS_COOKIE_CONSENT=true
```

## What This Does

When this environment variable is set to `true`:

1. The cookie consent banner will not be displayed to users
2. Tracking will be automatically initialized (PostHog and Meta Pixel)
3. All tracking events will function normally as if the user had accepted cookies

## How to Disable Bypass

To disable the bypass and return to the normal cookie consent flow, either:

1. Remove the `NEXT_PUBLIC_BYPASS_COOKIE_CONSENT` line from your `.env.local` file, or
2. Set it to `false`:

```
NEXT_PUBLIC_BYPASS_COOKIE_CONSENT=false
```

## Implementation Details

The bypass functionality is implemented in:
- `/src/components/shared/CookieBanner.tsx` - Contains the logic to check for the bypass flag
- `/next.config.js` - Provides a default value for the environment variable

The implementation ensures that when the bypass is enabled, the system behaves as if the user has already given consent to cookies and tracking.
