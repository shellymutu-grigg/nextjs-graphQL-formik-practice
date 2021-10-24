import { request } from '@utils/request';

export const resendEmail = () => {
  return request('/api/auth0/resend-email/', {
    method: 'POST',
  });
};
