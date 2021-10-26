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
}

export interface PublicRuntimeConfig {
  BUILD_TIMESTAMP?: string;
  ENVIRONMENT?: string;
  NEXT_PUBLIC_BUILD_ID?: string;
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
  const { ENVIRONMENT, NEXT_PUBLIC_BUILD_ID } = process.env;

  return {
    BUILD_TIMESTAMP,
    ENVIRONMENT,
    NEXT_PUBLIC_BUILD_ID,
  };
}

export function serverRuntimeConfig(): ServerRuntimeConfig {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    return {};
  }

  // We need to force next.js not to replace these values. So we destructure them.
  const {
    ENVIRONMENT,
    AUTH0_TENANT_DOMAIN,
    AUTH0_SECRET,
    AUTH0_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER_BASE_URL,
  } = process.env;
  const publicVars = publicRuntimeConfig();

  return {
    ...publicVars,
    ALLOW_MANUAL_CID:
      ENVIRONMENT === 'test' || ENVIRONMENT === 'pre-production',
    AUTH0_TENANT_DOMAIN,
    AUTH0_SECRET,
    AUTH0_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER_BASE_URL,
  };
}
