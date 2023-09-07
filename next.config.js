/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8090',
      },
    ],
  },
  env: { API_URL: 'http://127.0.0.1:8090'}
}

module.exports = nextConfig
