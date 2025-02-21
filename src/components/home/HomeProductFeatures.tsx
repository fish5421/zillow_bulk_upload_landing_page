import { TrackedButton } from "@/components/shared/ui/tracked-button";
import { LandingProductFeature } from "@/components/landing/LandingProductFeature";
import { LandingProductFeatureKeyPoints } from "@/components/landing/LandingProductFeatureKeyPoints";

export default function HomeProductFeatures() {
  return (
    <LandingProductFeature
      variant="secondary"
      withBackground
      withBackgroundGlow
      title="Instant Property Insights for Smarter Prospecting"
      descriptionComponent={
        <>
          <LandingProductFeatureKeyPoints
            variant="secondary"
            className="[&_h3]:text-secondary-900 [&_h3]:font-extrabold [&_p]:text-secondary-700"
            keyPoints={[
              {
                title: "Rapid Data Enrichment",
                description:
                  "Simply upload your address list and instantly receive comprehensive property details and Zestimates for every location—no more manual research needed.",
              },
              {
                title: "Complete Property Intelligence",
                description:
                  "Get detailed property values and market insights for each address, giving you the full picture you need to make informed prospecting decisions.",
              },
              {
                title: "Your Data, Your Strategy",
                description:
                  "Use your enriched property data however you want—sort, filter, and analyze based on your unique business approach and market focus.",
              },
            ]}
          />

          <TrackedButton
            className="mt-8"
            variant="secondary"
            size="lg"
            location="product_features_section"
            buttonText="Get Instant Property Insights"
            asChild
          >
            <a href="#">Get Instant Property Insights</a>
          </TrackedButton>

          <p className="text-sm">
            Transform your address list into actionable insights in minutes
          </p>
        </>
      }
      imageSrc="https://zillow-bulk-upload-landing-page.vercel.app/undraw_services_dhxj.svg"
      imageAlt="Services illustration"
      minHeight={250}
      imagePosition="left"
      imagePerspective="bottom"
    />
  );
}
