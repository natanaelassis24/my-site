/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    domains: ["firebasestorage.googleapis.com"], // <- ADICIONE ESSE DOMÍNIO
  },
  reactStrictMode: true,
  experimental: {
    turbo: false,
  },
});

module.exports = nextConfig;
