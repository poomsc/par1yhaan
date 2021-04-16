import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import { Helmet } from 'react-helmet';
import logo from 'assets/logo/goose.png';
import { Redirect } from 'react-router';
import { useStores } from 'hooks/useStore';
import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { validateEmail } from 'utils';

const SigninPage: React.FC = observer(
  (): JSX.Element => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [invalidEmail, setInvalidEmail] = useState(false);
    const {
      userStore: { isLogin, login },
      applicationStore: { setAlertInfo },
    } = useStores();
    const history = useHistory();

    const handleSubmit = async () => {
      setInvalidEmail(!validateEmail(email));

      if (invalidEmail) return;
      if (!email || !password) return;
      try {
        await login(email, password);
        history.push('/home');
      } catch (e) {
        console.log(e);
        setAlertInfo({ message: e.message, type: 'danger' });
      }
    };

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
              <TextField
                required
                id="standard-required"
                label="อีเมล"
                margin="normal"
                onChange={(event) => setEmail(event.target.value)}
                error={invalidEmail}
                helperText={invalidEmail && 'อีเมลไม่ถูกต้อง'}
              />
              <TextField
                required
                id="standard-password-input"
                label="รหัสผ่าน"
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ minWidth: '180px', margin: 'auto' }}
                onClick={() => handleSubmit()}
              >
                เข้าสู่ระบบ
              </Button>
              <br />
              <Link to="/register" style={{ minWidth: '180px', margin: 'auto' }}>
                <Button variant="outlined" color="primary" style={{ minWidth: '180px' }}>
                  สร้างบรรชีผู้ใช้
                </Button>
              </Link>
              <br />
            </form>
          </Layout>
        </>
      );
  },
);

export default SigninPage;
