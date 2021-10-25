// https://github.com/auth0/nextjs-auth0/blob/main/V1_MIGRATION_GUIDE.md
import { initAuth0 } from '@auth0/nextjs-auth0';
import { SignInWithAuth0 } from '@auth0/nextjs-auth0/dist/instance';
import { serverRuntimeConfig } from '@utils/config';

let instance: SignInWithAuth0;

export function getAuth0() {
  if (instance) return instance;

  instance = initAuth0({
    // secret must match the AUTH0_SECRET env var, or else the app won't be able to decrypt auth JWTs.
    // https://auth0.github.io/nextjs-auth0/interfaces/config.baseconfig.html#secret
    secret: serverRuntimeConfig().AUTH0_SECRET,
    // The baseURL is the default URL that users get redirected to after logging in, unless
    // explicitly specified otherwise via returnTo parameter in withPageAuthRequired call
    baseURL: serverRuntimeConfig().AUTH0_BASE_URL,
    clientID: serverRuntimeConfig().AUTH0_CLIENT_ID,
    clientSecret: serverRuntimeConfig().AUTH0_CLIENT_SECRET,
    issuerBaseURL: serverRuntimeConfig().AUTH0_ISSUER_BASE_URL,

    clockTolerance: 60,
    httpTimeout: 5000,
    routes: {
      callback: '/api/auth/callback',
      postLogoutRedirect: '/',
    },
    authorizationParams: {
      scope: 'openid profile email offline_access',
    },
    session: {
      rollingDuration: 60 * 60 * 24,
    },
  });

  return instance;
}
