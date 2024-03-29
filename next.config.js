// next.config.js
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["espresso.liara.run"],
  },
};

module.exports = nextConfig;
