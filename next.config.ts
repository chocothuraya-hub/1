import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // Use default output for Netlify (supports API routes)
  // output: 'export', // Removed for Netlify deployment
  
  // Keep image optimization disabled for compatibility
  images: {
    unoptimized: true,
  },
  
  // Enable compression for better performance
  compress: true,

  
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  
  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
// Orchids restart: 1761228681438
