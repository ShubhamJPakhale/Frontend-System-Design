/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "i.ytimg.com"], // whitelist domains for next/image
  },
};

export default nextConfig;
