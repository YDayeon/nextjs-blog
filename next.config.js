/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "api.api-ninjas.com"],
  },
};

module.exports = nextConfig;
