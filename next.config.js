/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d207zvy2rsg5b5.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
