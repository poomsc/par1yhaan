import Layout from "containers/Layout";
import React from "react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not found</title>
      </Helmet>
      <Layout>404</Layout>
    </>
  );
};

export default NotFound;
