import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';
import Filtering4Keyst10400 from '~/classes/filtering4Keyst10400';

export interface IKeyst10400 {
  userInfoList: UserInfo4Keyst10400[];
  filtering: Filtering4Keyst10400 | null;
}

@Module({
  // Nuxt.jsのモジュールであることを宣言
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst10400'
})
export default class Keyst10400 extends VuexModule implements IKeyst10400 {
  // Stateを作成
  // ユーザー情報一覧
  private _userInfoList: UserInfo4Keyst10400[] = [];
  // フィルタリング
  private _filtering: Filtering4Keyst10400 = new Filtering4Keyst10400();

  // 上記のStateにアクセスするgetterを作成
  get userInfoList(): UserInfo4Keyst10400[] {
    return this._userInfoList;
  }

  get filtering(): Filtering4Keyst10400 {
    return this._filtering;
  }

  @Mutation
  SET_USER_INFO_LIST(value: UserInfo4Keyst10400[]) {
    // ユーザー情報一覧を初期化する
    this._userInfoList.splice(0);
    // サーバーから取得したユーザー情報一覧全件を追加する
    value.forEach(obj => {
      this._userInfoList.push(obj);
    });
  }

  @Mutation
  SET_FILTERING(value: Filtering4Keyst10400) {
    // サーバーから取得したフィルタリングを追加する
    Object.assign(this._filtering, value);
  }

  @Mutation
  SORT_NAME_USER_INFO_LIST(set: number) {
    // ユーザー名かなでソートする(奇数回：昇順、偶数回：降順)
    this._userInfoList.sort((a, b) => {
      if (a.userNameKana < b.userNameKana) return -1 * set;
      if (a.userNameKana > b.userNameKana) return 1 * set;
      return 0;
    })
  }

  @Mutation
  SORT_TEAM_USER_INFO_LIST(set: number) {
    // チームでソートする(奇数回：昇順、偶数回：降順)
    this._userInfoList.sort((a, b) => {
      if (a.team < b.team) return -1 * set;
      if (a.team > b.team) return 1 * set;
      return 0;
    })
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  // 初期表示
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    this.SET_USER_INFO_LIST(data);
  }

  // 初期表示(フィルタリング)
  @Action({ rawError: true })
  public async initializeFiltering() {
    const { data } = await $axios.get('/keyst10400/filtering');
    this.SET_FILTERING(data);
  }
}