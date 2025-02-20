import clsx from 'clsx';
import '@/styles/animations.css';

/**
 * Highlights important features, milestones or testimonials of your product.
 *
 * Use this to highlight key features or social proof. This is usually placed at the top of the page, but you can also use it in between sections or below your primary CTA.
 */
export const LandingSocialProofBand = ({
  className,
  invert,
  children,
}: {
  className?: string;
  invert?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'w-full py-2 overflow-hidden',
        'text-sm md:text-base', // Smaller text on mobile
        invert
          ? 'bg-slate-700 dark:bg-slate-300'
          : 'bg-slate-200 dark:bg-slate-900',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto relative">
        <div
          className={clsx(
            'animate-scroll whitespace-nowrap inline-flex items-center',
            'gap-4 md:gap-8 px-4 md:px-8', // Smaller gaps and padding on mobile
            invert
              ? 'text-gray-300 dark:text-gray-600'
              : 'text-gray-700 dark:text-gray-200',
          )}
        >
          {children}
          {children} {/* Duplicate children for seamless loop */}
        </div>
      </div>
    </div>
  );
};
