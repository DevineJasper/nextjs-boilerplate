import Head from 'next/head';
import Layout from '../components/Layout';
import ResponsiveWrapper from '../components/Layout/_partials/ResponsiveWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ResponsiveWrapper>
          <p>Dit is de content</p>
        </ResponsiveWrapper>
      </Layout>
    </>
  );
}
