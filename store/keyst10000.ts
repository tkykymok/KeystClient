import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import NotificationInfo from '~/classes/notificationInfo';

export interface IKeyst10000 {
  notificationInfoList: NotificationInfo[],
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10000'
})
export default class Keyst10000 extends VuexModule implements IKeyst10000 {
  private _notificationInfoList: NotificationInfo[] = [];

  get notificationInfoList(): NotificationInfo[] {
    return this._notificationInfoList;
  }

  /**
   * お知らせ情報一覧を設定する。
   * @param value
   * @constructor
   */
  @Mutation
  SET_NOTIFICATION_INFO_LIST(value: NotificationInfo[]) {
    // お知らせ情報一覧を初期化する。
    this._notificationInfoList.splice(0);
    // サーバーから取得したお知らせ情報一覧全件を追加する。
    this._notificationInfoList.push(...value);
  }

  /**
   * 初期表示
   */
  @Action({ rawError: true })
  public async initialize() {
    await $axios.get('/keyst10000/initialize')
      .then(({ data }) => {
          this.SET_NOTIFICATION_INFO_LIST(data.notificationList);
        }
      );
  }
}
