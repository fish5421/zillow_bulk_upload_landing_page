import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        // if you only want to allow certain paths, you can specify here:
        // pathname: '/id/**'
      },
    ],
  },
};

export default nextConfig;