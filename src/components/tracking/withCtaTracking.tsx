'use client';
import { ComponentType } from 'react';
import { captureEvent } from '@/lib/posthog';

interface CtaTrackingProps<T extends HTMLElement = HTMLElement> {
  location?: string;
  buttonText?: string;
  onClick?: (e: React.MouseEvent<T>) => void;
}

export function withCtaTracking<T extends HTMLElement, P extends CtaTrackingProps<T>>(
  WrappedComponent: ComponentType<P>
) {
  return function CtaTrackingComponent(props: P) {
    const handleClick = (e: React.MouseEvent<T>) => {
      // Track the CTA click
      captureEvent('cta_clicked', {
        location: props.location || 'unknown',
        text: props.buttonText || e.currentTarget.textContent || 'unknown',
        path: window.location.pathname,
        timestamp: new Date().toISOString()
      });

      // For Contact Sales buttons, only handle the click without redirecting
      if (props.buttonText === 'Contact Sales') {
        if (props.onClick) {
          props.onClick(e);
        }
        return;
      }

      // For all other buttons, handle click and redirect
      if (props.onClick) {
        props.onClick(e);
      }

      // Redirect to bulkupload.info
      window.location.href = 'https://www.bulkupload.info';
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
}
