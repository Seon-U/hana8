import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/post',
  reactCompiler: true,
  cacheComponents: true,
  experimental: { typedEnv: true },
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'picsum.photos',
        // port: '',
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
