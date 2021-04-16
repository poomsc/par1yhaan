import React from 'react';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <p>หมดเวลา</p>;
  } else {
    // Render a countdown
    return (
      <span>
        {days}:{hours}:{minutes}
      </span>
    );
  }
};
const CountdownTimer = ({ expDate }: { expDate: string }) => {
  return <Countdown date={Date.parse(expDate)} renderer={renderer} />;
};

export default CountdownTimer;
