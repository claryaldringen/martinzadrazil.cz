import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/wolf3d',
        destination: 'https://webstain3d.vercel.app/wolf3d/',
      },
      {
        source: '/wolf3d/:path*',
        destination: 'https://webstain3d.vercel.app/wolf3d/:path*',
      },
    ];
  },
};

export default nextConfig;
