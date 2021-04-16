import React, { useState, useEffect } from 'react';
import CardItem from 'components/CardItem';
import Layout from 'containers/Layout';
import { Helmet } from 'react-helmet';
import { getAllParty } from 'services/databaseService';
import eventType from 'types/eventType';
import ReactLoading from 'react-loading';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';

const HomePage: React.FC = observer(
  (): JSX.Element => {
    const [eventData, setEventData] = useState<eventType[]>();
    const {
      userStore: { favoriteList, joinedPartyList },
    } = useStores();
    // const [passEvent, setPassEvent] = useState<eventType[]>();
    // const [currentEvent, setCurrentEvent] = useState<eventType[]>();

    useEffect(() => {
      getAllParty()
        .then((data) =>
          Object.keys(data).map(function (index) {
            data[index].id = parseInt(index);
            return data[index];
          }),
        )
        .then((data) => {
          const currentEvent = data.filter((e) => Date.parse(e.expDate) > Date.now());
          const passEvent = data.filter((e) => Date.parse(e.expDate) <= Date.now());
          setEventData(currentEvent.concat(passEvent));
        })
        .catch((e) => console.log(e));
    }, []);

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page</title>
        </Helmet>
        <Layout>
          <div className="max-w-6xl mx-auto px-1 md:px-2">
            <div className="flex flex-wrap items-center justify-center min-h-screen">
              {eventData ? (
                eventData.map((event) => (
                  <CardItem
                    eventData={event}
                    isFavorite={favoriteList.includes(event.id)}
                    isJoined={joinedPartyList.includes(event.id)}
                    index={event.id}
                    key={event.id}
                  />
                ))
              ) : (
                <ReactLoading type={'spinningBubbles'} color="#20639b" className="-mt-16" />
              )}
            </div>
          </div>
        </Layout>
      </>
    );
  },
);

export default HomePage;
