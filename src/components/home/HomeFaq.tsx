import { LandingFaqSection } from '@/components/landing/LandingFaq';

export default function HomeFaq() {
  const faqItems = [
    {
      question: 'How will I receive my enriched data?',
      answer:
        'You will receive an email containing a secure downloadable link to access your enriched data. This ensures safe and convenient delivery of your information.',
    },
    {
      question: 'How long is the download link valid?',
      answer:
        'The download link remains active for 7 days from the time it\'s sent. If you need access after this period, you can request a new link through our support team.',
    },
    {
      question: 'What if I entered the wrong email address?',
      answer:
        'If you provided an incorrect email, simply submit a new request with the correct email address. For security reasons, data links are only sent to the email address provided during the request.',
    },
    {
      question: 'How quickly will I receive my data?',
      answer:
        'You will receive the email with your download link within 24 hours of your request. Most requests are processed much sooner, typically within a few hours.',
    },
    {
      question: 'Can I request updated data later?',
      answer:
        'Yes! You can submit new requests for updated data at any time. Each request will generate a fresh download link sent to your email.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely! We take data security seriously. Your data is encrypted during transfer, download links are secure and time-limited, and we employ robust measures to protect your information throughout the process.',
    },
    {
      question: 'Who can I contact for support?',
      answer:
        'Our support team is available to help with any issues regarding your data delivery. You can reach us through the contact form on our website or reply directly to the email containing your download link.',
    }
  ];

  return (
    <LandingFaqSection
      title="FAQ"
      description="Looking to learn more about our product? Here are some of the most common questions."
      faqItems={faqItems}
      withBackground
    />
  );
}
