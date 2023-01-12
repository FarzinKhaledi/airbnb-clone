/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unstable_runtimeJS: false,
  images: {
    domains: ['links.papareact.com'],
  },
};

module.exports = nextConfig;
