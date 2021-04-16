import React from 'react';
import { Button } from '@material-ui/core';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GrGroup, GrClock } from 'react-icons/gr';

type PropType = {
  eventData: {
    event: string;
    denominator: number;
    currentDenominator: number;
    price: number;
    originalPrice: number;
    shopInfo: {
      shopName: string;
      productNumber: number;
      follower: number;
    };
    shippingCost: number;
    expDate: string;
  };
  isFavorite: boolean;
  isJoined: boolean;
};

const CardItem = ({ eventData, isFavorite, isJoined }: PropType): JSX.Element => {
  const {
    event,
    denominator,
    currentDenominator,
    price,
    originalPrice,
    shopInfo,
    shippingCost,
    expDate,
  } = eventData;
  const discount = ((price - originalPrice) / originalPrice) * 100;

  return (
    <>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 py-2 px-1 md:px-2">
        <div className="bg-white shadow-xl rounded-lg">
          <div
            className="bg-cover bg-center h-56 rounded-lg"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',
            }}
          >
            <div className="flex justify-between ">
              <div className="py-4">
                {currentDenominator < denominator ? (
                  <p
                    className="text-base text-white rounded-r-3xl px-4"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    ว่าง
                  </p>
                ) : (
                  <p
                    className="text-base text-white rounded-r-3xl px-4"
                    style={{ backgroundColor: '#EF4444' }}
                  >
                    เต็ม
                  </p>
                )}
              </div>
              <div className="text-primary p-4 text-2xl">
                {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
              </div>
            </div>
          </div>
          <div className="p-2 md:p-4">
            <p
              className="tracking-wide text-lg font-bold break-all truncate-item-name"
              style={{ height: '56px' }}
            >
              {event}
            </p>
            <div className="flex justify-between">
              <div>
                <span className="text-base text-primary font-bold">฿{price}</span>
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
          <div className="flex justify-between p-4 border-t border-gray-300 text-gray-700">
            <div className="justify-start">
              <div className="flex items-center">
                <GrGroup className="text-sm" />
                <p className="px-2">
                  {currentDenominator} / {denominator}
                </p>
              </div>
              <div className="flex items-center">
                <GrClock className="text-sm" />
                <p className="px-2 text-xs">{expDate}</p>
              </div>
            </div>
            <div>
              <Button variant="contained" color="primary">
                JOIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
