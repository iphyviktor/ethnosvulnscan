/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'https://ethnosscan.herokuapp.com'
  },
}

module.exports = nextConfig
