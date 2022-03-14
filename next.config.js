const { withContentlayer } = require('next-contentlayer');
const isProd = process.env.NODE_ENV === "production";

module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  assetPrefix: isProd ? "/andr.is-a.dev" : "",
  basePath: isProd ? "/andr.is-a.dev" : "",
  images: {
    domains: [
      'i.scdn.co' // Spotify Album Art
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
});