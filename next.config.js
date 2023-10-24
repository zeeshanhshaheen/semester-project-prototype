/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'seafile.zfn.uni-bremen.de',
          port: '', // Leave empty for default ports
          pathname: '/**',
        },
      ],
    },
    // Other Next.js configuration options can go here
  };