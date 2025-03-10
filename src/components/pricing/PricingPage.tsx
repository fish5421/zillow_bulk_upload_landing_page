'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import styles from '@/styles/pricing.module.css';

import { RadioGroup, RadioGroupItem } from '@/components/shared/ui/radio-group';
import { Label } from '@/components/shared/ui/label';
import { TrackedButton } from '@/components/shared/ui/tracked-button';
import { ContactOverlay } from '@/components/contact/ContactOverlay';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: '', priceSuffix: '/month' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Pay-As-You-Go',
    id: '0',
    href: '#',
    price: { '1': '$5+0.05' },
    discountPrice: { '1': '' },
    description: `Access real estate data instantly with flexible pay-as-you-go pricing.`,
    features: [
      `Instant access to real estate data`,
      `Flexible payment per record`,
      `No subscription required`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Get Started`,
  },
  {
    name: 'Pro',
    id: '1',
    href: '#',
    price: { '1': '$350' },
    discountPrice: { '1': '' },
    description: `Monthly subscription with 10,000 records per month.`,
    features: [
      `10,000 records per month`,
      `Customizable reports`,
      `Dedicated Support`,
      `Priority access to new features`,
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Contact Sales`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const bannerText = '';

  return (
    <div
      className={cn('flex flex-col w-full items-center mt-32', styles.fancyOverlay)}
    >
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
              Pricing
            </h1>
            <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center max-w-prose">
              Access comprehensive real estate data to prioritize your leads effectively. Choose between flexible pay-as-you-go pricing or subscription plans to suit your needs.
            </p>
          </div>

          {bannerText ? (
            <div className="w-full lg:w-auto flex justify-center my-4">
              <p className="w-full px-4 py-3 text-xs bg-slate-100 text-black dark:bg-slate-300/30 dark:text-white/80 rounded-xl">
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <RadioGroup
                defaultValue={frequency.value}
                onValueChange={(value: string) => {
                  setFrequency(frequencies.find((f) => f.value === value)!);
                }}
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <Label className="sr-only">Payment frequency</Label>
                {frequencies.map((option) => (
                  <Label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-slate-500/90 text-white dark:bg-slate-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-slate-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="hidden"
                    />
                  </Label>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div
            className={cn(
              'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none',
              tiers.length === 2 ? 'lg:grid-cols-2' : '',
              tiers.length === 3 ? 'lg:grid-cols-3' : '',
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                    : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                  'max-w-xs ring-1 rounded-3xl p-8 xl:p-10',
                  tier.highlighted ? styles.fancyGlassContrast : '',
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    'text-2xl font-bold tracking-tight',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-400',
                    'mt-4 text-sm leading-6',
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                      'text-4xl font-bold tracking-tight',
                      typeof tier.discountPrice === 'object' && tier.discountPrice[frequency.value]
                        ? 'line-through'
                        : '',
                    )}
                  >
                    {typeof tier.price === 'string'
                      ? tier.price
                      : (tier.price as Record<string, string>)[frequency.value]}
                  </span>

                  {tier.discountPrice ? (
                    <span
                      className={cn(
                        tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                      )}
                    >
                      {typeof tier.discountPrice === 'string'
                        ? tier.discountPrice
                        : (tier.discountPrice as Record<string, string>)[frequency.value]}
                    </span>
                  ) : null}

                  {typeof tier.price === 'object' ? (
                    <span
                      className={cn(
                        tier.featured
                          ? 'text-gray-300 dark:text-gray-500'
                          : 'dark:text-gray-400 text-gray-600',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <div
                  aria-describedby={tier.id}
                  className="flex mt-6 shadow-sm"
                >
                  {tier.id === '0' ? (
                    <TrackedButton
                      size="lg"
                      disabled={tier.soldOut}
                      location="pricing_section"
                      buttonText="Start Qualifying Leads Now"
                      className={cn(
                        'w-full text-black dark:text-white',
                        !tier.highlighted && !tier.featured
                          ? 'bg-gray-100 dark:bg-gray-600'
                          : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700',
                          tier.featured || tier.soldOut ? 'bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black' : 'hover:opacity-80 transition-opacity',
                      )}
                      variant={tier.highlighted ? 'default' : 'outline'}
                    >
                      {tier.soldOut ? 'Sold out' : tier.cta}
                    </TrackedButton>
                  ) : (
                    <TrackedButton
                      size="lg"
                      disabled={tier.soldOut}
                      onClick={() => setIsContactOpen(true)}
                      location="pricing_section"
                      buttonText="Contact Sales"
                      className={cn(
                        'w-full text-black dark:text-white',
                        !tier.highlighted && !tier.featured
                          ? 'bg-gray-100 dark:bg-gray-600'
                          : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700',
                          tier.featured || tier.soldOut ? 'bg-white dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-black' : 'hover:opacity-80 transition-opacity',
                      )}
                      variant={tier.highlighted ? 'default' : 'outline'}
                    >
                      {tier.soldOut ? 'Sold out' : tier.cta}
                    </TrackedButton>
                  )}
                </div>

                <ul
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-700 dark:text-gray-400',
                    'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          tier.featured ? 'text-white dark:text-black' : '',
                          tier.highlighted
                            ? 'text-slate-500'
                            : 'text-gray-500',

                          'h-6 w-5 flex-none',
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactOverlay 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
