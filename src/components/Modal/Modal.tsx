import React from "react";
import { HiX } from "react-icons/hi";

type PropsType = {
  children: React.PropsWithChildren<React.ReactNode>;
  deactivate: () => void;
};

const CModal = ({ children, deactivate }: PropsType): JSX.Element => {
  return (
    <div className="fixed z-40 inset-0 overflow-y-auto min-h-screen">
      <div className="flex items-end justify-center pb-20 pt-4 px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-black opacity-80"
            onClick={deactivate}
          />
        </div>
        <span
          className="inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom -ml-0 w-96 mt-32 sm:mt-8 text-left bg-dark-gray rounded-lg shadow-xl overflow-hidden transform transition-all sm:align-middle sm:my-8 "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="p-4 bg-secondary sm:p-6">
            <HiX className="ml-auto text-white cursor-pointer" onClick={deactivate}/>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CModal;
