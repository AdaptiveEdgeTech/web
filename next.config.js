/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {hostname: 'cdn.sanity.io'},
      {hostname: 'tailwindui.com'},
    ]
  }
}

module.exports = nextConfig
