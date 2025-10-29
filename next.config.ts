/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    domains: [],
  },
  reactStrictMode: true,
  // Desabilita Turbopack
  experimental: {
    turbo: false,
  },
});

module.exports = nextConfig;
