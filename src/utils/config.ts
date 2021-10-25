// Need to prevent linting process from replacing the below line as NextJS build looks for process.env.* .
// eslint-disable-next-line prefer-destructuring
const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;

export interface ServerRuntimeConfig extends PublicRuntimeConfig {
  ALLOW_MANUAL_CID?: boolean;
  BACKEND_API_KEY?: string;
  BACKEND_BASE_URL?: string;
  AUTH0_TENANT_DOMAIN?: string;
  AUTH0_SECRET?: string;
  AUTH0_BASE_URL?: string;
  AUTH0_CLIENT_ID?: string;
  AUTH0_CLIENT_SECRET?: string;
  AUTH0_ISSUER_BASE_URL?: string;
  NZPOST_OAUTH_CLIENT_ID?: string;
  NZPOST_OAUTH_CLIENT_SECRET?: string;
}

export interface PublicRuntimeConfig {
  BUILD_TIMESTAMP?: string;
  AAWEB_ENVIRONMENT?: string;
  GRAPHQL_URI?: string;
  APOLLO_CLIENT_FETCH_POLICY?: string;
  CONTENTFUL_ENVIRONMENT?: string;
  CONTENTFUL_BASE_URL?: string;
  CONTENTFUL_SPACE_ID?: string;
  CONTENTFUL_ACCESS_TOKEN?: string;
  CONTENTFUL_PREVIEW_ACCESS_TOKEN?: string;
  NEXT_PUBLIC_DATADOG_CONFIG?: string;
  NEXT_PUBLIC_BUILD_ID?: string;
  NEXT_PUBLIC_SITE_STAGE?: string;
  NZPOST_ADDRESS_URL?: string;
}

export function publicRuntimeConfig(): PublicRuntimeConfig {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    if (typeof (window as any).publicRuntimeConfig === 'object') {
      return (window as any).publicRuntimeConfig;
    }
    return {};
  }

  // We need to force next.js not to replace these values. So we destructure them.
  const {
    AAWEB_ENVIRONMENT,
    NEXT_PUBLIC_GRAPHQL_URI,
    NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    NEXT_PUBLIC_CONTENTFUL_BASE_URL,
    NEXT_PUBLIC_APOLLO_CLIENT_FETCH_POLICY,
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PREVIEW_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_DATADOG_CONFIG,
    NEXT_PUBLIC_BUILD_ID,
    NEXT_PUBLIC_SITE_STAGE,
  } = process.env;

  return {
    BUILD_TIMESTAMP,
    AAWEB_ENVIRONMENT,
    GRAPHQL_URI: NEXT_PUBLIC_GRAPHQL_URI,
    APOLLO_CLIENT_FETCH_POLICY:
      NEXT_PUBLIC_APOLLO_CLIENT_FETCH_POLICY || 'no-cache',
    CONTENTFUL_ENVIRONMENT: NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_BASE_URL: NEXT_PUBLIC_CONTENTFUL_BASE_URL,
    CONTENTFUL_SPACE_ID: NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: NEXT_PREVIEW_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_DATADOG_CONFIG,
    NEXT_PUBLIC_BUILD_ID,
    NEXT_PUBLIC_SITE_STAGE,
  };
}

export function serverRuntimeConfig(): ServerRuntimeConfig {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    return {};
  }

  // We need to force next.js not to replace these values. So we destructure them.
  const {
    AAWEB_ENVIRONMENT,
    BOOMI_API_KEY,
    BOOMI_BASE_URL,
    AUTH0_TENANT_DOMAIN,
    AUTH0_SECRET,
    AUTH0_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER_BASE_URL,
    NZPOST_OAUTH_CLIENT_ID,
    NZPOST_OAUTH_CLIENT_SECRET,
  } = process.env;
  const publicVars = publicRuntimeConfig();

  return {
    ...publicVars,
    ALLOW_MANUAL_CID:
      AAWEB_ENVIRONMENT === 'test' || AAWEB_ENVIRONMENT === 'pre-production',
    BACKEND_API_KEY: BOOMI_API_KEY,
    BACKEND_BASE_URL: BOOMI_BASE_URL,
    AUTH0_TENANT_DOMAIN,
    AUTH0_SECRET,
    AUTH0_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER_BASE_URL,
    NZPOST_OAUTH_CLIENT_ID,
    NZPOST_OAUTH_CLIENT_SECRET,
  };
}
