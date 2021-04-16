import { action, observable, makeAutoObservable } from 'mobx';

export interface IApplicationStore {
  AlertInfo: {
    message: string;
    type: string;
  };
}

export class ApplicationStore implements IApplicationStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable AlertInfo = {
    message: '',
    type: 'warning',
  };

  /**
   * for show modal alert
   * @param {string} message
   * @param {string} type : [info, warning, danger] default is warning
   */
  @action setAlertInfo = (data: { message: string; type: string }) => {
    this.AlertInfo = {
      message: data.message,
      type: data.type,
    };
    if (data.type === '') this.AlertInfo.type = 'warning';
  };
}
