import React from 'react';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <p>หมดเวลา</p>;
  } else {
    return <span>{days > 0 ? `${days}d ${hours}h` : `${hours}h ${minutes}m`}</span>;
  }
};
const CountdownTimer = ({ expDate }: { expDate: string }) => {
  return <Countdown date={Date.parse(expDate)} renderer={renderer} />;
};

export default CountdownTimer;
