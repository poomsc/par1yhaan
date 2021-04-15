import Layout from "containers/Layout";
import React from "react";
import { Helmet } from "react-helmet";

const RegisterPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register page</title>
      </Helmet>
      <Layout>Register</Layout>
    </>
  );
};

export default RegisterPage;
