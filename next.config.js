/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  // next config
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true, // Enable concurrent loading of features
    concurrentMiddleware: true, // Enable concurrent rendering of middleware
    optimizeFonts: true, // Optimize loading of fonts
    optimizeImages: true, // Optimize loading of images
    optimizeCss: true, // Optimize loading of CSS
  },
});
module.exports = nextConfig;
