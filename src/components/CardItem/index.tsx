import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GrGroup, GrClock } from 'react-icons/gr';
import eventType from 'types/eventType';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import CountdownTimer from './Countdown';

type PropType = {
  eventData: eventType;
  isFavorite: boolean;
  isJoined: boolean;
  index: number;
};

const CardItem = observer(
  ({ eventData, isFavorite, isJoined, index }: PropType): JSX.Element => {
    const {
      eventName,
      denominator,
      currentDenominator,
      price,
      originalPrice,
      expDate,
      pictureUrl,
    } = eventData;
    const discount = ((price - originalPrice) / originalPrice) * 100;

    const [itemStatus, setItemStatus] = useState<number>(0);
    const statusDescription = ['ว่าง', 'หมดเวลา', 'เต็ม'];

    const {
      userStore: { isLogin, addFavorite, removeFavorite, joinParty, unjoinParty },
      applicationStore: { setAlertInfo },
    } = useStores();

    const handleOnFavorite = () => {
      if (!isLogin) setAlertInfo({ message: 'ลงชื่อเข้าใช้ก่อนบันทึกรายการโปรด', type: 'warning' });
      if (isFavorite) removeFavorite(index);
      else addFavorite(index);
    };

    const handleOnJoinParty = () => {
      if (!isLogin) setAlertInfo({ message: 'ลงชื่อเข้าใช้ก่อนเข้าร่วมปาร์ตี้', type: 'warning' });
      if (isJoined) unjoinParty(index, currentDenominator);
      else joinParty(index, currentDenominator);
    };

    useEffect(() => {
      if (Date.parse(expDate) > Date.now()) setItemStatus(0);
      else if (currentDenominator < denominator) setItemStatus(1);
      else setItemStatus(2);
    }, [currentDenominator, denominator, expDate]);

    return (
      <>
        <div className="min-w-50 w-1/2 sm:w-1/3 lg:w-1/4 py-2 px-1 md:px-2">
          <div
            className="bg-white bg-opacity-50 focus-within:shadow-xl rounded-lg"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <div
              className="bg-cover bg-center h-56 rounded-lg"
              style={{
                backgroundImage: pictureUrl
                  ? `url(${pictureUrl})`
                  : 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/shopping-bags_1f6cd-fe0f.png)',
              }}
            >
              <div className="flex justify-between ">
                <div className="py-4">
                  <p
                    className="text-base text-white rounded-r-3xl px-4"
                    style={{ backgroundColor: itemStatus === 0 ? '#5BA8A0' : '#EF4444' }}
                  >
                    {statusDescription[itemStatus]}
                  </p>
                </div>
                <div className="text-primary p-4 text-2xl" onClick={() => handleOnFavorite()}>
                  {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
              </div>
            </div>
            <div className="p-2 md:p-4">
              <p
                className="tracking-wide text-lg font-bold break-all truncate-item-name"
                style={{ height: '56px' }}
              >
                {eventName}
              </p>
              <div className="flex justify-between">
                <div>
                  <span className="text-base text-gray-700 font-bold">฿{price}</span>
                  <span className="text-xs text-gray-600">/คน</span>
                  <p className="text-gray-400 line-through text-xs">฿{originalPrice}</p>
                </div>
                <div>
                  <p className="bg-red-500 text-white font-semibold py-1 px-2 rounded-lg text-sm">
                    {discount.toFixed(0)} %
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-2 md:p-4 border-t border-gray-300 text-gray-700">
              <div className="justify-start">
                <div className="flex items-center">
                  <GrGroup className="text-sm" />
                  <p className="px-2">
                    {currentDenominator} / {denominator}
                  </p>
                </div>
                <div className="flex items-center">
                  <GrClock className="text-sm" />
                  <p className="pl-2 text-xs">
                    <CountdownTimer expDate={expDate} />
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  color={!isJoined ? 'primary' : 'secondary'}
                  disabled={itemStatus > 0}
                  onClick={() => handleOnJoinParty()}
                >
                  {!isJoined ? 'JOIN' : 'UNJOIN'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);

export default CardItem;
