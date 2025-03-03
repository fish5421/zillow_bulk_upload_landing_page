/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://zillow-bulk-upload-landing-page.vercel.app' : '',
  experimental: {
    optimizePackageImports: ['embla-carousel-react']
  },
  env: {
    NEXT_PUBLIC_BYPASS_COOKIE_CONSENT: process.env.NEXT_PUBLIC_BYPASS_COOKIE_CONSENT || 'false'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/landing',
        destination: '/',
      },
      {
        source: '/landing/:path*',
        destination: '/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Optimize chunk loading
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;