/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
