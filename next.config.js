/** @type {import('next').NextConfig} */
const withYAML = require('next-yaml');

const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { allowFutureImage: true } },
};

module.exports = withYAML(nextConfig);
