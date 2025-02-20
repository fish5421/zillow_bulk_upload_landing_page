// import { Roboto_Serif, Rubik } from 'next/font/google';
// import './globals.css';

// const baseFont = Roboto_Serif({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-base'
// });

// const displayFont = Rubik({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-display'
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${baseFont.variable} ${displayFont.variable}`}>
//       <body className="antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }


import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Analytics } from '@/components/tracking';
import { CookieBanner } from '@/components/shared/CookieBanner';
import './globals.css';

const baseFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-base',
  // weight: ['400', '500', '700']
});

const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: '400'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${baseFont.variable} ${displayFont.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThemeToggle />
          {children}
          <Analytics />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
