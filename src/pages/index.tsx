import { withAuth } from '@/middlewares/with-auth';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        Dashboard
        <br /> <Link href='/login'>go to login</Link>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(
  async (context, session) => {
    return {
      props: {},
    };
  },
);

export default Home;
