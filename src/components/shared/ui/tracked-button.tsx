'use client';
import { Button } from './button';
import { withCtaTracking } from '@/components/tracking/withCtaTracking';
import { ComponentProps } from 'react';

export type TrackedButtonProps = ComponentProps<typeof Button> & {
  location?: string;
  buttonText?: string;
};

export const TrackedButton = withCtaTracking<HTMLButtonElement, TrackedButtonProps>(
  // These props are used by the HOC for tracking
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ location, buttonText, ...props }) => <Button {...props} />
);
