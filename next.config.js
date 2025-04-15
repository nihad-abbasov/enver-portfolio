/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['enver-nagiyev.vercel.app'],
  },
  // Enable static exports
  output: 'export'
}

module.exports = nextConfig 