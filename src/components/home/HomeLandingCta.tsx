"use client";

import { TrackedButton } from "@/components/shared/ui/tracked-button";
import { LandingPrimaryVideoCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { LandingSocialProof } from "@/components/landing/social-proof/LandingSocialProof";
import { LandingDiscount } from "@/components/landing/discount/LandingDiscount";

export default function HomeLandingCta() {
  const avatarItems = [
    {
      imageSrc: "https://picsum.photos/id/64/100/100",
      name: "John Doe",
    },
    {
      imageSrc: "https://picsum.photos/id/65/100/100",
      name: "Jane Doe",
    },
    {
      imageSrc: "https://picsum.photos/id/669/100/100",
      name: "Alice Doe",
    },
  ];

  return (
    <LandingPrimaryVideoCtaSection
      title="Cold Call with Confidence: Instant Zillow Data for Real Estate Agents"
      description="Transform your address list into qualified leads worth calling—ready for Follow-up Boss. Every minute spent researching is a minute not closing. Our platform instantly enriches your lead list with Zestimates and property details, creating Follow-up Boss-ready exports in minutes. No more manual research, no expensive VAs—just qualified leads ready for your next call."
      autoPlay={true}
      loop={false}
      controls={false}
      muted={true}
      videoSrc="https://customer-cajhg5znip2cupqy.cloudflarestream.com/1d1010499747164c2ef0111aeb214101/manifest/video.m3u8"
      withBackground={true}
      withBackgroundGlow={true}
      variant="primary"
      backgroundGlowVariant="primary"
    >
      <div className="flex flex-col gap-4">
        <TrackedButton 
          size="xl" 
          variant="primary" 
          asChild
          location="hero_section"
          buttonText="Start Qualifying Leads Now"
        >
          <a href="#">Start Qualifying Leads Now</a>
        </TrackedButton>

        <LandingDiscount
          discountValueText="25% off your next order"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-8"
          showRating
          numberOfUsers={250}
          suffixText="happy users"
          avatarItems={avatarItems}
        />
      </div>
    </LandingPrimaryVideoCtaSection>
  );
}
