import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';

export default function HomeTestimonials() {
  const testimonialItems = [
    {
      name: 'Matthew',
      text: 'After using this platform, I\'ve soared above my sales goals. Manual data entry is a thing of the past!',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
      handle: 'Senior Real Estate Agent'
    },
    {
      name: 'Joshua L.',
      text: 'The instant Zestimates feature is game-changing. I can now make calls armed with accurate property data in seconds.',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
      handle: 'Licensed Real Estate Agent'
    },
    {
      name: 'Parl Coppa',
      text: 'I doubled my lead conversion rate. No more guesswork, just precise data and confident calls.',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      handle: 'Top Producing Agent',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Mandy T.',
      text: 'I was skeptical at first, but this system truly delivered. My cold calls feel effortless now!',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
      handle: 'Residential Property Specialist'
    },
    {
      name: 'Alex R.',
      text: 'I can easily recommend this to any realtor looking to save time and close more deals!',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
      handle: 'Real Estate Broker'
    },
    {
      name: 'Sam K.',
      text: 'Brilliant! My pipeline is consistently full, and I have more time for face-to-face with clients.',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
      handle: 'Luxury Property Specialist'
    },
  ];

  return (
    <LandingTestimonialReadMoreWrapper size="md">
      <LandingTestimonialGrid
        title="Don't take it from us"
        description="See what our customers have to say."
        testimonialItems={testimonialItems}
        withBackgroundGlow
        withBackground
      />
    </LandingTestimonialReadMoreWrapper>
  );
}
