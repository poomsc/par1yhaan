import { action, observable, makeAutoObservable } from 'mobx';
import { writeUserData } from 'services/databaseService';
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
  @observable currentUser = {};
  @observable favoriteList = [] as number[];
  @observable joinedPartyList = [] as number[];

  @action addFavorite = (value: number): void => {
    this.favoriteList.push(value);
    this.updateUserInfo();
  };
  @action removeFavorite = (value: number): void => {
    this.favoriteList = removeItemOnce(this.favoriteList, value);
    this.updateUserInfo();
  };

  @action fetchData = (): void => {
    console.log('fetch user data');

    this.isLogin = true;
    this.favoriteList = [];
    this.joinedPartyList = [];
  };

  @action setUser = (user: any) => {
    console.log(user);
    if (!user) return;
    this.currentUser = user;
    this.userEmail = user.email;
    this.isLogin = typeof user.email === 'string' && user.email.length > 0;
  };

  @action logout = async () => {
    this.isLogin = false;
    this.currentUser = {};
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
    writeUserData({
      email: this.userEmail,
      favoriteList: this.favoriteList,
      joinedPartyList: this.joinedPartyList,
    });
  };
}
