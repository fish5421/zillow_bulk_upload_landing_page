# Meta Pixel Setup Guide

## Overview
This project uses the Meta (Facebook) Pixel for conversion tracking and analytics. The pixel is only loaded after explicit user consent through the cookie banner.

## Getting Your Meta Pixel ID

1. Go to [Meta Business Suite](https://business.facebook.com/)
2. Navigate to Events Manager
3. Click the "+" button and select "Web"
4. Follow the setup process to create a new pixel
5. Copy your Pixel ID (it should be a string of numbers)

## Adding Your Pixel ID to the Project

1. Open your `.env.local` file
2. Add your Pixel ID:
```
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here
```

## Implementation Details

The Meta Pixel implementation follows these privacy-first principles:

1. No tracking occurs before user consent
2. The pixel script is only loaded after explicit user acceptance
3. Tracking is initialized alongside PostHog when users click "Accept cookies and tracking"

## Verification

To verify the pixel is working:

1. Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit your site
3. Accept cookies and tracking
4. Open the Pixel Helper - you should see your pixel firing

## Available Tracking Functions

```typescript
import { trackMetaEvent } from '@/lib/meta-pixel';

// Track a custom event
trackMetaEvent('CustomEvent', {
  value: 123,
  currency: 'USD'
});
```

The `trackMetaEvent` function is safe to use anywhere - it will only fire if the user has accepted tracking.

## Standard Events

Meta Pixel supports several standard events that you might want to track:

- PageView (automatic)
- ViewContent
- AddToCart
- InitiateCheckout
- Purchase
- Lead
- CompleteRegistration

Example usage:
```typescript
trackMetaEvent('Purchase', {
  value: 99.99,
  currency: 'USD',
  content_ids: ['product_123'],
  content_type: 'product'
});
