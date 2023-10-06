import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>Dashboard</div>
    </main>
  );
};

export default Home;
