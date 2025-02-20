'use client';
import { Button } from './button';
import { withCtaTracking } from '@/components/tracking/withCtaTracking';
import { ComponentProps } from 'react';

export type TrackedButtonProps = ComponentProps<typeof Button> & {
  location?: string;
  buttonText?: string;
};

export const TrackedButton = withCtaTracking<TrackedButtonProps>(
  ({ location, buttonText, ...props }) => <Button {...props} />
);
