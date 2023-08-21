/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    API: "https://basic-blog.teamrabbil.com/api/",
  },
  images: {
    domains: ["basic-blog.teamrabbil.com", "roar.media"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
