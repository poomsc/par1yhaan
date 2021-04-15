import Layout from "containers/Layout";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <Layout>Home</Layout>
    </>
  );
};

export default HomePage;
