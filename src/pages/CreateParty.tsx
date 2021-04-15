import Layout from "containers/Layout";
import React from "react";
import { Helmet } from "react-helmet";

const CreateParty: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create party</title>
      </Helmet>
      <Layout>Create party</Layout>
    </>
  );
};

export default CreateParty;
