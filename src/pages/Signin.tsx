import { Button, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import React from 'react';
import { Helmet } from 'react-helmet';
import logo from 'assets/logo/goose.png';
import { Redirect } from 'react-router';
import { useStores } from 'hooks/useStore';

const SigninPage: React.FC = (): JSX.Element => {
  const {
    userStore: { isLogin },
  } = useStores();
  if (isLogin) return <Redirect to="/home" />;
  else
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login page</title>
        </Helmet>
        <Layout>
          <img src={logo} alt="logo" className="w-24 mx-auto my-16" />
          <form noValidate autoComplete="off" className="flex flex-col max-w-md mx-auto px-10">
            <TextField required id="standard-required" label="อีเมล" margin="normal" />
            <TextField
              required
              id="standard-password-input"
              label="รหัสผ่าน"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{ minWidth: '180px', margin: 'auto' }}
            >
              เข้าสู่ระบบ
            </Button>
            <br />
            <Button
              variant="outlined"
              color="primary"
              style={{ minWidth: '180px', margin: 'auto' }}
            >
              สร้างบรรชีผู้ใช้
            </Button>
            <br />
          </form>
        </Layout>
      </>
    );
};

export default SigninPage;
