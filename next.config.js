/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ["en", "np"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
