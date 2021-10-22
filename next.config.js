/* eslint-disable global-require */
const { withPlugins, optional } = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

// Build Content Service Policy string from data parameters supplied
function buildCSP(stringData) {
  let cspString = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(stringData)) {
    cspString += `${key} ${value.join(' ')}`;
  }
  return cspString;
}

/**
 * Provide string data to function to build Content Service Policy.
 *
 * TODO: remove all references of `http://* & https://*` from `buildCSP`
 * once the nonce for gtm is enabled.
 */

const csp = buildCSP({
  'default-src': ["'self'", 'http://*', 'https://*;'],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://www.googletagmanager.com/',
    `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`,
    'http://*',
    'https://*;',
  ],
  'style-src': ["'self'", "'unsafe-inline';"],
  'img-src': [
    "'self'",
    'data:',
    // process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    'https://www.google.com/',
    'https://www.google.co.nz/',
    'http://*',
    'https://*;',
  ],
  'object-src': ["'self'", 'data:;'],
  'connect-src': [
    "'self'",
    // process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    'https://stats.g.doubleclick.net/',
    // process.env.NEXT_PUBLIC_GRAPHQL_URI,
    // process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL,
    'http://*',
    'https://*;',
  ],
});

const nextConfig = {
  distDir: 'build',
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.test\.(j|t)sx?$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name].[hash][ext]',
        },
      },
    );
    return config;
  },
  target: 'serverless',
  pageExtensions: ['page.tsx', 'page.ts'],
  excludeFile: (str) => /\*.test\.(j|t)sx?/.test(str),
  images: {
    // Contentful serves images from the below domain.
    domains: ['images.ctfassets.net'],
    disableStaticImages: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/my-membership',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/my-membership',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
      {
        source: '/((?!path).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
    ];
  },
  env: {
    BUILD_TIMESTAMP: String(Date.now()),
  },
};

module.exports = withPlugins(
  [
    [
      optional(() => require('@next/bundle-analyzer')),
      {
        enabled: process.env.ANALYZE === 'true',
      },
      [PHASE_PRODUCTION_BUILD],
    ],
    [
      optional(() => require('next-pwa')),
      {
        pwa: {
          // Generated files to put under `public` folder, so that they are
          // uploaded to S3 and are available under the domain directly.
          // PWA files are required to be present under the domain.
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
        },
      },
      [PHASE_PRODUCTION_BUILD],
    ],
  ],
  nextConfig,
);
