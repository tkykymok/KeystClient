import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import UserBasicInfo from '~/classes/userBasicInfo';
import PrjInfo from '~/classes/prjInfo';

export interface IKeyst10400 {
  userBasicInfoList: UserBasicInfo[];
  prjInfoList: PrjInfo[];
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
  private _userBasicInfoList: UserBasicInfo[] = [];
  // 案件情報一覧
  private _prjInfoList: PrjInfo[] = [];

  // 上記のStateにアクセスするgetterを作成
  get userBasicInfoList(): UserBasicInfo[] {
    return this._userBasicInfoList;
  }

  get prjInfoList(): PrjInfo[] {
    return this._prjInfoList;
  }

  @Mutation
  SET_USER_BASIC_INFO_LIST(value: UserBasicInfo) {
    // メンバー情報一覧を初期化する
    this._userBasicInfoList.splice(0);
    // サーバーから取得したメンバー情報一覧全件を追加する
    this._userBasicInfoList.push(value);
  }

  @Mutation
  SET_PRJ_INFO_LIST(value: PrjInfo) {
    // サーバーから取得した案件情報一覧全件を追加する。
    this._prjInfoList.push(value);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    this.SET_USER_BASIC_INFO_LIST(data.userBasicInfo);
    this.SET_PRJ_INFO_LIST(data.prjInfo);
  }
}