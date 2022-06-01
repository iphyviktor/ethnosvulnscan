/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'https://petscan.herokuapp.com'
  },
}

module.exports = nextConfig
