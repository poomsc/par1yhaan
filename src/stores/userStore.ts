import { action, observable, makeAutoObservable } from 'mobx';

export interface IUserStore {
  isLogin:boolean,
  userInfo: {
    email: string;
  };
  favoriteList: number[];
  joined: number[];
}

export class UserStore implements IUserStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable isLogin = true;
  @observable userInfo = { email: '' };
  @observable favoriteList = [];
  @observable joined = [];

  @action fetchData = (): void => {
    console.log("fetch user data");
    this.userInfo = {
      email: "abc@gmail.com"
    }
    this.isLogin = true;
    this.favoriteList = [];
    this.joined = [];
  };

  @action logout = (): void => {
    this.isLogin = false;
  }
}
