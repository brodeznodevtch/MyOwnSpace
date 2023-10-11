/* Wrapper for getserversideprops to verify user */
import API from '@/services/api-services';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

type WithAuthOptions = {
  public?: boolean;
};

// This function is used to verify if the user is logged in or not before accessing a page
export function withAuth<P extends { [key: string]: any }>(
  fn: (
    ctx: GetServerSidePropsContext,
    session: any,
  ) => Promise<GetServerSidePropsResult<P>>,
  options?: WithAuthOptions,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    // Get the request and response objects from context
    const { req, res } = ctx;

    // Get the access token and refresh token from cookies
    const { accessToken } = req.cookies;
    const { refreshToken } = req.cookies;

    // Refresh the session and get the user
    const user = await API.auth.refreshSession(
      accessToken,
      refreshToken,
      req,
      res,
    );

    // If the page is public, continue
    if (options?.public) {
      return await fn(ctx, {
        user,
        tokens: {
          accessToken: accessToken || '',
          refreshToken: refreshToken || '',
        },
      });
    }

    // If the user is not logged in, redirect to login page
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    // If the user is logged in, continue
    return await fn(ctx, {
      user,
      tokens: {
        accessToken: accessToken || '',
        refreshToken: refreshToken || '',
      },
    });
  };
}
