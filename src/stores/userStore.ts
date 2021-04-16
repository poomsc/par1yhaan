import { action, observable, makeAutoObservable } from 'mobx';
import { writeUserData, readUserData, updateCurrentDenominator } from 'services/databaseService';
import { auth } from 'services/firebase';

export interface IUserStore {
  isLogin: boolean;
  userEmail: string;
  currentUser: any;
  favoriteList: number[];
  joinedPartyList: number[];
}

function removeItemOnce(arr: number[], value: number) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export class UserStore implements IUserStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable isLogin = false;
  @observable userEmail = '';
  @observable currentUser = { uid: '' };
  @observable favoriteList = [] as number[];
  @observable joinedPartyList = [] as number[];

  @action addFavorite = (partyId: number): void => {
    this.favoriteList.push(partyId);
    this.updateUserInfo();
  };

  @action removeFavorite = (partyId: number): void => {
    this.favoriteList = removeItemOnce(this.favoriteList, partyId);
    this.updateUserInfo();
  };

  @action joinParty = (partyId: number, currentDenominator: number): void => {
    console.log('join ', partyId);
    this.joinedPartyList.push(partyId);
    this.updateUserInfo();
    updateCurrentDenominator(partyId, currentDenominator + 1);
  };

  @action unjoinParty = (partyId: number, currentDenominator: number): void => {
    this.joinedPartyList = removeItemOnce(this.joinedPartyList, partyId);
    this.updateUserInfo();
    console.log("cur", currentDenominator);
    
    updateCurrentDenominator(partyId, currentDenominator - 1);
  };

  @action fetchUserData = async () => {
    const uData = await readUserData(this.currentUser.uid);
    this.favoriteList = uData['favoriteList'] || [];
    this.joinedPartyList = uData['joinedPartyList'] || [];
  };

  @action setUser = (user: any) => {
    if (!user) return;
    this.currentUser = user;
    this.userEmail = user.email;
    this.isLogin = typeof user.uid === 'string' && user.uid.length > 0;
    this.fetchUserData();
  };

  @action logout = async () => {
    this.isLogin = false;
    this.currentUser = { uid: '' };
    this.userEmail = '';

    return await auth.signOut();
  };

  @action login = async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  @action signup = async (email: string, password: string) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };

  @action updateUserInfo = () => {
    if (!this.currentUser.uid) return;
    writeUserData({
      uid: this.currentUser.uid,
      email: this.userEmail,
      favoriteList: this.favoriteList,
      joinedPartyList: this.joinedPartyList,
    });
  };
}
