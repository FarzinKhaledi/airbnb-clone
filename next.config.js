/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  unstable_runtimeJS: false,
  images: {
    domains: ['links.papareact.com'],
  },
  runtime: 'nodejs',
  env: {
    YOUR_MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiZmFyemluLWtoYWxlZGkiLCJhIjoiY2xjeGsyem1jMjBxbjNucDBwdDZpMGJuNCJ9.oYADwzN6ramPdoPQw95KEg',
  },
};

module.exports = nextConfig;


