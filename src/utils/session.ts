import { IncomingMessage, ServerResponse } from 'http';
import Cookies from 'cookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { serverRuntimeConfig } from '@utils/config';
import jwtDecode from 'jwt-decode';
import { getAuth0 } from '@utils/getAuth0';

export interface AAHeaders {
  'x-api-key'?: string;
  authorization?: string;
}

export interface MyAA_AccessTokenObject {
  'https://aa/roles'?: Array<{ role: 'aa-mb'; Membership?: string }>;
}

export function getMembershipFromAccessToken(accessToken: null | string) {
  let retVal = null;

  try {
    const claims = jwtDecode<MyAA_AccessTokenObject>(accessToken || '');
    if (claims['https://aa/roles']) {
      const role = claims['https://aa/roles'].find(
        (rule) =>
          rule.role === 'aa-mb' && 'Membership' in rule && rule.Membership,
      );

      // check that it also has only digits
      if (role && role.Membership && /^\d+$/.test(role.Membership)) {
        retVal = role.Membership.replace(/\s/g, '');
      }
    }
  } catch (error) {
    retVal = null;
  }

  return retVal;
}

export async function getSessionHeaders(
  req: IncomingMessage | NextApiRequest,
  res: ServerResponse | NextApiResponse,
): Promise<AAHeaders> {
  let accessToken = null;

  try {
    const session = getAuth0().getSession(req, res);
    if (session) {
      accessToken = (await getAuth0().getAccessToken(req, res)).accessToken;
    }
  } catch (err) {
    console.error('Error calling getAccessToken()', `${err}`);
    accessToken = null;
  }

  return {
    ...(serverRuntimeConfig().BACKEND_API_KEY && {
      'x-api-key': String(serverRuntimeConfig().BACKEND_API_KEY),
    }),
    ...(accessToken && {
      authorization: `Bearer ${accessToken}`,
    }),
  };
}

export async function getSessionCid(
  req: IncomingMessage | NextApiRequest,
  res: ServerResponse | NextApiResponse,
): Promise<null | string> {
  let cid: null | string = null;
  const accessToken = getAuth0().getSession(req, res)?.accessToken;

  if (accessToken) {
    cid = getMembershipFromAccessToken(accessToken);
  }

  // this handles debugging of CID and allows us to set it by the URL to save it as a cookie
  if (!cid && serverRuntimeConfig().ALLOW_MANUAL_CID) {
    if (!cid && req.url) {
      const matchesInQuery = req.url.match(/cid=([^&]*)/);
      cid = matchesInQuery ? matchesInQuery[1] : null;

      if (cid && req.url.match(/persist=1/)) {
        const cookies = new Cookies(req, res);
        cookies.set('cid', cid, { httpOnly: true });
      }
    }

    if (!cid) {
      const cookies = new Cookies(req, res);
      cid = cookies.get('cid') || null;
    }
  }

  // if we have a membership #, we convert to CID
  if (cid && cid.length === 16) {
    cid = cid.slice(8, -1).replace(/^0+/, '');
  }

  return cid;
}
