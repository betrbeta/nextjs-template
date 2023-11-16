/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: true,
  scope: "/app",
});

module.exports = withPWA({
  reactStrictMode: true,
});
