'use client';
import { TrackedButton } from '@/components/shared/ui/tracked-button';
import { ComponentProps } from 'react';

interface LandingCtaButtonProps extends ComponentProps<typeof TrackedButton> {
  text: string;
  ctaLocation: string;
}

export function LandingCtaButton({ text, ctaLocation, ...props }: LandingCtaButtonProps) {
  return (
    <TrackedButton
      location={ctaLocation}
      buttonText={text}
      size="lg"
      {...props}
    >
      {text}
    </TrackedButton>
  );
}
