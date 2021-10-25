import { serverRuntimeConfig } from '@utils/config';
import { request } from '@utils/request';

export const verifyEmail = ({
  user_id,
  access_token,
}: {
  user_id: string;
  access_token: string;
}) => {
  return request(
    `${
      serverRuntimeConfig().AUTH0_ISSUER_BASE_URL
    }/api/v2/jobs/verification-email`,
    {
      method: 'POST',
      body: {
        user_id,
        client_id: serverRuntimeConfig().AUTH0_CLIENT_ID,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
};
