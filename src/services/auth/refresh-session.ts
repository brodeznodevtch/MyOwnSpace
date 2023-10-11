import AuthEndpoints from '@/contracts/enums/endpoints/auth-endpoints';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { IncomingMessage, ServerResponse } from 'http';

// This function can be used only in the server side
const refreshSession = async (
  accessToken: string | undefined,
  refreshToken: string | undefined,
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const options = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    // POST to backend server to get a new access token and refresh token
    const response = await axios.get(AuthEndpoints.VERIFY, options);

    // Set the access token and refresh token cookies to manage the session
    setCookie('accessToken', response.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      req,
      res,
      maxAge: 60 * 60 * 24 * 30, // 1 hour
    });

    setCookie('refreshToken', response.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      req,
      res,
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response.data.user;
  } catch (err) {
    return null;
  }
};

export default refreshSession;
