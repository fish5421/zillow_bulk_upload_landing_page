"use client";

import { TrackedButton } from "@/components/shared/ui/tracked-button";
import { LandingProductVideoFeature } from "@/components/landing/LandingProductVideoFeature";

export default function HomeSmartFeature() {
  return (
    <LandingProductVideoFeature
      title="Dominate Your Market with Data-Driven Insights"
      descriptionComponent={
        <>
          <div className="grid gap-6">
            <p className="text-lg font-medium">
              Tired of generic cold calls that go nowhere? Discover how
              top-performing agents leverage enriched property data to stand out
              in a crowded market, double their conversions, and close deals
              faster.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2">1</span>
                  Enrich & Identify
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Upload your territory or lead list and watch our system instantly reveal each property&apos;s hidden potential—from valuation history to neighborhood development trends.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2">2</span>
                  Personalize & Connect
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use data-driven talking points that resonate. Mention local school rankings, recent market appreciation, or investment potential.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2">3</span>
                  Execute with Precision
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sync the enriched data to your CRM to organize, sort, and prioritize high-equity or long-term owners first. No more guesswork—every call aligns with genuine opportunity.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800">
              <p className="text-primary-700 dark:text-primary-100 text-sm italic font-medium">
                &quot;I started with 100 properties, zeroed in on 25 high-value leads using enriched data, and secured three listings in two weeks. Data-driven pitches turned cold calls into real conversations.&quot;
              </p>
            </div>

            <div className="space-y-3">
              <TrackedButton 
                variant="primary" 
                size="lg" 
                asChild
                location="smart_feature_section"
                buttonText="Start Your Data-Driven Journey"
              >
                <a href="#">Start Your Data-Driven Journey</a>
              </TrackedButton>
              <p className="text-sm text-primary-600">
                Join agents who are outpacing the competition with targeted property intelligence.
              </p>
            </div>
          </div>
        </>
      }
      videoSrc="https://customer-cajhg5znip2cupqy.cloudflarestream.com/21173cf625d89e64835c545a2a750024/manifest/video.m3u8"
      autoPlay={false}
      scrollToPlay={true}
      loop={false}
      controls={false}
      muted={true}
      videoPosition="right"
      withBackground
      withBackgroundGlow
      variant="primary"
      backgroundGlowVariant="primary"
      minHeight={300}
    />
  );
}
