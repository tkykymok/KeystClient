import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import SkillSheetInfo from '~/classes/skillSheetInfo';
import SkillSheetHeader from '~/classes/skillSheetHeader';
import SkillSheetDetail from '~/classes/skillSheetDetail';
import Keyst10200SaveQ from '~/classes/form/keyst10200SaveQ';
import Keyst10200UpdateQ from '~/classes/form/keyst10200UpdateQ';
import Keyst10200DeleteQ from '~/classes/form/keyst10200DeleteQ';
import NotificationInfo from '~/classes/notificationInfo';
import Keyst10600SaveQ from '~/classes/form/keyst10600SaveQ';

export interface IKeyst10600 {
  notificationInfoList: NotificationInfo[],
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10600'
})
export default class Keyst10600 extends VuexModule implements IKeyst10600 {
  /** お知らせ情報一覧 */
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
    await $axios.get(
      '/keyst10600/initialize'
    ).then(({ data }) => {
      this.SET_NOTIFICATION_INFO_LIST(data.notificationInfoList);
    });
  }

  /**
   * お知らせ新規保存
   */
  @Action({ rawError: true })
  public async save(reqForm: Keyst10600SaveQ) {
    await $axios.post(
      '/keyst10600/save', reqForm
    ).then(({ data }) => {
      this.initialize();
    });
  }


}
