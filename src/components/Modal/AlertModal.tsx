import { useStores } from 'hooks/useStore';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { GoAlert } from 'react-icons/go';

type bgAlertType = { [key: string]: string };

const AlertModal = observer(
  (): JSX.Element => {
    const {
      applicationStore: {
        AlertInfo: { message, type },
        setAlertInfo,
      },
    } = useStores();
    const [showAlert, setShowAlert] = React.useState(false);

    useEffect(() => {
      setShowAlert(message !== '');
      if (!showAlert) return;

      const timer = setTimeout(() => {
        setShowAlert(false);
        setAlertInfo({ message: '', type: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }, [message, setAlertInfo, showAlert]);

    const bg_color: bgAlertType = {
      info: 'bg-blue-400',
      warning: 'bg-yellow-400',
      danger: 'bg-red-500',
    };

    return (
      <>
        {showAlert && (
          <div
            className={`text-white px-4 py-4 border-0 rounded fixed z-50 bottom-0 right-0 mb-6 mr-6 ${bg_color[type]}`}
          >
            <span className="inline-block align-middle mr-2 text-xl">
              <GoAlert />
            </span>
            <span className="inline-block align-middle mr-8">{message}</span>
            <button
              className="absolute right-0 top-0 mr-6 mt-4 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
              onClick={() => setShowAlert(false)}
            >
              <span>×</span>
            </button>
          </div>
        )}
      </>
    );
  },
);

export default AlertModal;
