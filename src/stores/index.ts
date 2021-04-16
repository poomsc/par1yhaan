import { createContext } from "react";
import { UserStore } from "./userStore";

// export default RootStore;
export const rootStoreContext = createContext({
  userStore: new UserStore()
});
