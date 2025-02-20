import { TrackedButton } from '@/components/shared/ui/tracked-button';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function HomeTaskPrioritization() {
  return (
    <LandingProductFeature
      title="Smart Task Prioritization"
      descriptionComponent={
        <>
          <p>
            Our AI-powered task prioritization feature automatically organizes
            your to-do list based on deadlines, importance, and your work
            patterns, ensuring you focus on the most critical tasks first.
          </p>

          <TrackedButton 
            className="mt-8" 
            variant="secondary" 
            asChild
            location="task_prioritization_section"
            buttonText="Try now for free"
          >
            <a href="#">Try now for free</a>
          </TrackedButton>

          <p className="text-sm">First month is on us.</p>
        </>
      }
      withBackground
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      imageSrc="/static/images/backdrop-5.webp"
      imageAlt="Craft Unique Solutions with Ease"
      imagePosition="left"
      imagePerspective="none"
    />
  );
}
