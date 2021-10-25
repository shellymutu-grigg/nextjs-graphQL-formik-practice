import { getAuth0 } from '@utils/getAuth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { defaults } from '@utils/constants';
import { getAuth0Token } from '@services/client/authentication.client';
import { verifyEmail } from '@services/client/authorization.client';

export default getAuth0().withApiAuthRequired(async function ProtectedRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const user_id = getAuth0().getSession(req, res)?.user.sub;
    const auth0Token = await getAuth0Token();

    const { access_token } = auth0Token.data;
    const response = await verifyEmail({ user_id, access_token });
    res.status(defaults.SUCCESS_STATUSCODE).json(response);
  } catch (error) {
    console.error(error);
    res.status(defaults.FAILURE_STATUSCODE).end();
  }
});
