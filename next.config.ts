import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','upload.wikimedia.org' ,'randomuser.me','fiverr-res.cloudinary.com'],
  },
  reactStrictMode: true,
};

export default nextConfig;
