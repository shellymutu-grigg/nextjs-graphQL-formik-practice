import { serverRuntimeConfig } from '@utils/config';
import { request } from '@utils/request';
import { dateFormats } from '@utils/constants';
import { formatDate } from '@utils/date-helpers';

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

export const verifyMember = async (postBody: {
  firstName?: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber?: string;
}) => {
  const { data } = await request('/api/backend/verifymember', {
    method: 'POST',
    body: {
      ...postBody,
      dateOfBirth: formatDate(
        postBody.dateOfBirth,
        dateFormats.DATE_VALUE_FORMAT,
        dateFormats.DATE_DISPLAY_FORMAT,
      ),
      ...(postBody.phoneNumber && {
        phoneNumber: postBody.phoneNumber.replaceAll(' ', ''),
      }),
    },
  });
  return data;
};
