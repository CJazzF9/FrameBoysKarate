/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disables server-side image optimization for static export
  },
  output: 'export', // ✅ ensures compatibility with Netlify static deployment
}

module.exports = nextConfig
