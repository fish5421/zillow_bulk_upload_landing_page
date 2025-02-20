"use client";

import { useState } from "react";
import Link from "next/link";
import { TrackedButton } from "@/components/shared/ui/tracked-button";
import { ContactOverlay } from "@/components/contact/ContactOverlay";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Your Logo</span>
          </Link>
        </div>
        
        <div className="flex flex-1 justify-end">
          <TrackedButton
            variant="primary"
            size="lg"
            onClick={() => setIsContactOpen(true)}
            location="header"
            buttonText="Contact Us"
          >
            Contact Us
          </TrackedButton>
        </div>
      </nav>

      <ContactOverlay 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </header>
  );
}
