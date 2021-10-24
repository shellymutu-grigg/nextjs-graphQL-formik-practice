import fetch from 'cross-fetch';

const getResponse = <ResponseType = any>({
  response,
  data,
}: {
  response: Response;
  data: ResponseType;
}) => {
  const returnValue = { response, data };

  if (!response.ok) {
    return Promise.reject(returnValue);
  }

  return returnValue;
};

export const request = async <ResponseType = any>(
  url: string,
  requestObj: Omit<RequestInit, 'body'> & { body?: any },
) => {
  if (requestObj && typeof requestObj.body === 'object') {
    requestObj.body = JSON.stringify(requestObj.body);
  }

  const headers = {
    'Content-Type': 'application/json',
    ...requestObj.headers,
  };

  const response = await fetch(url, {
    ...requestObj,
    headers: {
      'Content-Type': 'application/json',
      ...requestObj.headers,
    },
  });

  // HTTP 204 means no content
  if (response.status === 204) {
    return { response, data: null };
  }

  const data =
    headers['Content-Type'] === 'application/json'
      ? ((await response.json()) as ResponseType)
      : await response.text();

  return getResponse({ response, data });
};

const requestWithoutCustomHeader = async <ResponseType = any>(
  url: string,
  requestObj: RequestInit,
) => {
  const response = await fetch(url, requestObj);
  const data = (await response.json()) as ResponseType;
  return getResponse({ response, data });
};

export const requestGet = async (url: string, requestObj: RequestInit) =>
  requestWithoutCustomHeader(url, requestObj);

export const requestFormUrlEncoded = async (
  url: string,
  requestObj: RequestInit,
) => requestWithoutCustomHeader(url, requestObj);
