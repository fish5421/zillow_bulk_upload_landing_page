"use client";

import { useState } from "react";
import { ContactOverlay } from "@/components/contact/ContactOverlay";
import { TrackedButton } from "@/components/shared/ui/tracked-button";

export function HomeContact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative isolate bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to boost your real estate business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Get in touch with our sales team and discover how our platform can help you close more deals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <TrackedButton
              variant="primary"
              size="lg"
              onClick={() => setIsContactOpen(true)}
              location="contact_section"
              buttonText="Contact Sales"
            >
              Contact Sales
            </TrackedButton>
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
