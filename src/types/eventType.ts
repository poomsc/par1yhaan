type eventType = {
  eventName: string;
  denominator: number;
  currentDenominator: number;
  price: number;
  originalPrice: number;
  captainInfo: {
    userId: number;
    email: string;
  };
  expDate: string;
  pictureUrl?: string;
  id: number;
};

export default eventType;
