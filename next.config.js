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
          pathname: '/seafhttp/files/4d4eea6b-489f-4cca-bf2f-2cd1e6566a38/P1040557.JPG',
        },
      ],
    },
    // Other Next.js configuration options can go here
  };