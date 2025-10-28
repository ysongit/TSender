import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  images: {
    // Optimized images only work on the server
    unoptimized: true
  },
  basePath: '',
  assetPrefix: './',
  trailingSlash: true
};

export default nextConfig;
