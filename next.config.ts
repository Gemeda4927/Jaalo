import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Enable standalone output for better production deployment
  output: 'standalone',
  
  // Configure image optimization
  images: {
    domains: [], // Add your image domains here
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features
  experimental: {
    // Optimize CSS in production
    optimizeCss: false,
    // Improve performance
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Turbopack configuration - required when using --turbopack flag
  turbopack: {
    // Empty config to silence the error
  },
  
  // Headers for CORS and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      // Cache static assets
      {
        source: '/:all*(svg|jpg|png|webp|avif|ico|css|js)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects configuration
  async redirects() {
    return [];
  },
  
  // Enable gzip compression
  compress: true,
  
  // Configure build output
  distDir: '.next',
  
  // Generate ETags for better caching
  generateEtags: true,
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Set custom build ID
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'build-' + Date.now();
  },
};

export default nextConfig;