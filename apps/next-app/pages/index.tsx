import { ReactElement } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { NextPageWithLayout } from './_app';
import { PrismaClient } from '@malloc72p/prepared-prisma';

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;

export async function getServerSideProps() {
  const prismaClient = new PrismaClient();
  const count = await prismaClient.user.count();
  console.log(count);

  return {
    props: {},
  };
}
