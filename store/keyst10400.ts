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
  // Stateを作成
  // ユーザー情報一覧
  private _userInfoList: UserInfo4Keyst10400[] = [];

  // 上記のStateにアクセスするgetterを作成
  get userInfoList(): UserInfo4Keyst10400[] {
    return this._userInfoList;
  }

  @Mutation
  SET_USER_INFO_LIST(value: UserInfo4Keyst10400[]) {
    // ユーザー情報一覧を初期化する
    this._userInfoList.splice(0);
    value.forEach(obj => {
      this._userInfoList.push(Object.assign(new UserInfo4Keyst10400(), obj));
    });
    // サーバーから取得したユーザー情報一覧全件を追加する
    // this._userInfoList.push(value);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  // 初期表示
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    console.log("---Keyst10400_Store---");
    console.log(data);
    console.log("---Keyst10400_Store---");
    this.SET_USER_INFO_LIST(data)
    let dataList: any[] = data;
    // dataList.forEach(obj => {
    //   this.SET_USER_INFO_LIST(obj.userInfo);
    // });
  }
}