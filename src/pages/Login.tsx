import { TextField } from "@material-ui/core";
import Layout from "containers/Layout";
import React from "react";
import { Helmet } from "react-helmet";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login page</title>
      </Helmet>
      <Layout>login
      <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
      </Layout>
    </>
  );
};

export default LoginPage;
