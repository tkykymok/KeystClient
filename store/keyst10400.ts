import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import UserInfo4Kyest10400 from '~/classes/userInfo4Kyest10400';

export interface IKeyst10400 {
  userInfoList: UserInfo4Kyest10400[];
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
  private _userInfoList: UserInfo4Kyest10400[] = [];

  // 上記のStateにアクセスするgetterを作成
  get userInfoList(): UserInfo4Kyest10400[] {
    return this._userInfoList;
  }

  @Mutation
  SET_USER_INFO_LIST(value: UserInfo4Kyest10400) {
    // ユーザー情報一覧を初期化する
    this._userInfoList.splice(0);
    // サーバーから取得したユーザー情報一覧全件を追加する
    this._userInfoList.push(value);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  // 初期表示
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    let dataList: any[] = data;
    dataList.forEach(obj => {
      this.SET_USER_INFO_LIST(obj.userInfo);
    });
  }
}