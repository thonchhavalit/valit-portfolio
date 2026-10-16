/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable image optimization
  images: {
    domains: ['valit-portfolio.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/articles/:path*',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/projects/clay-gatsby-theme',
        destination: '/projects',
        permanent: true,
      },
    ];
  },

  // SEO enhancements
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
