/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  unstable_runtimeJS: false,
  images: {
    domains: ['links.papareact.com'],
  },
  runtime: 'nodejs',
};

module.exports = nextConfig;
