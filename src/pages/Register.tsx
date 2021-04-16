import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import { Helmet } from 'react-helmet';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import { Redirect } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { validateEmail, validatePassword } from 'utils';

const RegisterPage: React.FC = observer(
  (): JSX.Element => {
    const [isAgree, setIsAgree] = useState(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [invalidFormat, setInvalidFormat] = useState(false);
    const history = useHistory();

    const {
      userStore: { isLogin, signup },
    } = useStores();

    const handleSubmit = async () => {
      const validate = validateEmail(email) && validatePassword(password, confirmPassword);
      setInvalidFormat(validate && isAgree);
      if (!validate || !email || !password) return;
      try {
        await signup(email, password);
        history.push('/signin')
      } catch (e) {
        console.log(e);
      }
    };

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
              <TextField
                required
                id="standard-required"
                label="อีเมล"
                margin="normal"
                onChange={(event) => setEmail(event.target.value)}
                error={!validateEmail(email)}
                helperText={!validateEmail(email) && 'Incorrect format.'}
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
              <TextField
                required
                id="standard-password-input"
                label="ยืนยันรหัสผ่าน"
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={(event) => setConfirmPassword(event.target.value)}
                error={!validatePassword(password, confirmPassword)}
                helperText={
                  !validatePassword(password, confirmPassword) &&
                  'Password not match or less than 5 charactor'
                }
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
                onClick={() => handleSubmit()}
              >
                ยืนยัน
              </Button>
              <br />
              <Link to="signin" className="text-primary mx-auto">
                ฉันมีบัญชีอยู่แล้ว
              </Link>
            </form>
            {invalidFormat && <p></p>}
          </Layout>
        </>
      );
  },
);

export default RegisterPage;
