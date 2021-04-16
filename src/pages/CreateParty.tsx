import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Layout from 'containers/Layout';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';

const CreateParty: React.FC = observer(
  (): JSX.Element => {
    const {
      userStore: { userEmail, createOwnParty },
    } = useStores();
    const [eventName, setEventName] = useState<string>();
    const [denominator, setDenominator] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [originalPrice, setOriginalPrice] = useState<number>();
    const [expDate, setExpDate] = useState<string>();
    const [pictureUrl, setPictureUrl] = useState<string>();
    const history = useHistory();
    
    const handleSubmit = async () => {
      const data = {
        eventName,
        denominator,
        currentDenominator: 0,
        price,
        originalPrice,
        expDate,
        captainEmail: userEmail,
        pictureUrl,
      };
      try {
        await createOwnParty(data)
        history.push('/home');
      } catch (e) {
        console.log(e);
      }
    };
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Create party</title>
        </Helmet>
        <Layout>
          <form noValidate autoComplete="off" className="flex flex-col max-w-md mx-auto px-10">
            <TextField
              required
              id="standard-required"
              label="ชื่อปาร์ตี้"
              margin="normal"
              onChange={(event) => setEventName(event.target.value)}
            />
            <TextField
              id="standard-required"
              label="ลิงค์รูปภาพ"
              margin="normal"
              onChange={(event) => setPictureUrl(event.target.value)}
            />

            <TextField
              required
              type="number"
              id="standard-required"
              label="จำนวนคน"
              margin="normal"
              onChange={(event) => setDenominator(parseInt(event.target.value))}
            />
            <TextField
              required
              type="number"
              id="standard-required"
              label="ราคาต่อคน"
              margin="normal"
              onChange={(event) => setPrice(parseInt(event.target.value))}
            />
            <TextField
              required
              type="number"
              id="standard-required"
              label="ราคาถ้าซื้อคนเดียว"
              margin="normal"
              onChange={(event) => setOriginalPrice(parseInt(event.target.value))}
            />
            <TextField
              id="date"
              label="ภายในวันเวลา"
              type="datetime-local"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => setExpDate(event.target.value)}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{ minWidth: '180px', margin: 'auto' }}
              onClick={() => handleSubmit()}
            >
              สร้างปาร์ตี้
            </Button>
            <br />
          </form>
        </Layout>
      </>
    );
  },
);

export default CreateParty;
