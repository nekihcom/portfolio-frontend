import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mchkn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-backend.ddev.site',
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },

};

export default nextConfig;
