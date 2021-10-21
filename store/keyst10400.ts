import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';

export interface IKeyst10400 {
  userInfoList: UserInfo4Keyst10400[];
}

@Module({
  // Nuxt.jsのモジュールであることを宣言
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst10400'
})
export default class Keyst10400 extends VuexModule implements IKeyst10400 {
  /** ユーザー情報リスト */
  private _userInfoList: UserInfo4Keyst10400[] = [];

  get userInfoList(): UserInfo4Keyst10400[] {
    return this._userInfoList;
  }

  /**
   * ユーザー情報リストを設定する
   * @param value
   * @constructor
   */
  @Mutation
  SET_USER_INFO_LIST(value: UserInfo4Keyst10400[]) {
    // ユーザー情報リストを初期化する
    this._userInfoList.splice(0);
    // サーバーから取得したユーザー情報リスト全件を追加する
    value.forEach(obj => {
      this._userInfoList.push(obj);
    });
  }

  /**
   * ユーザー情報リストを名前でソートする
   * @param set
   * @constructor
   */
  @Mutation
  SORT_NAME_USER_INFO_LIST(set: number) {
    // 奇数回：昇順、偶数回：降順
    this._userInfoList.sort((a, b) => {
      if (a.userNameKana < b.userNameKana) return -1 * set;
      if (a.userNameKana > b.userNameKana) return 1 * set;
      return 0;
    })
  }

  /**
   * ユーザー情報リストをチームでソートする
   * @param set
   * @constructor
   */
  @Mutation
  SORT_TEAM_USER_INFO_LIST(set: number) {
    // 奇数回：昇順、偶数回：降順
    this._userInfoList.sort((a, b) => {
      if (a.team < b.team) return -1 * set;
      if (a.team > b.team) return 1 * set;
      return 0;
    })
  }

  /**
   * 初期表示 ユーザー情報リスト
   */
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    this.SET_USER_INFO_LIST(data);
  }
}
