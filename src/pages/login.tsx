import { withAuth } from '@/middlewares/with-auth';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div className='grid place-items-center min-h-full'>
      <Link href='/'>go to home</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(
  async (context, session) => {
    if (session.user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
  { public: true },
);

export default Login;
