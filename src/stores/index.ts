import { createContext } from 'react';
import { UserStore } from './userStore';
import { ApplicationStore } from './applicationStore';

// export default RootStore;
export const rootStoreContext = createContext({
  userStore: new UserStore(),
  applicationStore: new ApplicationStore(),
});
