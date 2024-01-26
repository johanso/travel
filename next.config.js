/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', "res.cloudinary.com"],
    unoptimized: true
  },
}

module.exports = nextConfig
