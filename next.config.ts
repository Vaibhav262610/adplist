import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','upload.wikimedia.org' ,'randomuser.me' ],
  },
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
