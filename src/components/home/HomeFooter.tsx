import { LandingFooter } from '@/components/landing/LandingFooter';

export default function HomeFooter() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Smart Features', href: '#smart-features' },
        { label: 'Reviews', href: '#social-proof' },
      ],
    },
  ];

  const bottomLinks = [
    { label: '© 2025 Analytiq Data Consulting', href: '/' },
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ];

  return <LandingFooter sections={footerSections} bottomLinks={bottomLinks} />;
}
