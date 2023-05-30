/** @type {import('next').NextConfig} */
const withYAML = require('next-yaml');
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withYAML(nextConfig);
