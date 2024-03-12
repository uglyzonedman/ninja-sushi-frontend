/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "194.169.160.152:3007/",
      },
      {
        protocol: "http",
        hostname: "194.169.160.152:8081",
      },
      {
        protocol: "http",
        hostname: "194.169.160.152",
      },
      {
        protocol: "http",
        hostname: "194.169.160.152:8081/api-v2/",
      },
    ],
  },
};

export default nextConfig;
