/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Hostinger
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
