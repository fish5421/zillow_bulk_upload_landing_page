import HomeLandingCta from "@/components/home/HomeLandingCta";
import HomeSocialProof from "@/components/home/HomeSocialProof";
import HomeProductFeatures from "@/components/home/HomeProductFeatures";
import HomeSmartFeature from "@/components/home/HomeSmartFeature";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFaq from "@/components/home/HomeFaq";
import { HomeContact } from "@/components/home/HomeContact";
import HomeFooter from "@/components/home/HomeFooter";
import PricingPage from "@/components/pricing/PricingPage";

export default function Home() {
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

        {/* Footer */}
        <HomeFooter />
      </main>
    </>
  );
}
