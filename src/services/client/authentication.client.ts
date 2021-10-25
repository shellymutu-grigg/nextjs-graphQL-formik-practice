import { request } from '@utils/request';
import { serverRuntimeConfig } from '@utils/config';

export const resendEmail = () => {
  return request('/api/auth0/resend-email/', {
    method: 'POST',
  });
};

export const getAuth0Token = () => {
  return request(`${serverRuntimeConfig().AUTH0_ISSUER_BASE_URL}/oauth/token`, {
    method: 'POST',
    body: {
      client_id: serverRuntimeConfig().AUTH0_CLIENT_ID,
      client_secret: serverRuntimeConfig().AUTH0_CLIENT_SECRET,
      audience: `https://${serverRuntimeConfig().AUTH0_TENANT_DOMAIN}/api/v2/`,
      grant_type: 'client_credentials',
    },
  });
};
