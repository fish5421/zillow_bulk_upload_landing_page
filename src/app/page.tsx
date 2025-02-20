// /src/app/page.tsx
import HomeLandingCta from "@/components/home/HomeLandingCta";
import HomeSocialProof from "@/components/home/HomeSocialProof";
import HomeProductFeatures from "@/components/home/HomeProductFeatures";
import HomeSmartFeature from "@/components/home/HomeSmartFeature";
import HomeTaskPrioritization from "@/components/home/HomeTaskPrioritization";
import HomeSocialBand from "@/components/home/HomeSocialBand";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFaq from "@/components/home/HomeFaq";
import { HomeContact } from "@/components/home/HomeContact";
import HomeFooter from "@/components/home/HomeFooter";
import PricingPage from "@/components/pricing/PricingPage";

export default function Home() {
  // This is still a Server Component by default.
  // Return anything else you want server-rendered,
  // then include the CTA where needed.
  return (
    <>
      <main>
        {/* Social proof banner */}
        <section id="social-proof">
          <HomeSocialProof />
        </section>

        {/* Client CTA section: */}
        <section id="cta">
          <HomeLandingCta />
        </section>

        {/* Product features section */}
        <section id="features">
          <HomeProductFeatures />
        </section>

        {/* Smart features section */}
        <section id="smart-features">
          <HomeSmartFeature />
        </section>

        {/* Task prioritization section */}
        {/* <section id="task-prioritization">
          <HomeTaskPrioritization />
        </section> */}

        {/* Testimonials section */}
        <section id="testimonials">
          <HomeTestimonials />
        </section>

        {/* Pricing section */}
        <section id="pricing">
          <PricingPage />
        </section>

        {/* FAQ section */}
        <section id="faq">
          <HomeFaq />
        </section>

        {/* Contact section */}
        <section id="contact">
          <HomeContact />
        </section>

      </main>

      {/* Footer */}
      <HomeFooter />
    </>
  );
}
