import { Button, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import React from 'react';
import { Helmet } from 'react-helmet';

const CreateParty: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create party</title>
      </Helmet>
      <Layout>
        <form noValidate autoComplete="off" className="flex flex-col max-w-md mx-auto px-10">
          <TextField required id="standard-required" label="ชื่อปาร์ตี้" margin="normal" />
          <TextField
            required
            type="number"
            id="standard-required"
            label="จำนวนคน"
            margin="normal"
          />

          <TextField
            id="date"
            label="ภายในวันเวลา"
            type="datetime-local"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <Button variant="contained" color="primary" style={{ minWidth: '180px', margin: 'auto' }}>
            สร้างปาร์ตี้
          </Button>
          <br />
        </form>
      </Layout>
    </>
  );
};

export default CreateParty;
