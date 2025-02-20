'use client';

import Link from 'next/link';
import { TrackedButton } from '@/components/shared/ui/tracked-button';
import { useState } from 'react';
import { ContactOverlay } from '@/components/contact/ContactOverlay';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface LandingFooterProps {
  sections: FooterSection[];
  bottomLinks: FooterLink[];
  withBackground?: boolean;
}

export function LandingFooter({
  sections,
  bottomLinks,
  withBackground = true,
}: LandingFooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <footer className={`py-10 ${withBackground ? 'bg-gray-50' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          {sections.map((section) => (
            <div key={section.title} className="text-center w-full max-w-4xl">
              <h3 className="font-semibold text-gray-900 mb-8 text-3xl">{section.title}</h3>
              <ul className="flex flex-row flex-wrap items-center justify-center gap-x-16 gap-y-6">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const elementId = link.href.substring(1);
                          const target = document.getElementById(elementId);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <TrackedButton 
                variant="secondary"
                onClick={() => setIsContactOpen(true)}
                className="text-sm"
                location="footer"
                buttonText="Contact Sales"
              >
                Contact Sales
              </TrackedButton>
              <TrackedButton 
                variant="primary" 
                asChild 
                className="text-sm"
                location="footer"
                buttonText="Get Started"
              >
                <a href="#">Get Started</a>
              </TrackedButton>
            </div>
          </div>

          <ContactOverlay 
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </div>
    </footer>
  );
}
