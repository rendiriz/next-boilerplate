import type { NextPage } from 'next';

import Layout from '@/layouts/default/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-blue-500">Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
