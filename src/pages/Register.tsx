import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import { Helmet } from 'react-helmet';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import { Redirect } from 'react-router';

const RegisterPage: React.FC = observer(
  (): JSX.Element => {
    const [isAgree, setIsAgree] = useState(false);
    const {
      userStore: { isLogin },
    } = useStores();
    if (isLogin) return <Redirect to="/home" />;
    else
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Register page</title>
          </Helmet>
          <Layout>
            <p className="w-24 mx-auto mt-24 font-semibold">สร้างบัญชีผู้ใช้</p>
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
              <TextField
                required
                id="standard-password-input"
                label="ยืนยันรหัสผ่าน"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <FormControlLabel
                style={{ margin: '20px 0 0 0' }}
                control={
                  <Checkbox
                    checked={isAgree}
                    onChange={() => setIsAgree(!isAgree)}
                    name="agreement"
                    color="primary"
                  />
                }
                label="ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน"
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
  },
);

export default RegisterPage;
