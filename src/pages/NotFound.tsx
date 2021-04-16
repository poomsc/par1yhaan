import Layout from 'containers/Layout';
import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not found</title>
      </Helmet>
      <Layout>
        <p className="w-32 mx-auto font-semibold">404 Not found</p>
      </Layout>
    </>
  );
};

export default NotFound;
