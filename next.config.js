const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', "res.cloudinary.com"],
    unoptimized: true
  },
}

module.exports = withContentlayer(nextConfig);
