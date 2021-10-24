/**
 * @type {import('next').NextConfig}
 */

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
 * TODO: LG-893: remove all references of `http://* & https://*` from `buildCSP`
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
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    'https://www.google.com/',
    'https://www.google.co.nz/',
    'http://*',
    'https://*;',
  ],
  'object-src': ["'self'", 'data:;'],
  'connect-src': [
    "'self'",
    '*.aa.co.nz',
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    'https://stats.g.doubleclick.net/',
    process.env.NEXT_PUBLIC_GRAPHQL_URI,
    process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL,
    'http://*',
    'https://*;',
  ],
});

const nextConfig = {
  basePath: '',
  // pageExtensions: ['page.tsx', 'page.ts', ],
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

module.exports = nextConfig;
