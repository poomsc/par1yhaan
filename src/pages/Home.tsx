import CardItem from 'components/Card';
import Layout from 'containers/Layout';
import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = (): JSX.Element => {
  const mockEvent = [
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    {
      event: '1 หัวชาร์จและสาย',
      denominator: 5,
      currentDenominator: 3,
      price: 1200,
      originalPrice: 2000,
      shopInfo: {
        shopName: "Medese SHOP Thailand",
        productNumber: 5,
        follower: 3
      },
      shippingCost: 50,
      expDate: "12/1/2021",
    },
    
  ];
  const mockUser = {
    favoriteList: [1, 3],
    joined: [0, 2],
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <Layout>
        <div className="max-w-6xl mx-auto px-1 md:px-2">
          <div className="flex flex-wrap items-center justify-center min-h-screen">
            {mockEvent.map((event, index) => (
              <CardItem
                eventData={event}
                isFavorite={mockUser.favoriteList.includes(index)}
                isJoined={mockUser.joined.includes(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
