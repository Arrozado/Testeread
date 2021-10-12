/** @type {import('next').NextConfig} */
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  ...withImages({
    esModule: true,
  }),
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
}